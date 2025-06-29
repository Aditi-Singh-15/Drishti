"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Motion } from "@/components/Motion"
import { Button } from "@/components/ui/button"
import { Heart, HandHelping, BookOpen, Megaphone, Home as HomeIcon } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"

// Import images statically
import Logo from "../public/images/LOGO_BLACK.png"
import HeroImage from "../public/images/2.1illus1.svg"
import AboutImage from "../public/images/about_us.png"
import JoinImage from "../public/images/join-image.jpg"
import ContactImage from "../public/images/3.1illus2.svg"

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-drishti-cream">
      {/* Navigation */}
      <nav className="bg-drishti-cream/90 backdrop-blur-sm sticky top-0 z-50 border-b border-drishti-rose/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image src={Logo} alt="Drishti Logo" width={80} height={80} className="object-contain" />
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-drishti-rose font-medium">
                <HomeIcon className="w-5 h-5 inline-block mr-1" />
                Home
              </Link>
              <Link href="/opportunities" className="text-drishti-navy hover:text-drishti-rose transition-colors">
                Opportunities
              </Link>
              <Link href="/resources" className="text-drishti-navy hover:text-drishti-rose transition-colors">
                Resources
              </Link>
              <Link href="/about" className="text-drishti-navy hover:text-drishti-rose transition-colors">
                About us
              </Link>
              <Link 
                href="#" 
                className="text-drishti-navy hover:text-drishti-rose transition-colors"
                onClick={() => setContactOpen(true)} // Open Contact Us popup
                >
                  Contact us
              </Link>
            </div>
            
            <div className="flex items-center">
              <Link href="/login">
                <Button className="bg-drishti-rose hover:bg-drishti-accent">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero section */}
      <div className="relative bg-drishti-cream overflow-hidden pt-8 md:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 min-h-[70vh] items-center">
            <div className={`transition-all duration-1000 ease-out ${loaded ? 'opacity-100 transform-none' : 'opacity-0 -translate-x-12'}`}>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-drishti-rose mb-6">
                Drishti
              </h1>
              <p className="text-2xl md:text-3xl font-display text-drishti-navy mb-6">
                "Changing Every Girl's Life, One Step at a Time."
              </p>
              <p className="text-gray-600 mb-8 max-w-lg">
                Changing mindsets, breaking barriers, and creating opportunities for every girl
                to achieve her true potential. By challenging societal norms and fostering a
                supportive environment, we strive to ensure that every girl gets the chance to
                learn, grow, and succeed.
              </p>
              {/* <div className="flex flex-wrap gap-4">
                <Link to="/funds">
                  <Button className="bg-drishti-rose hover:bg-drishti-accent text-white px-6 py-2">
                    Donate Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" className="border-drishti-navy text-drishti-navy hover:bg-drishti-navy/5">
                  Learn More
                </Button>
              </div> */}
            </div>
            <div className={`relative transition-all duration-1000 ease-out delay-300 ${loaded ? 'opacity-100 transform-none' : 'opacity-0 translate-x-12'}`}>
              <div className="absolute inset-0 bg-gradient-to-r from-drishti-rose/20 to-drishti-navy/20 rounded-3xl transform rotate-3 scale-95 blur-xl"></div>
              <Image 
                src={HeroImage}
                alt="Girl studying"
                className="relative z-10 w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Vision and Mission */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image 
                src={AboutImage} 
                alt="Girls smiling" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            <div>
              <Motion animation="fade-in">
                <h2 className="text-4xl font-display font-bold text-drishti-rose mb-6">
                  Our Vision
                </h2>
                <p className="text-gray-600 mb-10">
                  To create a society where every girl is empowered to learn, grow, and achieve her full
                  potential, free from societal barriers and limitations. We envision a future where education
                  and opportunities are not defined by gender but by passion and capability.
                </p>

                <h2 className="text-4xl font-display font-bold text-drishti-rose mb-6">
                  Our Mission
                </h2>
                <p className="text-gray-600">
                  To challenge stereotypes, shift mindsets, and provide the necessary resources, mentorship,
                  and support to help girls overcome obstacles and succeed. By fostering awareness, skill
                  development, and equal opportunities, we aim to build a world where every girl can shape her
                  own future.
                </p>
              </Motion>
            </div>
          </div>
        </div>
      </div>

      {/* What We Offer */}
      <div className="py-20 bg-drishti-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <Motion animation="fade-in">
              <h2 className="text-5xl font-display font-bold text-drishti-rose mb-4">
                What Do We Offer
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We are committed to transforming mindsets and empowering girls by providing the right opportunities to learn, grow, and
                succeed. Our initiative focuses on breaking societal barriers, fostering skill development, and ensuring equal access to
                education and career opportunities.
              </p>
            </Motion>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Motion delay={100} animation="fade-in-up">
              <div className="bg-drishti-rose text-white rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-display font-semibold mb-4 text-center">
                  Education & Skill Development
                </h3>
                <p className="text-white/90 text-center">
                  We provide learning resources, mentorship, and training programs to help girls gain knowledge and essential
                  life skills.
                </p>
              </div>
            </Motion>
            
            <Motion delay={300} animation="fade-in-up">
              <div className="bg-drishti-rose text-white rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-display font-semibold mb-4 text-center">
                  Awareness & Advocacy
                </h3>
                <p className="text-white/90 text-center">
                  Through campaigns and community programs, we challenge societal norms and encourage families to support girls'
                  education and aspirations.
                </p>
              </div>
            </Motion>
            
            <Motion delay={500} animation="fade-in-up">
              <div className="bg-drishti-rose text-white rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-display font-semibold mb-4 text-center">
                  Mentorship & Career Guidance
                </h3>
                <p className="text-white/90 text-center">
                  Experienced mentors provide guidance, career counseling, and emotional support to help girls navigate challenges and
                  achieve their goals.
                </p>
              </div>
            </Motion>
          </div>
        </div>
      </div>

      {/* Join Our Journey */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <Motion animation="fade-in">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-drishti-navy mb-6">
                Be a Part Of This Journey
              </h2>
            </Motion>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image 
                src={JoinImage} 
                alt="Girl with books" 
                className="w-52 md:w-64 lg:w-72 rounded-xl shadow-lg mx-auto"
              />
            </div>
            
            <div className="space-y-8">
              <Motion animation="fade-in-up" delay={100}>
                <div className="flex items-start">
                  <div className="bg-drishti-rose/10 p-4 rounded-full mr-4">
                    <Heart className="w-6 h-6 text-drishti-rose" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold mb-2 text-drishti-navy">Donating</h3>
                    <p className="text-gray-600">
                      Your financial support allows us to continue providing essential services and resources.
                    </p>
                  </div>
                </div>
              </Motion>
              
              <Motion animation="fade-in-up" delay={300}>
                <div className="flex items-start">
                  <div className="bg-drishti-navy/10 p-4 rounded-full mr-4">
                    <HandHelping className="w-6 h-6 text-drishti-navy" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold mb-2 text-drishti-navy">Volunteering</h3>
                    <p className="text-gray-600">
                      Share your skills and knowledge to mentor these girls.
                    </p>
                  </div>
                </div>
              </Motion>
              
              <Motion animation="fade-in-up" delay={500}>
                <div className="flex items-start">
                  <div className="bg-drishti-accent/10 p-4 rounded-full mr-4">
                    <Megaphone className="w-6 h-6 text-drishti-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold mb-2 text-drishti-navy">Spreading Awareness</h3>
                    <p className="text-gray-600">
                      Help us reach more girls in need by sharing our story with your network.
                    </p>
                  </div>
                </div>
              </Motion>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-drishti-rose text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xl md:text-2xl font-medium mb-4">Do you want to support?</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-10">
            Are You Ready? Click to Donate
          </h2>
          <Link href="/funds">
            <Button 
              size="lg" 
              className="bg-white text-drishti-rose hover:bg-white/90 text-lg px-8"
            >
              Donate
            </Button>
          </Link>
        </div>
      </div>

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
                <li><Link href="/funds" className="hover:text-white transition-colors">Funds</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
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

      {/* Login Dialog */}
      <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display text-drishti-rose text-center">Login</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full px-4 py-3 rounded-full bg-drishti-rose/10 border border-drishti-rose/20 focus:outline-none focus:ring-2 focus:ring-drishti-rose/30"
              />
            </div>
            <div>
              <input 
                type="password" 
                placeholder="Your Password" 
                className="w-full px-4 py-3 rounded-full bg-drishti-rose/10 border border-drishti-rose/20 focus:outline-none focus:ring-2 focus:ring-drishti-rose/30"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-sm text-gray-600">Remember Me</label>
              </div>
              <a href="#" className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
            </div>
            <Button className="w-full bg-drishti-rose hover:bg-drishti-accent">
              Login
            </Button>
            <p className="text-center text-sm text-gray-600 mt-4">
              Don't have an account? <a href="#" className="text-drishti-rose hover:underline">Sign up here</a>
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* contact us dialog */}
      <Dialog open={contactOpen} onOpenChange={setContactOpen}>
      <DialogContent className="sm:max-w-2xl bg-[#FEF6F0] rounded-2xl shadow-xl flex flex-col md:flex-row p-0">
        
        {/* Left Image Section */}
        <div className="hidden md:flex md:w-1/2 justify-center items-center rounded-l-2xl p-6 bg-[#FDE4E0]">
          <Image src={ContactImage} alt="Contact Us Illustration" className="w-full h-auto rounded-lg" />
        </div>

        {/* Right Form Section */}
        <div className="md:w-1/2 w-full p-8">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold text-center text-[#1D3557]">
              Contact Us
            </DialogTitle>
          </DialogHeader>
          
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full px-4 py-3 rounded-md bg-[#FFFFFF] border border-[#C85C7F] focus:outline-none focus:ring-2 focus:ring-[#C85C7F] mt-4"
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="w-full px-4 py-3 rounded-md bg-[#FFFFFF] border border-[#C85C7F] focus:outline-none focus:ring-2 focus:ring-[#C85C7F] mt-4"
          />
          <textarea 
            placeholder="Your Message" 
            rows={4} 
            className="w-full px-4 py-3 rounded-md bg-[#FFFFFF] border border-[#C85C7F] focus:outline-none focus:ring-2 focus:ring-[#C85C7F] mt-4"
          ></textarea>
          
          <Button className="w-full bg-[#C85C7F] hover:bg-[#B04E6F] text-white rounded-md py-3 text-lg mt-4">
            Send Message
          </Button>
        </div>
      </DialogContent>
    </Dialog>
    </div>
  );
};

export default Home
