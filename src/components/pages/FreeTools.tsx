import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Lock, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const FreeTools = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Example resource cards - client will provide actual image
  
  const resources = [
    { title: "5 Ways I Use AI Every Day", description: "Real use cases that save 8+ hours per week" },
    { title: "Stop Guessing with AI Prompts", description: "3-step framework for better results" },
    { title: "AI Prompt Template Library", description: "Copy-paste prompts for common tasks" },
    { title: "Meeting Summary Automation", description: "Never take notes manually again" },
    { title: "Email Overhaul System", description: "Cut email time by 90 minutes per week" },
    { title: "Decision-Making Framework", description: "Use AI for pros/cons analysis" },
    { title: "AI Implementation Checklist", description: "4-criteria framework for choosing AI projects" },
    { title: "Master AI Prompting Guide", description: "Strategic prompting techniques" }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    if (!formData.consent) {
      setIsSubmitting(false);
      setErrorMessage('Please agree to receive updates.');
      return;
    }

    try {
      const response = await fetch('https://beehive-backend-sigma.vercel.app/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        // Set cookie for 365 days
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 365);
        document.cookie = `aitw_free_tools_access=true; expires=${expiryDate.toUTCString()}; path=/`;
        
        // Redirect to access page
        navigate('/free-tools-access');
      } else {
        setErrorMessage(result.message || 'Something went wrong. Please try again later.');
      }
    } catch (error) {
      setErrorMessage('Network error. Please try again later.');
      console.error('Error during subscription:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#faf9ff] to-white pt-32 pb-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-l from-pink-500/20 to-indigo-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            FREE AI TOOLS TO GET YOU STARTED
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Practical templates, workflows, and guides you can use today. No fluff, no jargon - just AI that actually works.
          </p>
        </motion.div>

        {/* Resource Preview Section - Locked */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="relative bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-[#3843d0] transition-colors"
              >
                {/* Lock overlay */}
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Lock className="h-8 w-8 text-[#3843d0]" />
                </div>
                
                {/* Blurred content */}
                <div className="filter blur-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {resource.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Signup Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-black">
            <h2 className="text-3xl font-black text-gray-900 mb-2 text-center">
              ENTER YOUR EMAIL TO UNLOCK ALL FREE TOOLS
            </h2>
            
            {errorMessage && (
              <div className="mb-4 p-3 bg-red-100 text-red-800 rounded-lg text-center">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#3843d0] focus:ring-2 focus:ring-[#3843d0]/20 outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#3843d0] focus:ring-2 focus:ring-[#3843d0]/20 outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#3843d0] focus:ring-2 focus:ring-[#3843d0]/20 outline-none transition-colors"
                  required
                  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                  title="Please enter a valid email address"
                />
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-gray-300 text-[#3843d0] focus:ring-[#3843d0]"
                    required
                  />
                </div>
                <label htmlFor="consent" className="ml-3 text-sm text-gray-600">
                  Yes, send me weekly AI tips and updates from AI That Works
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#3843d0]'} text-white px-6 py-4 rounded-lg font-semibold hover:bg-[#2d35a8] transition-colors flex items-center justify-center group border-2 border-black`}
              >
                {isSubmitting ? 'Processing...' : 'Get Free Access Now'}
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-center text-sm text-gray-500">
                Join business owners learning to make AI actually work. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FreeTools;