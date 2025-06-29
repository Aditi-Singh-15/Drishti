
import { useState, useEffect } from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { Motion } from '@/components/Motion';

const testimonials = [
  {
    name: "Priya, 15",
    location: "Uttar Pradesh",
    image: "/lovable-uploads/e0e0f23c-862f-4c02-a4d0-a4201cfd0541.png",
    quote: "Thanks to Drishti, I was able to continue my education beyond primary school. The support I received has transformed my life prospects."
  },
  {
    name: "Meera, 13",
    location: "Rajasthan",
    image: "/lovable-uploads/a4c37273-9242-481b-9639-1aa718dd4db8.png",
    quote: "The skills I learned through Drishti's workshops helped me develop confidence and believe in my abilities. I now aspire to become a doctor."
  },
  {
    name: "Lakshmi, 17",
    location: "Karnataka",
    image: "/lovable-uploads/e1038cc2-92a4-4d8f-ae38-7f1657f08280.png",
    quote: "The mentorship program connected me with role models who inspired me to pursue higher education despite the challenges in my community."
  }
];

export default function ImpactSection() {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Motion animation="fade-in">
            <span className="inline-block px-3 py-1 bg-drishti-rose/10 text-drishti-rose rounded-full text-sm font-medium mb-4">Real Stories, Real Impact</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-drishti-navy mb-4">Transforming Lives Through Education</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              See how your contributions are making a tangible difference in the lives of these young girls, 
              empowering them to break barriers and pursue their dreams.
            </p>
          </Motion>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Motion 
              key={index} 
              animation="scale-in" 
              delay={100 * index}
              className="testimonial-card"
            >
              <div className="h-full flex flex-col">
                <div className="relative h-64 image-fade-mask">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-drishti-navy/50 to-transparent"></div>
                </div>
                
                <div className="bg-white p-6 flex-grow flex flex-col">
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 mb-4 flex-grow">"{testimonial.quote}"</p>
                  
                  <div className="mt-auto">
                    <p className="font-semibold text-drishti-navy">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </Motion>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center text-drishti-rose font-medium hover:underline"
          >
            View more success stories <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
