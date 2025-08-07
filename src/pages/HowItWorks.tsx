import { Header } from '../components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Search, UserCheck, Calendar, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Search & Browse",
      description: "Find the perfect service provider by browsing categories or searching for specific services in your area."
    },
    {
      icon: UserCheck,
      title: "Choose Your Professional",
      description: "Compare profiles, read reviews, check ratings, and select the best-matched verified professional for your needs."
    },
    {
      icon: Calendar,
      title: "Book & Schedule",
      description: "Choose your preferred time slot, get instant confirmation, and receive real-time updates about your service."
    },
    {
      icon: CheckCircle,
      title: "Service Complete",
      description: "Get quality service delivered on time, make secure payments, and leave your review to help others."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            How HomeServices Works
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Getting quality home services has never been easier. Follow these simple steps to connect with trusted professionals.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of satisfied customers who trust HomeServices for their home maintenance needs.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;