export interface ServiceProvider {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  reviewCount: number;
  experience: string;
  verified: boolean;
  services: string[];
  hourlyRate: number;
  description: string;
  availability: 'available' | 'busy' | 'offline';
  location: string;
  distance: number;
  badges: string[];
  responseTime: string;
  completedJobs: number;
}

export interface ServiceCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  averagePrice: string;
  providers: number;
}

export interface BookingRequest {
  serviceType: string;
  providerId: string;
  dateTime: Date;
  address: string;
  description: string;
  estimatedDuration: number;
}