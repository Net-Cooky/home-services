import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Clock, CheckCircle } from 'lucide-react';
import { ServiceProvider } from '../types';

interface ProviderCardProps {
  provider: ServiceProvider;
  onSelect: () => void;
}

export const ProviderCard = ({ provider, onSelect }: ProviderCardProps) => {
  const getAvailabilityColor = (status: string) => {
    switch (status) {
      case 'available': return 'text-success';
      case 'busy': return 'text-warning';
      case 'offline': return 'text-muted-foreground';
      default: return 'text-muted-foreground';
    }
  };

  const getAvailabilityText = (status: string) => {
    switch (status) {
      case 'available': return 'Available now';
      case 'busy': return 'Busy';
      case 'offline': return 'Offline';
      default: return 'Unknown';
    }
  };

  return (
    <Card className="hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-6">
        <div className="flex gap-4">
          <div className="relative">
            <img 
              src={provider.avatar} 
              alt={provider.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            {provider.verified && (
              <CheckCircle className="absolute -bottom-1 -right-1 w-5 h-5 text-success bg-background rounded-full" />
            )}
          </div>
          
          <div className="flex-1">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-lg">{provider.name}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{provider.location} • {provider.distance} km</span>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-lg">₹{provider.hourlyRate}/hr</div>
                <div className={`text-sm ${getAvailabilityColor(provider.availability)}`}>
                  {getAvailabilityText(provider.availability)}
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{provider.rating}</span>
                <span className="text-sm text-muted-foreground">({provider.reviewCount})</span>
              </div>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">{provider.experience} experience</span>
            </div>
            
            <p className="text-sm text-muted-foreground mb-3">{provider.description}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex gap-1 flex-wrap">
                {provider.badges.map((badge, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {badge}
                  </Badge>
                ))}
              </div>
              
              <div className="flex items-center gap-2">
                <div className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {provider.responseTime}
                </div>
                <Button 
                  onClick={onSelect}
                  disabled={provider.availability === 'offline'}
                  size="sm"
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};