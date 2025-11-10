import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, FolderOpen, Mail } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const FreeToolsAccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check for cookie on page load
    const checkCookie = () => {
      const cookies = document.cookie.split(';');
      const hasAccess = cookies.some(cookie => 
        cookie.trim().startsWith('aitw_free_tools_access=true')
      );

      if (!hasAccess) {
        // Redirect to /free-tools if no cookie found
        navigate('/free-tools');
      }
    };

    checkCookie();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#faf9ff] to-white pt-32 pb-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-l from-pink-500/20 to-indigo-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Back Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center text-gray-600 hover:text-[#3843d0] transition-colors group"
          >
            <ArrowLeft className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>

        {/* Success Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <span className="text-5xl">🎉</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
            WELCOME! YOUR FREE AI TOOLS ARE READY
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Access all your free resources below and keep an eye on your inbox for weekly AI tips.
          </p>
        </motion.div>

        {/* Main CTA - Access Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-br from-[#3843d0] to-[#ff5ec4] p-1 rounded-2xl">
            <div className="bg-white rounded-xl p-8 text-center">
              <FolderOpen className="h-16 w-16 text-[#3843d0] mx-auto mb-4" />
              
              <h2 className="text-2xl font-black text-gray-900 mb-4">
                YOUR AI TOOLS LIBRARY
              </h2>
              
              <p className="text-gray-600 mb-6">
                Click below to access your complete collection of AI resources, templates, and guides.
              </p>
              
              <a
                href="https://www.notion.so/AI-That-Works-Free-Tools-Resources-Notion-2a17c6c8cf2e805e9fdede97667146f3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#3843d0] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#2d35a8] transition-colors border-2 border-black"
              >
                <FolderOpen className="h-6 w-6 mr-2" />
                Access Your Free AI Tools Library
              </a>
              
              <p className="text-sm text-gray-500 mt-4">
                Bookmark this page to access your tools anytime.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Newsletter Reminder Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-white rounded-2xl p-8 border-2 border-black shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Mail className="h-8 w-8 text-[#3843d0]" />
              </div>
              
              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">
                  📬 DON'T MISS OUT
                </h3>
                
                <p className="text-gray-600 mb-4">
                  We'll be launching an all-in-one AI community soon with advanced training, custom GPTs, and monthly live courses. Newsletter subscribers will be notified first.
                </p>
                
                <p className="text-gray-600 font-semibold">
                  Make sure to whitelist our emails or mark us as a safe sender so you don't miss the announcement!
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-[#f7f5ff] to-[#ffc7ea] rounded-xl p-6 border-2 border-gray-200">
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              Want More?
            </h4>
            <p className="text-gray-600 mb-4">
              Explore our team workshops, 1-to-1 consulting, or join our newsletter for weekly AI insights.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/workshops"
                className="inline-flex items-center bg-white text-[#3843d0] px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-black"
              >
                View Workshops
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-[#3843d0] px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-black"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FreeToolsAccess;