import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Clock, CheckCircle, Phone, MessageCircle } from 'lucide-react';
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
    <Card className="hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/20 bg-gradient-to-br from-card to-card/50">
      <CardContent className="p-6">
        <div className="flex gap-6">
          <div className="relative flex-shrink-0">
            <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-border/30">
              <img 
                src={provider.avatar} 
                alt={provider.name}
                className="w-full h-full object-cover"
              />
            </div>
            {provider.verified && (
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-success rounded-full flex items-center justify-center border-2 border-background">
                <CheckCircle className="w-4 h-4 text-success-foreground" />
              </div>
            )}
            <div className={`absolute -top-1 -left-1 w-3 h-3 rounded-full ${
              provider.availability === 'available' ? 'bg-success' :
              provider.availability === 'busy' ? 'bg-warning' : 'bg-muted-foreground'
            }`} />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-lg text-foreground">{provider.name}</h3>
                  {provider.verified && (
                    <Badge variant="outline" className="text-xs border-success/30 text-success">
                      Verified
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{provider.location} • {provider.distance} km</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{provider.responseTime}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-xl text-foreground">₹{provider.hourlyRate}/hr</div>
                <div className={`text-sm font-medium ${getAvailabilityColor(provider.availability)}`}>
                  {getAvailabilityText(provider.availability)}
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 mb-3">
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${
                        i < Math.floor(provider.rating) 
                          ? 'fill-yellow-400 text-yellow-400' 
                          : 'text-muted-foreground'
                      }`} 
                    />
                  ))}
                </div>
                <span className="font-medium text-sm">{provider.rating}</span>
                <span className="text-sm text-muted-foreground">({provider.reviewCount} reviews)</span>
              </div>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">
                {provider.experience} experience • {provider.completedJobs} jobs completed
              </span>
            </div>
            
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{provider.description}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex gap-2 flex-wrap">
                {provider.badges.slice(0, 2).map((badge, index) => (
                  <Badge key={index} variant="secondary" className="text-xs font-medium">
                    {badge}
                  </Badge>
                ))}
                {provider.badges.length > 2 && (
                  <Badge variant="outline" className="text-xs">
                    +{provider.badges.length - 2} more
                  </Badge>
                )}
              </div>
              
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  disabled={provider.availability === 'offline'}
                  className="gap-1"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  disabled={provider.availability === 'offline'}
                  className="gap-1"
                >
                  <Phone className="w-4 h-4" />
                  Call
                </Button>
                <Button 
                  onClick={onSelect}
                  disabled={provider.availability === 'offline'}
                  size="sm"
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 px-6"
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