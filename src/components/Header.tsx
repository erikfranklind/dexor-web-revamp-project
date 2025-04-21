
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-dexor-800">DEXOR</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-dexor-600 dark:text-gray-300 dark:hover:text-dexor-400 transition-colors">
              Tjänster
            </a>
            <a href="#about" className="text-gray-700 hover:text-dexor-600 dark:text-gray-300 dark:hover:text-dexor-400 transition-colors">
              Om oss
            </a>
            <a href="#contact" className="text-gray-700 hover:text-dexor-600 dark:text-gray-300 dark:hover:text-dexor-400 transition-colors">
              Kontakt
            </a>
            <Button className="bg-dexor-600 hover:bg-dexor-700 text-white">
              Begär offert
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={toggleMobileMenu} aria-label="Menu">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            <a 
              href="#services" 
              className="block text-gray-700 hover:text-dexor-600 dark:text-gray-300 dark:hover:text-dexor-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tjänster
            </a>
            <a 
              href="#about" 
              className="block text-gray-700 hover:text-dexor-600 dark:text-gray-300 dark:hover:text-dexor-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              Om oss
            </a>
            <a 
              href="#contact" 
              className="block text-gray-700 hover:text-dexor-600 dark:text-gray-300 dark:hover:text-dexor-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kontakt
            </a>
            <Button className="w-full bg-dexor-600 hover:bg-dexor-700 text-white">
              Begär offert
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
