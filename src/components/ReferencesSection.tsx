
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Image } from "lucide-react";

// Byt ut bildvägarna till faktiska filnamn om de är annorlunda!
const images = [
  {
    src: "/uploads/photo-1.jpg",
    alt: "Referens 1: Renovering av källare",
    caption: "Källarrenovering – Stockholm 2023"
  },
  {
    src: "/uploads/photo-2.jpg",
    alt: "Referens 2: Golvläggning i villa",
    caption: "Golvläggning i villa – Täby"
  },
  {
    src: "/uploads/photo-3.jpg",
    alt: "Referens 3: Tätskikt badrum",
    caption: "Tätskikt & ytskikt – Bromma"
  },
  {
    src: "/uploads/photo-4.jpg",
    alt: "Referens 4: Industrihall",
    caption: "Fuktspärr industrigolv – Södertälje"
  },
  {
    src: "/uploads/photo-5.jpg",
    alt: "Referens 5: Lägenhetsrenovering",
    caption: "Totalentreprenad – Vasastan"
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
                {/* Om bilden saknas visas en ikon */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "";
                    (e.target as HTMLImageElement).alt = "Bild saknas";
                  }}
                />
                {/* Lägg till en fallback-icon över bilden om den inte finns */}
                {/* Kan tas bort om alla bilder alltid funkar */}
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

