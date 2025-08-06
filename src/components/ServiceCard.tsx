import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ServiceCategory } from '../types';
import { 
  Sparkles, 
  Wrench, 
  Zap, 
  Hammer, 
  Palette, 
  Settings, 
  Thermometer, 
  Leaf,
  LucideIcon
} from 'lucide-react';

interface ServiceCardProps {
  service: ServiceCategory;
  onClick: () => void;
}

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Wrench, 
  Zap,
  Hammer,
  Palette,
  Settings,
  Thermometer,
  Leaf
};

export const ServiceCard = ({ service, onClick }: ServiceCardProps) => {
  const IconComponent = iconMap[service.icon] || Sparkles;
  
  return (
    <Card 
      className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 bg-gradient-to-br from-card via-card to-secondary/5 border border-border/50 hover:border-primary/20 group"
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110">
            <IconComponent className="w-8 h-8 text-primary group-hover:text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-foreground mb-2">{service.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
          </div>
          <div className="flex flex-col gap-2">
            <Badge variant="secondary" className="text-xs font-medium">
              {service.averagePrice}
            </Badge>
            <span className="text-xs text-muted-foreground">
              {service.providers} professionals available
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};