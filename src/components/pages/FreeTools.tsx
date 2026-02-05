import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Lock, ArrowRight, AlertCircle } from 'lucide-react';
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
    { title: " Strategic Leadership Coach", description: "Real use cases that save 8+ hours per week" },
    { title: "Short Form Hook Writer", description: "3-step framework for better results" },
    { title: "AI Image Prompt Writer", description: "Copy-paste prompts for common tasks" },
    { title: "7 Step AI Project Manager", description: "Never take notes manually again" },
    { title: "Content Pillar Assistant", description: "Cut email time by 90 minutes per week" },
    { title: "Business Ideation & Brainstorming Coach", description: "Use AI for pros/cons analysis" },
    { title: "Competitive Intelligence Consultant", description: "4-criteria framework for choosing AI projects" },
    { title: "Competitive Content Positioning Analyst", description: "Strategic prompting techniques" }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error message when user types
    if (errorMessage) setErrorMessage('');
  };

  // // Enhanced email validation function
  // const validateEmail = (email: string): boolean => {
  //   // Basic format check
  //   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|ai|co|io|in|us|uk|edu|gov)$/i;
  //   if (!emailRegex.test(email)) return false;

  //   // Check for valid domain (must have at least 2 characters after dot)
  //   const parts = email.split('@');
  //   if (parts.length !== 2) return false;
    
  //   const domain = parts[1];
  //   const domainParts = domain.split('.');
    
  //   // Domain should have at least one dot and valid extension
  //   if (domainParts.length < 2) return false;
    
  //   // Last part (extension) should be at least 2 characters
  //   const extension = domainParts[domainParts.length - 1];
  //   if (extension.length < 2) return false;

  //   // Domain name (before extension) should be at least 2 characters
  //   const domainName = domainParts[domainParts.length - 2];
  //   if (domainName.length < 2) return false;

  //   return true;
  // };
  const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|ai|co|io|in|us|uk|edu|gov)$/i;
  if (!emailRegex.test(email)) return false;

  const domain = email.split('@')[1].toLowerCase();

  const typoDomains = [
    'gamil.com', 'gmil.com', 'gnail.com', 'gail.com', 'gmail.co', 'gmail.con',
    'gil.com', 'gmaill.com', 'gmailc.om', 'gmail.cm', 'gmail.om','gil.com'
  ];

  // ✅ Hard block known typos
  if (typoDomains.includes(domain)) return false;

  // ✅ Smart similarity check (catch gil.com etc)
  const isLikelyGmailTypo = domain.length <= 10 && levenshtein(domain, 'gmail.com') <= 2;
  // if (isLikelyGmailTypo) return false;
  if (domain !== 'gmail.com' && isLikelyGmailTypo) return false;


  return true;
};

