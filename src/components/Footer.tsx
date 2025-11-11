import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 border-t-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center">
              <img 
                src="/assets/images/download.png" 
                alt="AI That Works Logo" 
                className="h-16 w-28 object-contain logo"
              />
            </Link>
            <p className="mt-4 text-gray-600">
              Transforming businesses through innovative AI solutions
            </p>
          </div>
           
          <div>
            <h3 className="font-semibold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/custom-gpts" className="text-gray-600 hover:text-gray-900">Custom GPTs</Link></li>
              <li><Link to="/consulting" className="text-gray-600 hover:text-gray-900">AI Consulting</Link></li>
              <li><Link to="/training" className="text-gray-600 hover:text-gray-900">Training</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="https://skool.com" className="text-gray-600 hover:text-gray-900">Live Sessions</a></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link></li>
              <li><Link to="/events" className="text-gray-600 hover:text-gray-900">Events</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><Link to="/support" className="text-gray-600 hover:text-gray-900">Support</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</Link></li>
              <li><Link to="/schedule" className="text-gray-600 hover:text-gray-900">Schedule Demo</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} AI That Works. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;