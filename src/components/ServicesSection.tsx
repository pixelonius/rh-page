import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    title: 'Consulting',
    description: 'Operational consulting services delivered to our strategic partners for enhanced business efficiency.',
  },
  {
    title: 'Real Estate',
    description: 'Direct investments in premium properties and real estate development projects across key markets.',
  },
  {
    title: 'Financial Markets Investor',
    description: 'Active participation in global financial markets through sophisticated trading and investment strategies.',
  },
  {
    title: 'Software & AI',
    description: 'Custom automation and AI solutions for partners, alongside proprietary digital products and platforms.',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gradient mb-6">
            Portfolio Industries
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Industries where our portfolio companies operate and our core business activities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border-border hover:bg-card transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold text-gold mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;