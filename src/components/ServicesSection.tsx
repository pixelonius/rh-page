import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    title: 'Strategic Investments',
    description: 'Carefully curated investment opportunities across diverse markets and sectors.',
  },
  {
    title: 'Portfolio Management',
    description: 'Active management and optimization of investment portfolios for maximum returns.',
  },
  {
    title: 'Strategic Partnerships',
    description: 'Building lasting relationships with industry leaders and innovative companies.',
  },
  {
    title: 'Corporate Advisory',
    description: 'Expert guidance on mergers, acquisitions, and strategic business decisions.',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gradient mb-6">
            Our Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Delivering excellence through comprehensive investment solutions and strategic guidance
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