import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, MapPin } from 'lucide-react';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  location?: string;
}

export const SearchBar = ({ searchQuery, onSearchChange, location = "Mumbai, India" }: SearchBarProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex gap-2 p-2 bg-card rounded-lg shadow-medium border">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search for services..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 border-none shadow-none focus-visible:ring-0"
          />
        </div>
        <div className="flex items-center gap-2 px-3 text-sm text-muted-foreground border-l">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>
        <Button className="px-6">
          Search
        </Button>
      </div>
    </div>
  );
};