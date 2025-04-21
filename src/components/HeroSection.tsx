
import React from 'react';
import { Button } from '@/components/ui/button';
import { Wrench, Layers, HandHelping } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] bg-gradient-to-b from-[#F3F3F3] to-white pt-28 pb-16 md:pt-36 md:pb-24 border-b-4 border-[#EA384C]">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#1EAEDB] drop-shadow-sm flex flex-wrap items-center gap-3">
              <Wrench size={48} className="text-[#EA384C]" />
              Fuktskydd & Hantverk
            </h1>
            <p className="text-xl md:text-2xl text-[#EA384C] max-w-xl font-semibold">
              Vi är DexorBond – expert på fukt, tätskikt och golvlösningar. Hantverkare du kan lita på.
            </p>
            <ul className="flex flex-wrap gap-4 text-gray-700 font-medium mt-6">
              <li className="flex items-center gap-2">
                <Layers size={24} className="text-[#1EAEDB]" /> Fuktsäkerhet
              </li>
              <li className="flex items-center gap-2">
                <HandHelping size={24} className="text-[#EA384C]" /> Personlig Service
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block w-4 h-4 rounded-full bg-[#1EAEDB]" />
                Hantverk & Kvalitet
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button className="bg-[#EA384C] hover:bg-[#1EAEDB] text-white text-lg px-7 py-6 font-bold shadow-lg">
                Kontakta oss
              </Button>
              <Button variant="outline" className="border-[#EA384C] text-[#EA384C] hover:bg-[#F3F3F3] text-lg px-7 py-6 font-bold">
                Våra tjänster
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-[#1EAEDB]/20 rounded-full blur-3xl opacity-30 -z-10"></div>
            <div className="relative bg-white rounded-xl shadow-xl overflow-hidden border-2 border-[#1EAEDB]">
              <img
                src="/lovable-uploads/1db19379-8c72-46b8-98b1-ca3f3cd00ac4.png"
                alt="DexorBond logotyp"
                className="object-contain w-[350px] h-[120px] mx-auto my-12"
              />
              <div className="px-8 pb-8">
                <p className="text-center text-[#EA384C] font-semibold text-lg">
                  Certifierad hantverkare inom fukt & golv
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
