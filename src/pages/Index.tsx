import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { SearchBar } from '../components/SearchBar';
import { ServiceCard } from '../components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Shield, Clock, Users, Lightbulb, Palette, Code } from 'lucide-react';
import { serviceCategories } from '../data/mockData';

const Index = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleServiceSelect = (serviceName: string) => {
    navigate(`/services?type=${encodeURIComponent(serviceName)}`);
  };

  const handleHeroSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/services?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/services');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Home Services, On-Demand
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Connect with trusted, verified professionals for all your home service needs. 
            Book instantly, track in real-time, and get the job done right.
          </p>
          
          <div className="mb-12">
            <SearchBar 
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onSearch={handleHeroSearch}
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-success" />
              <span>Verified Professionals</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>Top Rated Service</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>Same Day Booking</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Services</h2>
            <p className="text-muted-foreground">
              Choose from our most requested home services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map(service => (
              <ServiceCard
                key={service.id}
                service={service}
                onClick={() => handleServiceSelect(service.name)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose HomeServices?</h2>
            <p className="text-muted-foreground">
              The easiest way to get quality home services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Trusted Professionals</h3>
                <p className="text-muted-foreground">
                  All service providers are background-checked and verified with real customer reviews.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Instant Booking</h3>
                <p className="text-muted-foreground">
                  Book services instantly or schedule for later. Real-time availability and tracking.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-success" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Satisfaction Guaranteed</h3>
                <p className="text-muted-foreground">
                  Your satisfaction is guaranteed. Not happy? We'll make it right or your money back.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet Our Founders */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Founders</h2>
            <p className="text-muted-foreground">
              The passionate team behind HomeServices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-1">Vishnu Vardhan</h3>
                <p className="text-primary font-medium mb-3">Product Manager</p>
                <p className="text-muted-foreground text-sm">
                  The visionary who conceived the idea of connecting homeowners with trusted service professionals through technology.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-1">Anish Kumar</h3>
                <p className="text-accent font-medium mb-3">UI/UX Designer</p>
                <p className="text-muted-foreground text-sm">
                  The creative mind behind the beautiful and intuitive user experience that makes finding home services effortless.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-success to-success/70 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-success-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-1">Sai Prasath</h3>
                <p className="text-success font-medium mb-3">Lead Developer</p>
                <p className="text-muted-foreground text-sm">
                  The technical expert who brought the platform to life with robust, scalable code and seamless functionality.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to get started?
          </h2>
          <p className="text-primary-foreground/90 mb-8 text-lg">
            Join thousands of happy customers who trust us with their home services.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => navigate('/services')}
            className="text-lg px-8 py-3"
          >
            Browse All Services
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
