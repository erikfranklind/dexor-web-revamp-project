
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Wrench, Layers, MapPin } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Fuktmätning & Analys',
    description: 'Professionell fuktmätning och analys för att identifiera och förebygga fuktproblem i byggnader.'
  },
  {
    icon: Layers,
    title: 'Tätskikt & Membran',
    description: 'Installation av högkvalitativa tätskikt och membran för våtrum och andra fuktutsatta miljöer.'
  },
  {
    icon: Wrench,
    title: 'Undergolv & Avjämning',
    description: 'Specialiserade lösningar för undergolv med fokus på fuktsäkerhet och hållbarhet.'
  },
  {
    icon: MapPin,
    title: 'Golvläggning',
    description: 'Professionell installation av alla typer av golv med rätt underarbete för bästa resultat.'
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Våra Tjänster</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Vi erbjuder kompletta lösningar för fuktskydd och golvläggning anpassade efter dina behov.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="service-card">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-dexor-100 dark:bg-dexor-900/50 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-dexor-600 dark:text-dexor-400" size={24} />
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
