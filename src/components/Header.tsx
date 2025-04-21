
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Wrench } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-4 border-[#EA384C] shadow-sm ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <img
              src="/lovable-uploads/1db19379-8c72-46b8-98b1-ca3f3cd00ac4.png"
              alt="DexorBond logotyp"
              className="h-10 w-auto"
              style={{ objectFit: "contain" }}
            />
          </a>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-[#1EAEDB] font-semibold hover:text-[#EA384C] transition-colors">Tjänster</a>
            <a href="#about" className="text-[#1EAEDB] font-semibold hover:text-[#EA384C] transition-colors">Om oss</a>
            <a href="#references" className="text-[#1EAEDB] font-semibold hover:text-[#EA384C] transition-colors">Referenser</a>
            <a href="#contact" className="text-[#1EAEDB] font-semibold hover:text-[#EA384C] transition-colors">Kontakt</a>
            <Button className="bg-[#EA384C] hover:bg-[#1EAEDB] text-white font-bold px-5 py-2">
              <Wrench className="mr-2" /> Begär offert
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={toggleMobileMenu} aria-label="Menu">
            {mobileMenuOpen ? <X size={28} color="#EA384C" /> : <Menu size={28} color="#1EAEDB" />}
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t-2 border-[#EA384C] shadow-lg">
          <div className="px-4 py-6 space-y-4">
            <a href="#services" className="block text-[#1EAEDB] font-semibold hover:text-[#EA384C] transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Tjänster
            </a>
            <a href="#about" className="block text-[#1EAEDB] font-semibold hover:text-[#EA384C] transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Om oss
            </a>
            <a href="#references" className="block text-[#1EAEDB] font-semibold hover:text-[#EA384C] transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Referenser
            </a>
            <a href="#contact" className="block text-[#1EAEDB] font-semibold hover:text-[#EA384C] transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Kontakt
            </a>
            <Button className="w-full bg-[#EA384C] hover:bg-[#1EAEDB] text-white font-bold">
              <Wrench className="mr-2" /> Begär offert
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
