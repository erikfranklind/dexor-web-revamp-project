import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ReferencesSection from '@/components/ReferencesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import TestTabsSection from "@/components/TestTabsSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <TestTabsSection />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ReferencesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
