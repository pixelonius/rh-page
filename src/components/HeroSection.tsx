import React from 'react';
import { Button } from '@/components/ui/button';
import logoImage from '@/assets/ravexa-logo.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6">
      <div className="max-w-4xl mx-auto z-10">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src={logoImage} 
            alt="Ravexa Holding Group Logo" 
            className="w-32 h-32 mx-auto mb-6 opacity-90"
          />
        </div>

        {/* Main heading */}
        <h1 className="text-6xl md:text-8xl font-serif font-bold logo-monogram mb-6">
          RH
        </h1>
        
        <h2 className="text-4xl md:text-6xl font-serif font-semibold text-gradient mb-4">
          Ravexa Holding Group
        </h2>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light max-w-2xl mx-auto">
          Strategic Investment & Portfolio Management
        </p>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground mb-12 font-light opacity-80">
          Building sustainable value through diversified holdings and strategic partnerships
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="btn-luxury px-8 py-6 text-lg">
            Learn More
          </Button>
          <Button variant="outline" className="px-8 py-6 text-lg border-gold text-gold hover:bg-gold hover:text-primary-foreground">
            Our Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;