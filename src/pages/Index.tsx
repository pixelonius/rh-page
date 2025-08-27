import React from 'react';
import logoImage from '/lovable-uploads/df97d264-ea2d-4664-bd98-0d85df1826b6.png';
import ServicesSection from '../components/ServicesSection';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* Animated Wave Background */}
      <div className="wave-background"></div>
      
      {/* Logo and Company Name */}
      <div className="logo-container">
        <img 
          src={logoImage} 
          alt="Ravexa Holdings Group Logo" 
          className="logo-image w-48 h-48 mb-8"
        />
        <h1 className="company-name text-4xl md:text-5xl text-center mb-16">
          Ravexa Holdings Group
        </h1>
      </div>
      
      {/* Services Section */}
      <ServicesSection />
    </div>
  );
};

export default Index;
