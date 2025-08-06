import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { SearchBar } from '../components/SearchBar';
import { ProviderCard } from '../components/ProviderCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Filter, SlidersHorizontal } from 'lucide-react';
import { serviceProviders } from '../data/mockData';
import { ServiceProvider } from '../types';

interface ServicesPageProps {
  serviceType?: string;
}

export const ServicesPage = ({ serviceType }: ServicesPageProps) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'rating' | 'price' | 'distance'>('rating');
  
  // Filter providers based on service type and search query
  const filteredProviders = serviceProviders.filter(provider => {
    const matchesService = !serviceType || provider.services.some(service => 
      service.toLowerCase().includes(serviceType.toLowerCase())
    );
    const matchesSearch = !searchQuery || 
      provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      provider.services.some(service => service.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesService && matchesSearch;
  });

  // Sort providers
  const sortedProviders = [...filteredProviders].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price':
        return a.hourlyRate - b.hourlyRate;
      case 'distance':
        return a.distance - b.distance;
      default:
        return 0;
    }
  });

  const handleBookProvider = (provider: ServiceProvider) => {
    // In a real app, this would navigate to booking page
    console.log('Booking provider:', provider.name);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-3xl font-bold mb-2">
                {serviceType ? `${serviceType} Services` : 'All Services'}
              </h1>
              <p className="text-muted-foreground">
                Find trusted professionals in your area
              </p>
            </div>
          </div>
          
          <SearchBar 
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </div>
      </div>

      {/* Filters and Results */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 space-y-6">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Sort by</label>
                  <div className="space-y-2">
                    {[
                      { value: 'rating', label: 'Highest Rated' },
                      { value: 'price', label: 'Lowest Price' },
                      { value: 'distance', label: 'Nearest' }
                    ].map(option => (
                      <Button
                        key={option.value}
                        variant={sortBy === option.value ? 'default' : 'ghost'}
                        size="sm"
                        className="w-full justify-start"
                        onClick={() => setSortBy(option.value as 'rating' | 'price' | 'distance')}
                      >
                        {option.label}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Availability</label>
                  <div className="space-y-2">
                    <Badge variant="outline" className="cursor-pointer">Available Now</Badge>
                    <Badge variant="outline" className="cursor-pointer">Today</Badge>
                    <Badge variant="outline" className="cursor-pointer">This Week</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">
                {sortedProviders.length} professionals available
              </h2>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
            </div>

            <div className="space-y-4">
              {sortedProviders.map(provider => (
                <ProviderCard
                  key={provider.id}
                  provider={provider}
                  onSelect={() => handleBookProvider(provider)}
                />
              ))}
            </div>

            {sortedProviders.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No providers found for your search.
                </p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => setSearchQuery('')}
                >
                  Clear Search
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};