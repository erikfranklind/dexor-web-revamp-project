
import React from 'react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative bg-gradient-to-tr from-dexor-100 to-dexor-50 dark:from-dexor-900 dark:to-dexor-800 p-8 rounded-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-dexor-800 dark:text-dexor-200 mb-6">Why Choose DEXOR</h3>
                <ul className="space-y-4">
                  {[
                    'Experienced security professionals',
                    'Tailored security solutions',
                    'Cutting-edge security tools',
                    '24/7 support and monitoring',
                    'Compliant with industry standards'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-dexor-500 text-white rounded-full p-1 mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">About DEXOR</h2>
            <p className="text-gray-600 dark:text-gray-300">
              DEXOR is a leading cybersecurity consulting firm dedicated to helping businesses protect their digital assets. With years of experience in the industry, we understand the evolving threat landscape and provide solutions that keep you one step ahead of potential threats.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Our team of certified security professionals works closely with you to understand your unique security challenges and develop strategies that align with your business objectives. We believe in building long-term partnerships with our clients, providing ongoing support and guidance to ensure your security posture remains strong.
            </p>
            <Button className="bg-dexor-600 hover:bg-dexor-700 text-white">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
