import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection = () => {
  return (
    <section className="py-20 px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <Card className="bg-card/90 backdrop-blur-sm border-border">
          <CardContent className="p-12">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gradient mb-6">
              Partner With Us
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore investment opportunities and strategic partnerships with Ravexa Holding Group
            </p>
            
            <div className="space-y-4 mb-8">
              <p className="text-lg text-muted-foreground">
                <span className="font-medium text-gold">Email:</span> info@ravexaholding.com
              </p>
              <p className="text-lg text-muted-foreground">
                <span className="font-medium text-gold">Phone:</span> +1 (555) 123-4567
              </p>
            </div>

            <Button className="btn-luxury px-10 py-6 text-lg">
              Schedule Consultation
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;