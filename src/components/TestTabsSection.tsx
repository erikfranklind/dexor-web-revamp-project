
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const TestTabsSection = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-3xl mx-auto">
        <Tabs defaultValue="hem" className="w-full">
          <TabsList className="mb-4 flex">
            <TabsTrigger value="hem" className="flex-1 text-lg">Hem</TabsTrigger>
            <TabsTrigger value="fukt" className="flex-1 text-lg">Fukt och lukt</TabsTrigger>
          </TabsList>
          <TabsContent value="hem">
            <img 
              src="/lovable-uploads/1753d470-17bc-43ed-ad6b-1e989d89b4c0.png" 
              alt="Bild för Hem-fliken" 
              className="w-full rounded-md border" 
            />
          </TabsContent>
          <TabsContent value="fukt">
            <img 
              src="/lovable-uploads/3b771992-21b0-49ab-ae33-e8f5fd15c940.png" 
              alt="Bild för Fukt och lukt-fliken" 
              className="w-full rounded-md border" 
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TestTabsSection;
