
import { useState, useEffect } from 'react';

const quotes = [
  {
    text: "The most dangerous phrase in the English language is 'we have always done it this way'",
    author: "Dr. Grace Hopper",
    color: "#1D3557"
  },
  {
    text: "Treasure your curiosity and imagination. Have confidence in your own ability to think, and don't let others put limits on it.",
    author: "Dr. Shirley Ann Jackson",
    color: "#C85C7F"
  },
  {
    text: "No matter what your starting point is, and no matter how long as you persevere, you will succeed.",
    author: "Kiran Bedi",
    color: "#1D3557"
  },
  {
    text: "In the chip industry, I always tell women that the ways take on things I have never done before. Growth and comfort cannot coexist.",
    author: "Indra Nooyi",
    color: "#A8577E"
  }
];

export default function QuoteSlideshow() {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentQuote((prev) => (prev + 1) % quotes.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="py-20 px-4 sm:px-6 relative overflow-hidden bg-drishti-cream">
      <div className="max-w-5xl mx-auto relative">
        <div className="flex justify-center overflow-hidden relative">
          {quotes.map((quote, index) => (
            <div 
              key={index}
              className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-500 ${
                currentQuote === index 
                  ? 'opacity-100 transform-none' 
                  : 'opacity-0 -translate-y-8'
              }`}
              style={{ backgroundColor: quote.color }}
            >
              <div className="max-w-3xl p-12 text-white">
                <div className="text-6xl font-serif mb-8">"</div>
                <p className="text-2xl md:text-3xl font-display mb-6">
                  {quote.text}
                </p>
                <p className="italic text-white/80">— {quote.author}</p>
                <div className="text-6xl font-serif mt-4 text-right w-full">"</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          {quotes.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 transition-all ${
                currentQuote === index ? 'bg-white' : 'bg-white/30'
              }`}
              onClick={() => setCurrentQuote(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
