
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ArrowRight, Building, CalendarDays, Users } from "lucide-react";

// Utökad projektinformation
const projects = [
  {
    id: 1,
    title: "Ombyggnad av fastighet och fuktskydd",
    location: "Stockholm City",
    image: "/lovable-uploads/14cb31e2-a839-4f22-b0e7-5ced3166d85a.png",
    alt: "Stadsgata, modernisering",
    caption: "Ombyggnad av fastighet och fuktskydd – Stockholm City",
    client: "Fastighets AB Centrum",
    year: "2023",
    description: "En komplett renovering av en äldre fastighet i centrala Stockholm. Vi säkrade hela byggnaden mot fukt med moderna tätskikt, nya dräneringssystem och genomförde en fullständig fuktsanering av källare och bottenplan.",
    services: ["Tätskiktsinstallation", "Fuktsanering", "Dränering", "Renovering"]
  },
  {
    id: 2,
    title: "Fuktentreprenad & tätskikt",
    location: "Storsjukhus",
    image: "/lovable-uploads/9f55df6e-cdc5-436d-bbdc-2916ddcbbc62.png",
    alt: "Sjukhusområde uppifrån",
    caption: "Fuktentreprenad & tätskikt – Storsjukhus",
    client: "Region Stockholm",
    year: "2022",
    description: "Ett omfattande projekt där vi installerade tätskikt i kritiska våtutrymmen i ett större sjukhus. Projektet inkluderade speciella hygieniska lösningar för sjukhusmiljö med höga krav på fuktsäkerhet och hållbarhet.",
    services: ["Industrigolv", "Tätskikt våtrum", "Fuktsäkring", "Avjämning"]
  },
  {
    id: 3,
    title: "Renovering av kulturbyggnad",
    location: "Kungliga Operan",
    image: "/lovable-uploads/2581f0ed-c90d-495b-95c7-eeeb5fb82ea3.png",
    alt: "Vit offentlig byggnad vid kväll",
    caption: "Renovering av kulturbyggnad – Tätskikt & fasad",
    client: "Statens Fastighetsverk",
    year: "2023",
    description: "Varsam renovering av en kulturhistoriskt värdefull byggnad med fokus på bevarande av originaldetaljer samtidigt som moderna fuktskydd och tätskikt installerades för att skydda byggnaden för framtiden.",
    services: ["Kulturbyggnadsrenovering", "Tätskikt", "Fasadrenovering", "Fuktsäkring"]
  }
];

const ReferencesSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  return (
    <section id="references" className="py-20 bg-white dark:bg-gray-950">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Referenser</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Se några av våra genomförda projekt och nöjda kunder. Klicka på ett projekt för att se mer detaljer.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="overflow-hidden group hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => openProjectDetails(project)}
            >
              <div className="relative h-56 bg-gray-100 dark:bg-dexor-900 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <Button variant="outline" className="text-white border-white hover:bg-white/20">
                    Visa detaljer <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="pt-4">
                <div className="text-base font-semibold text-dexor-800 dark:text-dexor-200">{project.caption}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {selectedProject && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-xl">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
              <DialogDescription className="text-lg text-dexor-600">{selectedProject.location}</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.alt} 
                  className="w-full h-64 object-cover"
                />
              </div>
              
              <div className="grid grid-cols-3 gap-4 py-2">
                <div className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Building className="text-dexor-600 mb-2" />
                  <div className="text-sm text-gray-500">Kund</div>
                  <div className="font-medium text-center">{selectedProject.client}</div>
                </div>
                <div className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <CalendarDays className="text-dexor-600 mb-2" />
                  <div className="text-sm text-gray-500">År</div>
                  <div className="font-medium">{selectedProject.year}</div>
                </div>
                <div className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Users className="text-dexor-600 mb-2" />
                  <div className="text-sm text-gray-500">Typ</div>
                  <div className="font-medium text-center">Entreprenad</div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2">Beskrivning</h4>
                <p className="text-gray-700 dark:text-gray-300">{selectedProject.description}</p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2">Tjänster</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.services.map((service, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-dexor-50 dark:bg-dexor-900/50 text-dexor-600 dark:text-dexor-400 rounded-full text-sm"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default ReferencesSection;
