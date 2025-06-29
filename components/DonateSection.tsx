
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart } from 'lucide-react';

export default function DonateSection() {
  const [visible, setVisible] = useState(false);
  const [focused, setFocused] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="py-16 px-4 sm:px-6 bg-drishti-rose text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-20 top-10 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -left-20 bottom-10 w-64 h-64 rounded-full bg-drishti-navy/20 blur-3xl"></div>
      </div>
      
      <div 
        className={`max-w-4xl mx-auto relative z-10 text-center transition-all duration-1000 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="mb-3">
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
            Do you want to support?
          </span>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
          Are You Ready? Click to Donate
        </h2>
        
        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
          Your generous donation directly impacts the lives of young girls across India, 
          empowering them with education, skills, and opportunities to break barriers.
        </p>
        
        <div 
          className={`inline-block transition-all duration-500 ${focused ? 'scale-105' : 'scale-100'}`}
          onMouseEnter={() => setFocused(true)}
          onMouseLeave={() => setFocused(false)}
        >
          <Button 
            size="lg" 
            className="bg-white text-drishti-rose hover:bg-white/90 text-lg px-8 py-6 h-auto group"
            onClick={() => console.log('Donate clicked')}
          >
            <Heart className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" fill="#C85C7F" />
            Donate Now
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}
