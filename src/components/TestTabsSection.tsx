
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Wrench, Home, Droplet, Layers, Square, PaintRoller, FileText, Video, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const tabs = [
  { value: "hem", label: "Hem", icon: <Home className="w-5 h-5 mr-2" /> },
  { value: "fukt", label: "Fukt & Lukt", icon: <Droplet className="w-5 h-5 mr-2" /> },
  { value: "underlag", label: "Underlag/ system", icon: <Layers className="w-5 h-5 mr-2" /> },
  { value: "quick", label: "Snabba Rumtider", icon: <Square className="w-5 h-5 mr-2" /> },
  { value: "klarlack", label: "Klarlack", icon: <PaintRoller className="w-5 h-5 mr-2" /> },
  { value: "cfs", label: "CFS", icon: <FileText className="w-5 h-5 mr-2" /> },
  { value: "lathund", label: "Lathund", icon: <FileText className="w-5 h-5 mr-2" /> },
  { value: "limning", label: "Limning Trägolv", icon: <PaintRoller className="w-5 h-5 mr-2" /> },
  { value: "video", label: "Video", icon: <Video className="w-5 h-5 mr-2" /> },
  { value: "svenska", label: "Svenska", icon: <Globe className="w-5 h-5 mr-2" /> },
  { value: "english", label: "English", icon: <Globe className="w-5 h-5 mr-2" /> }
];

const TestTabsSection = () => {
  const [tab, setTab] = useState("lathund");

  return (
    <section className="py-0 bg-white">
      <div className="w-full mx-auto">
        <Tabs value={tab} onValueChange={setTab} className="w-full">
          <TabsList className="flex flex-wrap w-full bg-white border-b border-gray-200 overflow-x-auto">
            {tabs.map((t) => (
              <TabsTrigger
                key={t.value}
                value={t.value}
                className="flex items-center flex-1 min-w-[140px] text-base py-3 border-b-2 border-transparent data-[state=active]:border-[#1EAEDB] data-[state=active]:text-[#1EAEDB] rounded-none"
              >
                {t.icon}
                {t.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* HEM-INNEHÅLL */}
          <TabsContent value="hem" className="px-4 max-w-7xl mx-auto">
            <div className="py-6">
              <img
                src="/lovable-uploads/1753d470-17bc-43ed-ad6b-1e989d89b4c0.png"
                alt="Bild för Hem-fliken"
                className="w-full border"
              />
            </div>
          </TabsContent>

          {/* FUKT & LUKT-INNEHÅLL */}
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
                    <div className="flex items-center"><Droplet className="w-6 h-6 text-[#1EAEDB] mr-2"/><span>Fuktsäkerhet</span></div>
                    <div className="flex items-center"><Wrench className="w-6 h-6 text-[#ea384c] mr-2"/><span>Personlig Service</span></div>
                    <div className="flex items-center"><div className="w-6 h-6 bg-[#1EAEDB] rounded-full mr-2"></div><span>Hantverk & Kvalitet</span></div>
                  </div>
                  <div className="flex gap-4 mt-6">
                    <Button className="bg-[#ea384c] hover:bg-red-600 text-white">
                      Kontakta oss
                    </Button>
                    <Button variant="outline" className="border-[#ea384c] text-[#ea384c] hover:bg-red-50">
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

          {/* UNDER UTVECKLING-PLATSER */}
          <TabsContent value="underlag" className="px-4 max-w-7xl mx-auto py-12">
            <div className="text-2xl text-gray-500 text-center">Sidan "Underlag/system" är under utveckling...</div>
          </TabsContent>
          <TabsContent value="quick" className="px-4 max-w-7xl mx-auto py-12">
            <div className="text-2xl text-gray-500 text-center">Sidan "Snabba Rumtider" är under utveckling...</div>
          </TabsContent>
          <TabsContent value="klarlack" className="px-4 max-w-7xl mx-auto py-12">
            <div className="text-2xl text-gray-500 text-center">Sidan "Klarlack" är under utveckling...</div>
          </TabsContent>
          <TabsContent value="cfs" className="px-4 max-w-7xl mx-auto py-12">
            <div className="text-2xl text-gray-500 text-center">Sidan "CFS" är under utveckling...</div>
          </TabsContent>
          <TabsContent value="limning" className="px-4 max-w-7xl mx-auto py-12">
            <div className="text-2xl text-gray-500 text-center">Sidan "Limning Trägolv" är under utveckling...</div>
          </TabsContent>
          <TabsContent value="video" className="px-4 max-w-7xl mx-auto py-12">
            <div className="text-2xl text-gray-500 text-center">Sidan "Video" är under utveckling...</div>
          </TabsContent>
          <TabsContent value="svenska" className="px-4 max-w-7xl mx-auto py-12">
            <div className="text-2xl text-gray-500 text-center">Sidan "Svenska" är under utveckling...</div>
          </TabsContent>
          <TabsContent value="english" className="px-4 max-w-7xl mx-auto py-12">
            <div className="text-2xl text-gray-500 text-center">Page "English" coming soon...</div>
          </TabsContent>

          {/* LATHUND-INNEHÅLL */}
          <TabsContent value="lathund" className="max-w-7xl mx-auto px-4 py-12">
            <div className="prose max-w-none">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#1EAEDB]">Lathund</h1>
              <h2 className="text-2xl font-semibold mb-4 text-[#ea384c]">Direktlimmat trägolv på på betongunderlag</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Lathunden är en sammanställning av resultat från beräkningar av omfördelning av kvarvarande byggfukt vid läggning av trägolv med och utan fuktspärr, Sjöberg 2003.</li>
                <li>Lathunden avser Kährs trägolv, Casco Elastic 3475 samt DexorBond fuktspärr.</li>
                <li>Risknivån i underkanten av trägolvet är 65%RF enligt trägolvstillverkarens krav i projektet.</li>
              </ul>
              <h3 className="text-xl font-bold mt-6 mb-2">Limning på normal husbyggnadsbetong (vct = 0,7)</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Fuktspärr behövs redan vid 80%RF vid normal inomhusluft.</li>
                <li>Är inomhusluften däremot "torr" behövs fuktspärr först vid 85%RF.</li>
              </ul>
              <div className="flex flex-col md:flex-row gap-8 my-6">
                <div className="flex-1">
                  <img
                    src="/lovable-uploads/456d13a5-21ff-438a-b9a1-652515c2d4e6.png"
                    alt="Diagram från lathund"
                    className="border w-full rounded-lg"
                    style={{ maxWidth: 420 }}
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <div className="text-sm text-gray-600">Fuktstillstånd i underkant trägolv efter 6 månaders omlagring av kvarvarande byggfukt. Trägolvstillverkaren uppger ett ungefärligt motstånd för trägolv (Zra) på 100 kubikm. s/m.</div>
                </div>
              </div>
              <h3 className="text-xl font-bold mt-6 mb-2">Limning på byggfuktfri betong (vct = 0,4)</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Vid normal inomhusluft behövs upp mot 16 veckors uttorkning av betongytan.</li>
                <li>Är inomhusluften efter beläggningen "torr" räcker det med 4 veckors uttorkningstid.</li>
                <li>Uttorkningstider gäller när torkklimatet innan beläggning är 20gr C och 40%RF.</li>
                <li>Betongen beräknas "membranhärda" 1 månad innan torkningen startar.</li>
              </ul>
              <div className="text-xs text-gray-500 mt-4">* Observera att ovan angivna förutsättningar är viktiga. <br /> Särskilda avvikelser kan påverka resultatet av fuktfördelning och uttorkningstid.</div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TestTabsSection;