// Helper function to calculate Levenshtein distance (string similarity)
const levenshtein = (a: string, b: string): number => {
  const dp = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));
  for (let i = 0; i <= a.length; i++) dp[i][0] = i;
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
    }
  }
  return dp[a.length][b.length];
};


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    // Validate consent checkbox
    if (!formData.consent) {
      setIsSubmitting(false);
      setErrorMessage('Please agree to receive updates.');
      return;
    }

    // Validate email format
    if (!validateEmail(formData.email)) {
      setIsSubmitting(false);
      setErrorMessage('Please enter a valid email address (e.g., name@example.com)');
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

      // Check if response is ok (status 200-299)
      if (response.ok) {
        const result = await response.json();
        
        // Set cookie for 365 days
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 365);

//         const expiryDate = new Date();
// expiryDate.setTime(expiryDate.getTime() + (1 * 60 * 1000)); // 1 minute
        document.cookie = `aitw_free_tools_access=true; expires=${expiryDate.toUTCString()}; path=/`;
        
        console.log('✅ Cookie set! Redirecting...');
        
        // Redirect to access page
        navigate('/free-tools-access');
      } else {
        // Handle API error responses
        try {
          const result = await response.json();
          setErrorMessage(result.message || 'Something went wrong. Please try again.');
        } catch {
          // If response is not JSON
          setErrorMessage('Something went wrong. Please try again.');
        }
      }
    } catch (error) {
      // Network error or fetch failed
      console.error('❌ Subscription error:', error);
      setErrorMessage('Network error. Please check your connection and try again.');
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
            STOP WRESTLING WITH AI.
          </h1>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6'> START USING IT PROPERLY.</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
           I've spent three and a half years testing Al tools and building workflows that actually work. Here's 300+ prompts, templates, and frameworks that I've created and learned ready for you to use today.</p>
        </motion.div>

        {/* Resource Preview Section - Locked */}
        {/* <motion.div
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
                {/* <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Lock className="h-8 w-8 text-[#3843d0]" />
                </div>
                 */}
                {/* Blurred content */}
                {/* <div className="filter blur-sm">
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
        </motion.div> */}
{/* Resource Preview Section - Locked */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="mb-16"
>
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    {/* {resources.map((resource, index) => (
      <div
        key={index}
        // className="relative bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-[#3843d0] transition-colors "
        className="relative bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border-2 border-gray-200 hover:border-[#3843d0] transition-all duration-300 hover:shadow-lg overflow-hidden group"

      >
        {/* Lock overlay with pointer-events-none to prevent text selection */}
        {/* <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center z -0 pointer-events-none select-none">
          <Lock className="h-8 w-8 text-[#3843d0]" />
        </div> */}
        {/* <div className="absolute inset-0 bg-white/85 backdrop-blur-sm rounded-xl flex items-center justify-center z-1 pointer-events-none select-none transition-all duration-300 group-hover:bg-white/90">
    <Lock className="h-8 w-8 text-[#3843d0] transition-transform duration-300 group-hover:scale-110" />
  </div>
        
        {/* Blurred content - MAKE IT NON-SELECTABLE */}
        {/* <div className="filter blur-sm select-none pointer-events-none">
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            {resource.title}
          </h3>
          <p className="text-sm text-gray-600">
            {resource.description}
          </p>
        </div>
      </div>
    ))} */} 
    {resources.map((resource, index) => (
  <div
    key={index}
    className="relative bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border-2 border-gray-200 hover:border-[#3843d0] transition-all duration-300 hover:shadow-lg overflow-hidden group"
  >
    {/* Lock badge */}
    <div className="absolute top-3 right-3">
      <div className="bg-[#3843d0]/10 p-2 rounded-lg">
        <Lock className="h-4 w-4 text-[#3843d0]" />
      </div>
    </div>
    
    {/* Clear heading */}
    <h3 className="text-lg font-bold text-gray-900 mb-3 pr-12">
      {resource.title}
    </h3>
    
    {/* Partially obscured description */}
    <div className="relative">
      {/* Gradient fade overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white z-10 pointer-events-none" />
      <p className="text-sm text-gray-500 line-clamp-2 blur-[2px]">
        {resource.description}
      </p>
    </div>
    
    {/* "Unlock" text */}
    {/* <div className="mt-4 pt-3 border-t border-gray-200">
      <p className="text-xs font-semibold text-[#3843d0] flex items-center gap-1">
        <Lock className="h-3 w-3" />
        Sign up to access
      </p>
    </div> */}
  </div>
))}
  </div> 
  

  {/* Optional: Add a centered message */}
  <div className="text-center mt-8">
    <p className="text-xl font-bold text-gray-900 mb-2">
      🔒 Enter your email to unlock the 300+ resources, new additions added weekly
      {/* 🔒 Enter your email below to unlock all resources */}
    </p>
    <p className="text-gray-600">
      {/* Join business owners already using these tools to save 8+ hours per week */}
      Join many business owners already using these tools to save a minimum of 8 hours per week!
    </p>
    <p className='text-gray-600'>Plus you can unsubscribe any time.</p>
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
              {/* text-3xl font-black text-black sm:text-4xl md:text-5xl font-heading */}
              ENTER YOUR DETAILS TO UNLOCK OUR ENTIRE AI TOOLKIT FOR FREE
            </h2>
            
            {/* Enhanced Error Message Display */}
            {errorMessage && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-4 bg-red-50 border-2 border-red-200 rounded-lg flex items-start gap-3"
              >
                <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-red-800 font-medium">{errorMessage}</p>
                </div>
              </motion.div>
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
                  placeholder="name@example.com"
                />
                <p className="text-xs text-gray-500 mt-1 py-3.5">Enter a valid email address (e.g., john@gmail.com)</p>
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

              {/* <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#3843d0] hover:bg-[#2d35a8]'} text-white px-6 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center group border-2 border-black`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    Get Free Access Now
                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button> */}
             

<div className="group/btn relative">
  <div className="absolute left-0 right-0 top-0 bottom-0 transition-all duration-300 ease-out">
    {/* <div className="absolute inset-0 transition-all duration-300 ease-out group-hover/btn:-translate-x-1 group-hover/btn:-translate-y-1">
      <div className="absolute inset-0 rounded-xl hover:bg-[#3843d0] border-2 border-black opacity-40"></div>
    </div> */}
    {/* <div className="absolute inset-0 transition-all duration-300 ease-out delay-[25ms] group-hover/btn:-translate-x-2 group-hover/btn:-translate-y-2">
      <div className="absolute inset-0 rounded-xl hover:bg-[#3843d0] border-2 border-black opacity-60"></div>
    </div> */}
  </div>

  <button
    type="submit"
    disabled={isSubmitting}
    className={`relative w-full ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#3843d0] hover:bg-[#2d35a8]'} text-white px-6 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center border-2 border-black transform-gpu`}
  >
    {isSubmitting ? (
      <>
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Processing...
      </>
    ) : (
      <>
        Get Free Access Now
        <ArrowRight className="ml-2 h-5 w-5 transform group-hover/btn:translate-x-1 transition-transform" />
      </>
    )}
  </button>
</div>
              <p className="text-center text-sm text-gray-500">
                Join many other business owners learning to create AI That Works, 
              </p>
              <p className="text-center text-sm text-gray-500"> one tool at a time!</p>
            </form>
          </div>
        </motion.div>
      </div> 
    </div>
  );
};
export default FreeTools;