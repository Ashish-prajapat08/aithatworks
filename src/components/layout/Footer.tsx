import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import download from '../..assets/images/download.png';


const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => { 
    window.scrollTo(0,0);
  };

  const handleLogoClick = () => {
    if (window.location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      window.scrollTo({ top: 0 });
    }
  };

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const founderSection = document.getElementById('about');
      if (founderSection) {
        const offset = 50; // Adjust this value to add the desired margin/padding
        const top = founderSection.getBoundingClientRect().top + window.pageYOffset - offset;
        
        // Smooth scroll to the new position with added offset
        window.scrollTo({ top, behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollToAbout: true } });
    }
  };

  const handleNewsletterClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const newsletterSection = document.getElementById('newsletter');
      if (newsletterSection) {
        newsletterSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollToNewsletter: true } });
    }
  };

  return (
    <footer className="bg-gray-900 text-white border-t-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-left flex flex-col justify-start">
            <button onClick={handleLogoClick} className="flex items-center -mt-2 p-0">
              {/* ✅ DIRECT PATH USE KARO */}
              <img 
                src="/images/download.png"
                alt="AI That Works Logo" 
                className="h-12 w-24 object-contain logo"
              />
            </button>
            <div className="mt-1">
              <p className="text-gray-400">Stop wondering about AI.</p>
              <p className="text-gray-400">Start making it work for you.</p>
              <p className="text-gray-400">Practical. Actionable.</p>
            </div>
          </div>

          <div className="text-left">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {/* <li><Link to="/gen-ai-kickstart" className="text-gray-400 hover:text-white" onClick={handleClick}>The Gen AI Kickstart Course</Link></li> */}
              {/* <li><Link to="/community" className="text-gray-400 hover:text-white" onClick={handleClick}>Community</Link></li> */}
              {/* <li><Link to="/goodie-bag" className="text-gray-400 hover:text-white" onClick={handleClick}>The AI Goodie Bag</Link></li> */}
              <li><Link to="/free-tools" className="text-gray-400 hover:text-white" onClick={handleClick}>Free Tools</Link></li>
              <li><Link to="/workshops" className="text-gray-400 hover:text-white" onClick={handleClick}>Workshops</Link></li>
              <li><Link to="/cohort-courses" className="text-gray-400 hover:text-white" onClick={handleClick}>1-to-1 Consulting</Link></li>
              <li><Link to="/speaking" className="text-gray-400 hover:text-white" onClick={handleClick}>Speaking</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white" onClick={handleAboutClick}>About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white" onClick={handleClick}>Contact Us</Link></li>
            </ul>
          </div>

          <div className="text-left">
            <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
            <ul className="space-y-2">
            <li><Link to="" className="text-gray-400 hover:text-white" onClick={handleNewsletterClick}>Newsletter</Link></li>
            </ul>
            
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.linkedin.com/in/katelinoshea/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#0077b5] transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="text-left">
            <h3 className="font-semibold text-lg mb-4">Policies</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-400 hover:text-white" onClick={handleClick}>Privacy Policy</Link></li>
              <li><Link to="/cookie-policy" className="text-gray-400 hover:text-white" onClick={handleClick}>Cookie Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white" onClick={handleClick}>Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center sm:text-left text-gray-400">
          <p>AI That Works Ltd. Copyright ©️ 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;