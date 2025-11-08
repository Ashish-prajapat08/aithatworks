import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift, ArrowRight, ArrowLeft, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const GoodieBag = () => {
  const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        consent: false
      });
      const [isSubmitting, setIsSubmitting] = useState(false);
      const [submitStatus, setSubmitStatus] = useState<string | null>(null);  // To show success or error message
    
      // Update handleChange to use React.ChangeEvent<HTMLInputElement> instead
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
        setSubmitStatus(null);
    
        try {
          const response = await fetch('https://beehive-backend-sigma.vercel.app/api/subscribe', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            setSubmitStatus('Subscription successful! 🎉');
            setFormData({
              firstName: '',
              lastName: '',
              email: '',
              jobTitle: '',
              consent: false,
            }); // Reset form after successful submission
          } else {
            setSubmitStatus('Something went wrong. Please try again.');
          }
        } catch (error) {
          setSubmitStatus('Error: Unable to reach server. Please try again later.');
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

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center justify-center p-3 bg-[#3843d0]/10 rounded-2xl mb-8">
              <Gift className="h-8 w-8 text-[#3843d0]" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-2">
              THE AI GOODIE BAG
            </h1>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#ff5ec4] mb-8">
              Coming Soon!
            </h2>

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-8">
              EXCITING STUFF IS ON THE WAY!
            </h3>

            <div className="text-xl text-gray-600 space-y-6">
              <p>
                I'm so glad to tell you that our pretty amazing giant AI Goodie Bag, Gen AI Kickstart course and community are almost ready to launch!
              </p>
              
              <p>Want to be first to know when everything goes live?</p>
              
              <p>Pop in your email and I'll:</p>
              
              <ul className="space-y-2 text-left list-disc pl-6">
                <li>Let you know the moment we launch</li>
                <li>Send you weekly AI tips while you wait</li>
                <li>Give you first dibs on early-bird pricing</li>
              </ul>
              
              <p className="italic text-[#ff5ec4]">
                PS: No spam, no fuss - just practical AI updates and launch news.
              </p>
              
              <p className="text-2xl font-bold">
                Katelin ☺
              </p>
            </div>
          </motion.div>

          {/* Right Column - Newsletter Signup */}
          <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      className="bg-white rounded-2xl p-8 shadow-xl border-2 border-black self-center"
                    >
                      <div className="inline-flex items-center justify-center p-3 bg-[#3843d0]/10 rounded-2xl mb-8">
                        <Mail className="h-8 w-8 text-[#3843d0]" />
                      </div>
          
                      <h2 className="text-2xl font-black text-gray-900 mb-8">
                        SUBSCRIBE TO OUR NEWSLETTER
                      </h2>
          
                      {submitStatus && (
                        <div className={`mb-4 p-3 text-center rounded-lg ${submitStatus.startsWith('Subscription') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {submitStatus}
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
                            Your Email address
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#3843d0] focus:ring-2 focus:ring-[#3843d0]/20 outline-none transition-colors"
                            required
                          />
                        </div>
          
                        <div>
                          <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">
                            Job title / Role
                          </label>
                          <input
                            type="text"
                            id="jobTitle"
                            name="jobTitle"
                            value={formData.jobTitle}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#3843d0] focus:ring-2 focus:ring-[#3843d0]/20 outline-none transition-colors"
                            required
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
                            Count me in! I'd love AI tips, tricks and updates from AI That Works delivered straight to my inbox. Unsubscribe whenever you like!
                          </label>
                        </div>
          
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-[#3843d0] text-white px-6 py-4 rounded-lg font-semibold hover:bg-[#2d35a8] transition-colors flex items-center justify-center group border-2 border-black"
                        >
                          {isSubmitting ? 'Subscribing...' : 'Subscribe to Newsletter'}
                          <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                        </button>
                      </form>
                    </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GoodieBag;