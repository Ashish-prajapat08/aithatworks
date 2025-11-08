import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={clsx(
        'fixed w-full z-50 transition-all duration-300 bg-white border-b border-black/10',
        isScrolled ? 'shadow-md' : ''
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="https://i.imgur.com/8nrnzM3.png" 
                alt="AI That Works Logo" 
                className="h-16 w-28 object-contain"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-gray-700 hover:text-indigo-600 flex items-center">
              Features <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
            <Link to="/custom-gpts" className="text-gray-700 hover:text-indigo-600">
              Custom GPTs
            </Link>
            <Link to="/community" className="text-gray-700 hover:text-indigo-600">
              Community
            </Link>
            <Link
              to="/get-started"
              className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;