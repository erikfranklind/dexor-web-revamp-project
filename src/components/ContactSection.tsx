
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Have questions about our services? Contact us today for a free consultation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Your Name
                  </label>
                  <Input id="name" placeholder="John Doe" className="w-full" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" className="w-full" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Subject
                </label>
                <Input id="subject" placeholder="How can we help you?" className="w-full" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <Textarea id="message" rows={5} placeholder="Your message here..." className="w-full" />
              </div>
              
              <Button className="w-full bg-dexor-600 hover:bg-dexor-700 text-white py-6">
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-dexor-100 dark:bg-dexor-900/50 rounded-lg flex items-center justify-center">
                      <Mail className="text-dexor-600 dark:text-dexor-400" size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100">Email</h4>
                    <p className="text-gray-600 dark:text-gray-400">info@dexor.se</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-dexor-100 dark:bg-dexor-900/50 rounded-lg flex items-center justify-center">
                      <Phone className="text-dexor-600 dark:text-dexor-400" size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-400">+46 123 456 789</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-dexor-100 dark:bg-dexor-900/50 rounded-lg flex items-center justify-center">
                      <MapPin className="text-dexor-600 dark:text-dexor-400" size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100">Office</h4>
                    <p className="text-gray-600 dark:text-gray-400">Stockholm, Sweden</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-dexor-600 text-white rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to secure your business?</h3>
              <p className="mb-6">
                Contact us now for a free security assessment and consultation.
              </p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-dexor-600">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
