
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestTabsSection = () => {
  return (
    <section className="py-0 bg-white w-full">
      <div className="max-w-7xl mx-auto">
        <Tabs defaultValue="hem" className="w-full">
          <TabsList className="mb-4 grid grid-cols-2 bg-white border-b border-gray-200 w-full">
            <TabsTrigger value="hem" className="text-lg py-3 border-b-2 border-transparent data-[state=active]:border-dexor-500 data-[state=active]:text-dexor-500 rounded-none">Hem</TabsTrigger>
            <TabsTrigger value="fukt" className="text-lg py-3 border-b-2 border-transparent data-[state=active]:border-dexor-500 data-[state=active]:text-dexor-500 rounded-none">Fukt och lukt</TabsTrigger>
          </TabsList>
          
          <TabsContent value="hem" className="px-0">
            <img 
              src="/lovable-uploads/1753d470-17bc-43ed-ad6b-1e989d89b4c0.png" 
              alt="Bild för Hem-fliken" 
              className="w-full border" 
            />
          </TabsContent>
          
          <TabsContent value="fukt" className="px-0">
            <div className="mt-8 space-y-8">
              <img 
                src="/lovable-uploads/3b771992-21b0-49ab-ae33-e8f5fd15c940.png" 
                alt="Bild för Fukt och lukt-fliken" 
                className="w-full border" 
              />
              
              <div className="flex items-center mb-4">
                <Wrench className="w-12 h-12 text-dexor-500 mr-4" />
                <h2 className="text-5xl font-bold text-dexor-500">Fuktskydd & Hantverk</h2>
              </div>
              
              <div className="text-xl text-red-500">
                <p>Vi är DexorBond – expert på fukt, tätskikt och golvlösningar. Hantverkare du kan lita på.</p>
              </div>
              
              <div className="flex flex-wrap gap-6 mt-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-dexor-500 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.73 9.73a8.24 8.24 0 0116.54 0 8.24 8.24 0 01-16.54 0z" />
                    <path d="M3.73 14.27a8.24 8.24 0 0116.54 0 8.24 8.24 0 01-16.54 0z" />
                  </svg>
                  <span>Fuktsäkerhet</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-red-500 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11 4h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1V5a1 1 0 011-1z" />
                    <path d="M11 15h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3a1 1 0 011-1z" />
                    <path d="M4 9h4a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3a1 1 0 011-1z" />
                    <path d="M15 9h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3a1 1 0 011-1z" />
                  </svg>
                  <span>Personlig Service</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-dexor-500 rounded-full mr-2"></div>
                  <span>Hantverk & Kvalitet</span>
                </div>
              </div>
              
              <div className="flex gap-4 mt-6">
                <Button className="bg-red-500 hover:bg-red-600 text-white">
                  Kontakta oss
                </Button>
                <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-50">
                  Våra tjänster
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TestTabsSection;
