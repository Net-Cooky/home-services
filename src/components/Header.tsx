import { Button } from '@/components/ui/button';
import { Bell, User, Menu, Home } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => navigate('/')}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <Home className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                HomeServices
              </h1>
              <p className="text-xs text-muted-foreground">On-demand professionals</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <Button 
              variant={isActive('/') ? 'default' : 'ghost'}
              onClick={() => navigate('/')}
              className="font-medium"
            >
              Home
            </Button>
            <Button 
              variant={isActive('/services') ? 'default' : 'ghost'}
              onClick={() => navigate('/services')}
              className="font-medium"
            >
              Services
            </Button>
            <Button 
              variant={isActive('/how-it-works') ? 'default' : 'ghost'}
              onClick={() => navigate('/how-it-works')}
              className="font-medium"
            >
              How it works
            </Button>
            <Button 
              variant={isActive('/support') ? 'default' : 'ghost'}
              onClick={() => navigate('/support')}
              className="font-medium"
            >
              Support
            </Button>
          </nav>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden md:flex relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full text-xs flex items-center justify-center text-destructive-foreground">
                3
              </span>
            </Button>
            <Button variant="outline" size="icon" className="border-primary/20 hover:border-primary/40">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};