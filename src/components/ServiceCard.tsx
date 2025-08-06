import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ServiceCategory } from '../types';

interface ServiceCardProps {
  service: ServiceCategory;
  onClick: () => void;
}

export const ServiceCard = ({ service, onClick }: ServiceCardProps) => {
  return (
    <Card 
      className="cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105 bg-gradient-to-br from-card to-secondary/10"
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className="text-center space-y-4">
          <div className="text-4xl mb-2">{service.icon}</div>
          <h3 className="font-semibold text-lg text-foreground">{service.name}</h3>
          <p className="text-sm text-muted-foreground">{service.description}</p>
          <div className="flex flex-col gap-2">
            <Badge variant="secondary" className="text-xs">
              {service.averagePrice}
            </Badge>
            <span className="text-xs text-muted-foreground">
              {service.providers} providers available
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};