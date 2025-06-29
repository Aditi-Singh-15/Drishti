
import { BookOpen, Briefcase, Building, Award } from "lucide-react";
import { useEffect, useState } from "react";

const categories = [
  {
    title: "Education",
    description: "Funds dedicated to educational materials, books, courses, tuition fees, and scholarships, ensuring access to quality education for underprivileged girls.",
    icon: BookOpen,
    percentage: 40,
    color: "#C85C7F"
  },
  {
    title: "Skill Development",
    description: "Investment in workshops, training programs, and mentorship initiatives to develop practical skills for future employment and entrepreneurship.",
    icon: Briefcase,
    percentage: 25,
    color: "#1D3557"
  },
  {
    title: "Infrastructure",
    description: "Resources allocated for creating conducive learning environments, internet access, digital devices, and safe spaces for educational activities.",
    icon: Building,
    percentage: 20,
    color: "#A8577E"
  },
  {
    title: "Reward System",
    description: "Incentives provided through Panchayat for goal completion, recognizing achievements and motivating continued participation and excellence.",
    icon: Award,
    percentage: 15,
    color: "#6A91C7"
  }
];

export default function BreakdownSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="py-16 px-4 sm:px-6 md:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-drishti-navy">Detailed Breakdown</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your donations are thoughtfully allocated across these key areas, ensuring maximum impact for every girl's education and development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all duration-500 card-hover ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start mb-4">
                <div 
                  className="p-3 rounded-full mr-4 flex-shrink-0"
                  style={{ backgroundColor: `${category.color}20` }}
                >
                  <category.icon className="w-6 h-6" style={{ color: category.color }} />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-1" style={{ color: category.color }}>
                    {category.title}
                  </h3>
                  <div className="flex items-center mb-2">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                      <div 
                        className="h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: visible ? `${category.percentage}%` : '0%', 
                          backgroundColor: category.color 
                        }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium" style={{ color: category.color }}>
                      {category.percentage}%
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
