
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-dexor-50 to-white dark:from-gray-900 dark:to-gray-800 pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="gradient-text">Cybersecurity</span> Experts
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl">
              Protecting your digital assets with advanced security solutions. We provide comprehensive cybersecurity services to safeguard your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-dexor-600 hover:bg-dexor-700 text-white text-lg px-6 py-6">
                Get Started
              </Button>
              <Button variant="outline" className="border-dexor-600 text-dexor-600 hover:bg-dexor-50 text-lg px-6 py-6">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-dexor-500 rounded-full blur-3xl opacity-20 -z-10"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-tr from-dexor-700 to-dexor-400 p-6 rounded-xl">
                <div className="grid grid-cols-3 gap-4 h-full">
                  {[...Array(9)].map((_, i) => (
                    <div 
                      key={i} 
                      className="bg-white/10 rounded-lg shadow-inner flex items-center justify-center"
                    >
                      <div className="w-4 h-4 bg-white/30 rounded-full"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-800 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
