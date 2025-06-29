"use client"

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Home } from 'lucide-react'

// Import components
import FundsHeader from '@/components/FundsHeader'
import FundChart from '@/components/FundChart'
import BreakdownSection from '@/components/BreakdownSection'
import ImpactSection from '@/components/ImpactSection'
import DonateSection from '@/components/DonateSection'
import TrustSection from '@/components/TrustSection'
import FaqSection from '@/components/FaqSection'

export default function Funds() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-drishti-cream overflow-hidden">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-drishti-rose font-display font-bold text-2xl">
                Drishti
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-drishti-rose transition-colors">
                Home
              </Link>
              <Link href="/funds" className="text-drishti-rose font-medium">
                Funds
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-drishti-rose transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-drishti-rose transition-colors">
                Contact
              </Link>
            </div>
            
            <div className="flex items-center">
              <Link 
                href="/" 
                className="flex items-center text-drishti-navy hover:text-drishti-rose transition-colors md:hidden"
              >
                <ArrowLeft className="w-5 h-5 mr-1" />
                <span>Back</span>
              </Link>
              
              <Link 
                href="/" 
                className="p-2 rounded-full bg-drishti-rose text-white ml-4 hover:bg-drishti-accent transition-colors hidden md:flex"
              >
                <Home className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Page content */}
      <main>
        <FundsHeader />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <FundChart />
            </div>
            <div className="flex items-center">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <h3 className="text-2xl font-display font-bold text-drishti-navy mb-4">How Your Donation Helps</h3>
                <p className="text-gray-600 mb-4">
                  Every contribution to Drishti Funds is thoughtfully allocated to maximize impact on girls' education and development. 
                  Our transparent approach ensures your generosity creates meaningful change.
                </p>
                <p className="text-gray-600">
                  The chart shows our carefully designed distribution model that addresses both immediate educational needs and 
                  long-term infrastructure development, while also providing motivation through our unique reward system.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <BreakdownSection />
        <ImpactSection />
        <DonateSection />
        <TrustSection />
        <FaqSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-drishti-navy text-white py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-display font-bold mb-4">Drishti</h3>
              <p className="text-white/70 text-sm">
                Changing every girl's life, one step at a time through education, 
                empowerment, and opportunity.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/70">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/impact" className="hover:text-white transition-colors">Our Impact</Link></li>
                <li><Link href="/involved" className="hover:text-white transition-colors">Get Involved</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Resources</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Annual Reports</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Financial Statements</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press Kit</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Contact Us</h4>
              <ul className="space-y-2 text-white/70">
                <li>info@drishti.org</li>
                <li>+91 123 456 7890</li>
                <li>123 Education Street,<br />New Delhi, India</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
            <p>© {new Date().getFullYear()} Drishti. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
