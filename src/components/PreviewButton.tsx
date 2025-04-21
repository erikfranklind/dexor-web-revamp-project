
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

const PreviewButton = () => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const currentUrl = window.location.href;
  
  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    toast({
      title: "Länk kopierad!",
      description: "Länken har kopierats till ditt urklipp.",
    });
    
    // Reset copied state after 2 seconds
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <>
      <Button 
        onClick={() => setOpen(true)} 
        variant="outline" 
        className="bg-white text-[#1EAEDB] hover:bg-[#1EAEDB] hover:text-white border border-[#1EAEDB]"
      >
        <Eye className="mr-2 h-4 w-4" /> Förhandsvisa
      </Button>
      
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dela din förhandsgranskning</DialogTitle>
            <DialogDescription>
              Kopiera länken nedan för att dela en förhandsgranskning av sidan med en vän.
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex items-center space-x-2 mt-4">
            <Input 
              value={currentUrl} 
              readOnly 
              className="flex-1"
            />
            <Button onClick={handleCopy} variant="outline">
              {copied ? "Kopierad!" : "Kopiera"}
            </Button>
          </div>
          
          <DialogFooter className="mt-4">
            <Button onClick={() => setOpen(false)}>Stäng</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PreviewButton;
