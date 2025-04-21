
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#1EAEDB] text-white font-medium border-t-4 border-[#EA384C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <img
              src="/lovable-uploads/1db19379-8c72-46b8-98b1-ca3f3cd00ac4.png"
              alt="DexorBond logotyp"
              className="h-10 w-auto"
              style={{ objectFit: "contain" }}
            />
            <div>
              <div className="text-2xl font-bold" style={{ color: "#fff" }}>DexorBond</div>
              <div className="text-xs text-white/90">Specialister på fukt och golvlösningar</div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-10 mt-4 md:mt-0 items-center">
            <div className="space-y-1 text-center md:text-left">
              <span className="block">Stockholm / Mälardalen</span>
              <span className="block">info@dexorbond.se</span>
              <span className="block">08 – 123 45 67</span>
            </div>
            <div className="text-center">
              &copy; {currentYear} DexorBond
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

