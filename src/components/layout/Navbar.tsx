import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from '../../assets/Images/logo.png' 
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    if (window.location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      window.scrollTo({ top: 0 });
    }
  };

  const handleSubscribeClick = () => {
    navigate('/gen-ai-kickstart');
    window.scrollTo({ top: 0 });
    setIsMenuOpen(false);
  };

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const navHeight = 80; // Height of the fixed navbar
        const sectionTop = aboutSection.offsetTop - navHeight;
        window.scrollTo({
          top: sectionTop,
          behavior: 'smooth'
        });
      }
    } else {
      navigate('/', { 
        state: { scrollToAbout: true }
      });
    }
    setIsMenuOpen(false);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={clsx(
        'fixed w-full z-50 transition-all duration-300 bg-white border-b-2 border-black',
        isScrolled ? 'shadow-md' : ''
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <button onClick={handleLogoClick} className="flex items-center">
              <img 
                src={Logo}
                alt="AI That Works Logo" 
                className="h-22 w-32 object-contain logo"
              />
            </button>
          </div>

          {/* Mobile menu button - Optimized for touch */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#3843d0] p-2 touch-manipulation"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/gen-ai-kickstart" 
              className="text-gray-700 hover:text-[#3843d0] text-sm font-bold whitespace-nowrap transition-colors duration-200"
              onClick={handleNavClick}
            >
              The Gen AI Kickstart Course
            </Link>
            <Link 
              to="/community" 
              className="text-gray-700 hover:text-[#3843d0] text-sm font-bold whitespace-nowrap transition-colors duration-200"
              onClick={handleNavClick}
            >
              Community
            </Link>
            <Link 
              to="/goodie-bag" 
              className="text-gray-700 hover:text-[#3843d0] text-sm font-bold whitespace-nowrap transition-colors duration-200"
              onClick={handleNavClick}
            >
              The AI Goodie Bag
            </Link>
            <Link 
              to="/workshops" 
              className="text-gray-700 hover:text-[#3843d0] text-sm font-bold whitespace-nowrap transition-colors duration-200"
              onClick={handleNavClick}
            >
              Online Workshops
            </Link>
            <Link 
              to="/speaking" 
              className="text-gray-700 hover:text-[#3843d0] text-sm font-bold whitespace-nowrap transition-colors duration-200"
              onClick={handleNavClick}
            >
              Speaking
            </Link>
            <button 
              onClick={handleAboutClick}
              className="text-gray-700 hover:text-[#3843d0] text-sm font-bold whitespace-nowrap transition-colors duration-200"
            >
              About
            </button>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-[#3843d0] text-sm font-bold whitespace-nowrap transition-colors duration-200"
              onClick={handleNavClick}
            >
              Contact Us
            </Link>
            <button
              onClick={handleSubscribeClick}
              className="bg-[#3843d0] text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#2d35a8] transition-colors border-2 border-black whitespace-nowrap"
            >
              Join the Newsletter
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ 
            duration: 0.2,
            ease: "easeInOut"
          }}
          className="md:hidden overflow-hidden border-t border-gray-200 bg-white"
        >
          <div className="py-4 space-y-4">
            <Link 
              to="/gen-ai-kickstart"
              className="block text-gray-700 hover:text-[#3843d0] font-bold px-4 py-2 touch-manipulation"
              onClick={handleNavClick}
            >
              The Gen AI Kickstart Course
            </Link>
            <Link 
              to="/community"
              className="block text-gray-700 hover:text-[#3843d0] font-bold px-4 py-2 touch-manipulation"
              onClick={handleNavClick}
            >
              Community
            </Link>
            <Link 
              to="/goodie-bag"
              className="block text-gray-700 hover:text-[#3843d0] font-bold px-4 py-2 touch-manipulation"
              onClick={handleNavClick}
            >
              The AI Goodie Bag
            </Link>
            <Link 
              to="/workshops"
              className="block text-gray-700 hover:text-[#3843d0] font-bold px-4 py-2 touch-manipulation"
              onClick={handleNavClick}
            >
              Online Workshops
            </Link>
            <Link 
              to="/speaking"
              className="block text-gray-700 hover:text-[#3843d0] font-bold px-4 py-2 touch-manipulation"
              onClick={handleNavClick}
            >
              Speaking
            </Link>
            <button 
              onClick={handleAboutClick}
              className="block w-full text-left text-gray-700 hover:text-[#3843d0] font-bold px-4 py-2 touch-manipulation"
            >
              About
            </button>
            <Link
              to="/contact"
              className="block text-gray-700 hover:text-[#3843d0] font-bold px-4 py-2 touch-manipulation"
              onClick={handleNavClick}
            >
              Contact Us
            </Link>
            <div className="px-4">
              <button
                onClick={handleSubscribeClick}
                className="w-full bg-[#3843d0] text-white px-6 py-2.5 rounded-xl text-base font-semibold hover:bg-[#2d35a8] transition-colors border-2 border-black"
              >
                Join the Newsletter
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;