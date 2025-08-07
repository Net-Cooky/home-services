import { Header } from '../components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MessageCircle, HelpCircle, Clock, MapPin } from 'lucide-react';

const Support = () => {
  const contactOptions = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our support team",
      contact: "+91 98765 43210",
      hours: "Mon-Sun: 8AM-10PM"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us your questions",
      contact: "support@homeservices.com",
      hours: "Response within 2 hours"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant help available",
      contact: "Chat with us",
      hours: "24/7 Available"
    }
  ];

  const faqs = [
    {
      question: "How do I book a service?",
      answer: "Simply browse our services, select your preferred provider, choose a time slot, and confirm your booking. You'll receive instant confirmation."
    },
    {
      question: "Are all service providers verified?",
      answer: "Yes, all our service providers undergo thorough background checks, verification, and skill assessments before joining our platform."
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer: "We offer a satisfaction guarantee. If you're not happy with the service, contact us within 24 hours and we'll make it right."
    },
    {
      question: "How do payments work?",
      answer: "Payments are processed securely through our platform. You can pay via UPI, credit/debit cards, or net banking after service completion."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            We're Here to Help
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Get instant support for all your questions about HomeServices. Our team is ready to assist you.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactOptions.map((option, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <option.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                  <p className="text-muted-foreground mb-3">{option.description}</p>
                  <p className="font-medium text-primary mb-2">{option.contact}</p>
                  <p className="text-sm text-muted-foreground">{option.hours}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <HelpCircle className="w-5 h-5 text-primary" />
                        {faq.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Your Name" />
                    </div>
                    <div>
                      <Input placeholder="Email Address" type="email" />
                    </div>
                    <div>
                      <Input placeholder="Phone Number" />
                    </div>
                    <div>
                      <Textarea 
                        placeholder="How can we help you?" 
                        className="min-h-[120px]" 
                      />
                    </div>
                    <Button className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold">Our Office</h3>
                  </div>
                  <p className="text-muted-foreground mb-2">
                    123 Tech Hub, Electronic City<br />
                    Bangalore, Karnataka 560100
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>Mon-Fri: 9AM-6PM</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;