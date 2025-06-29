
import { Shield, Check, FileText, Globe } from "lucide-react";
import { useState, useEffect } from "react";

export default function TrustSection() {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="py-12 px-4 sm:px-6 transition-opacity duration-700">
      <div className="max-w-5xl mx-auto">
        <div className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-display font-bold text-drishti-navy mb-4">Trust & Transparency</h3>
              <p className="text-gray-600 mb-6">
                Every donation is handled with utmost integrity. We are committed to complete transparency 
                about how funds are utilized and the impact they create.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-drishti-rose">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-drishti-navy">Rigorous Auditing</h4>
                    <p className="text-sm text-gray-600">Annual financial reports verified by independent auditors</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-drishti-rose">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-drishti-navy">Direct Impact</h4>
                    <p className="text-sm text-gray-600">Minimal administrative costs, maximum benefit to beneficiaries</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-drishti-rose">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-drishti-navy">Regular Updates</h4>
                    <p className="text-sm text-gray-600">Quarterly reports sent to all donors on fund utilization</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-drishti-navy to-drishti-rose/80 p-8 md:p-10 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-display font-bold mb-4">Verified Excellence</h3>
                <p className="mb-6 text-white/90">
                  Our commitment to transparency and impact has been recognized by leading organizations.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="badge-verified bg-white/10 text-white">
                  <Shield className="w-4 h-4 mr-1.5" />
                  <span>GuideStar Platinum</span>
                </div>
                <div className="badge-verified bg-white/10 text-white">
                  <FileText className="w-4 h-4 mr-1.5" />
                  <span>Charity Navigator 4-Star</span>
                </div>
                <div className="badge-verified bg-white/10 text-white">
                  <Globe className="w-4 h-4 mr-1.5" />
                  <span>UN SDG Partner</span>
                </div>
                <div className="badge-verified bg-white/10 text-white">
                  <Check className="w-4 h-4 mr-1.5" />
                  <span>ISO 9001 Certified</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/20">
                <a 
                  href="#"
                  className="text-white hover:underline inline-flex items-center"
                >
                  <FileText className="w-4 h-4 mr-1.5" />
                  <span>View our detailed financial reports</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
