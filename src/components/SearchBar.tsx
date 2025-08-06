import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, MapPin, Filter } from 'lucide-react';
import { useState } from 'react';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  location?: string;
  onSearch?: () => void;
}

export const SearchBar = ({ 
  searchQuery, 
  onSearchChange, 
  location = "Mumbai, India", 
  onSearch 
}: SearchBarProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const handleSearch = () => {
    if (onSearch) onSearch();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex gap-3 p-3 bg-card/80 backdrop-blur-sm rounded-2xl shadow-strong border border-border/50 hover:shadow-xl transition-all duration-300">
        <div className="flex-1 relative group">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5 group-hover:text-primary transition-colors" />
          <Input
            placeholder="Search for cleaning, plumbing, electrical..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            onKeyPress={handleKeyPress}
            onFocus={() => setIsExpanded(true)}
            onBlur={() => setIsExpanded(false)}
            className="pl-12 h-12 border-none shadow-none focus-visible:ring-0 bg-transparent text-base placeholder:text-muted-foreground/70 group-hover:placeholder:text-muted-foreground transition-colors"
          />
        </div>
        
        <div className="flex items-center gap-3 px-4 text-sm text-muted-foreground border-l border-border/40">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="hidden sm:block font-medium">{location}</span>
        </div>
        
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="icon" 
            className="h-12 w-12 border-border/40 hover:border-primary/40"
          >
            <Filter className="w-4 h-4" />
          </Button>
          <Button 
            onClick={handleSearch}
            size="lg"
            className="h-12 px-8 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-medium shadow-md hover:shadow-lg transition-all duration-200"
          >
            Search
          </Button>
        </div>
      </div>
      
      {isExpanded && (
        <div className="mt-2 p-3 bg-card/90 backdrop-blur rounded-lg border border-border/30 shadow-md">
          <div className="flex flex-wrap gap-2">
            <span className="text-xs text-muted-foreground mb-1">Popular searches:</span>
            {['House cleaning', 'Plumber', 'AC repair', 'Electrician', 'Painter'].map((term) => (
              <Button
                key={term}
                variant="ghost"
                size="sm"
                className="h-7 text-xs text-muted-foreground hover:text-foreground"
                onClick={() => onSearchChange(term)}
              >
                {term}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};