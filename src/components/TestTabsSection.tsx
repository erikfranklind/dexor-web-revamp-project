
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestTabsSection = () => {
  return (
    <section className="py-0 bg-white">
      <div className="w-full mx-auto">
        <Tabs defaultValue="fukt" className="w-full">
          <TabsList className="flex w-full bg-white border-b border-gray-200">
            <TabsTrigger 
              value="hem" 
              className="flex-1 text-lg py-3 border-b-2 border-transparent data-[state=active]:border-[#1EAEDB] data-[state=active]:text-[#1EAEDB] rounded-none"
            >
              Hem
            </TabsTrigger>
            <TabsTrigger 
              value="fukt" 
              className="flex-1 text-lg py-3 border-b-2 border-transparent data-[state=active]:border-[#1EAEDB] data-[state=active]:text-[#1EAEDB] rounded-none"
            >
              Fukt och lukt
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="hem" className="px-4 max-w-7xl mx-auto">
            <div className="py-6">
              <img 
                src="/lovable-uploads/1753d470-17bc-43ed-ad6b-1e989d89b4c0.png" 
                alt="Bild för Hem-fliken" 
                className="w-full border" 
              />
            </div>
          </TabsContent>
          
          <TabsContent value="fukt" className="px-4 max-w-7xl mx-auto">
            <div className="py-12">
              <div className="flex flex-col md:flex-row md:gap-12 items-start">
                <div className="md:w-1/2 space-y-8">
                  <div className="flex items-center mb-4">
                    <Wrench className="w-10 h-10 text-[#ea384c] mr-4" />
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1EAEDB]">Fuktskydd & Hantverk</h2>
                  </div>
                  
                  <div className="text-xl text-[#ea384c]">
                    <p>Vi är DexorBond – expert på fukt, tätskikt och golvlösningar. Hantverkare du kan lita på.</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-6 mt-4">
                    <div className="flex items-center">
                      <svg className="w-6 h-6 text-[#1EAEDB] mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3.73 9.73a8.24 8.24 0 0116.54 0 8.24 8.24 0 01-16.54 0z" />
                        <path d="M3.73 14.27a8.24 8.24 0 0116.54 0 8.24 8.24 0 01-16.54 0z" />
                      </svg>
                      <span>Fuktsäkerhet</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-6 h-6 text-[#ea384c] mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11 4h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1V5a1 1 0 011-1z" />
                        <path d="M11 15h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3a1 1 0 011-1z" />
                        <path d="M4 9h4a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3a1 1 0 011-1z" />
                        <path d="M15 9h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3a1 1 0 011-1z" />
                      </svg>
                      <span>Personlig Service</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-[#1EAEDB] rounded-full mr-2"></div>
                      <span>Hantverk & Kvalitet</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 mt-6">
                    <Button 
                      className="bg-[#ea384c] hover:bg-red-600 text-white"
                    >
                      Kontakta oss
                    </Button>
                    <Button 
                      variant="outline"
                      className="border-[#ea384c] text-[#ea384c] hover:bg-red-50"
                    >
                      Våra tjänster
                    </Button>
                  </div>
                </div>
                
                <div className="md:w-1/2 mt-8 md:mt-0 border border-[#1EAEDB] rounded-lg p-6">
                  <div className="flex justify-center items-center">
                    <img 
                      src="/lovable-uploads/3b771992-21b0-49ab-ae33-e8f5fd15c940.png" 
                      alt="DexorBond logo" 
                      className="w-4/5 max-w-xs h-auto" 
                    />
                  </div>
                  <p className="text-center text-[#ea384c] mt-4">Certifierad hantverkare inom fukt & golv</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TestTabsSection;
