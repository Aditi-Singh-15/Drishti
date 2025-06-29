
import { useState, useEffect } from 'react';
import { Motion } from '@/components/Motion';

export default function FundsHeader() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="pt-16 pb-8 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-drishti-cream to-white">
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-drishti-light to-transparent"></div>
      
      <div className="max-w-5xl mx-auto relative">
        <div className="text-center">
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-8'
            }`}
          >
            <span className="text-gradient">Drishti Funds</span>
          </h1>
          
          <p 
            className={`text-xl text-gray-600 max-w-3xl mx-auto mb-6 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
            }`}
          >
            Your Contribution, Their Future
          </p>
          
          <div 
            className={`w-24 h-1 bg-drishti-rose mx-auto mb-8 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}
          ></div>
          
          <p 
            className={`text-gray-600 max-w-2xl mx-auto transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-4'
            }`}
          >
            At Drishti, we believe in complete transparency about how every donated amount is utilized. 
            Your generosity directly transforms the lives of girls through education, skills, infrastructure, 
            and rewards for achievement.
          </p>
        </div>
      </div>
    </div>
  );
}
