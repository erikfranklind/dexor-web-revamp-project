
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

// Nya referensbilder tillagda
const images = [
  {
    src: "/lovable-uploads/14cb31e2-a839-4f22-b0e7-5ced3166d85a.png",
    alt: "Referens 1: Stadsgata, modernisering",
    caption: "Ombyggnad av fastighet och fuktskydd – Stockholm City"
  },
  {
    src: "/lovable-uploads/9f55df6e-cdc5-436d-bbdc-2916ddcbbc62.png",
    alt: "Referens 2: Sjukhusområde uppifrån",
    caption: "Fuktentreprenad & tätskikt – Storsjukhus"
  },
  {
    src: "/lovable-uploads/2581f0ed-c90d-495b-95c7-eeeb5fb82ea3.png",
    alt: "Referens 3: Vit offentlig byggnad vid kväll",
    caption: "Renovering av kulturbyggnad – Tätskikt & fasad"
  }
];

const ReferencesSection = () => {
  return (
    <section id="references" className="py-20 bg-white dark:bg-gray-950">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Referenser</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Se några av våra genomförda projekt och nöjda kunder.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((img, idx) => (
            <Card key={idx} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative h-56 bg-gray-100 dark:bg-dexor-900 flex items-center justify-center">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <CardContent className="pt-4">
                <div className="text-base font-semibold text-dexor-800 dark:text-dexor-200">{img.caption}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;
