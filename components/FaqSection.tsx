
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Motion } from '@/components/Motion';

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "How is my donation utilized?",
    answer: "Your donation is distributed across four key areas: Education (40%), Skill Development (25%), Infrastructure (20%), and Reward System (15%). This allocation ensures a holistic approach to empowering girls through educational support and opportunities."
  },
  {
    question: "Is my donation tax-deductible?",
    answer: "Yes, all donations to Drishti are tax-deductible under Section 80G of the Income Tax Act in India. For international donors, we provide documentation compatible with your country's tax laws where applicable."
  },
  {
    question: "Can I specify where my donation is used?",
    answer: "Absolutely! While our default allocation ensures balanced support across all areas, you can specify if you'd like your donation to be directed toward a particular focus area like education, skill development, infrastructure, or the reward system."
  },
  {
    question: "How can I track the impact of my donation?",
    answer: "All donors receive quarterly impact reports detailing how funds are being utilized. You can also opt-in to receive updates about specific initiatives and success stories from the girls who benefit from your generosity."
  },
  {
    question: "What percentage goes to administrative costs?",
    answer: "We pride ourselves on efficiency - 90% of all donations directly support our programs, with only 10% allocated to essential administrative and fundraising costs to ensure sustainable operations."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Motion animation="fade-in">
            <h2 className="text-3xl font-display font-bold text-drishti-navy mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about how your donations make an impact
            </p>
          </Motion>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Motion 
              key={index} 
              delay={100 * index}
              animation="fade-in"
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full text-left p-5 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-drishti-navy">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-drishti-rose transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`} 
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 pt-0 text-gray-600 bg-white">
                  {faq.answer}
                </div>
              </div>
            </Motion>
          ))}
        </div>
      </div>
    </div>
  );
}
