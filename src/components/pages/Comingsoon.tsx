import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, Brain, Rocket, Target, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Comingsoon = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#faf9ff] to-white pt-32 pb-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-l from-pink-500/20 to-indigo-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header Section */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block p-4 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full mb-8 shadow-xl"
          >
            <Clock className="h-8 w-8 text-[#3843d0]" />
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            The Gen AI Kickstart Course
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="block text-[#ff5ec4] mt-4"
            >
              Coming Soon!
            </motion.span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            We're crafting a revolutionary course that will transform how you harness AI's power. 
            Master practical AI implementation with real-world applications and expert guidance.
          </motion.p>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center items-center space-x-8 mb-20"
          >
            <Link
              to="/"
              className="flex items-center text-gray-700 hover:text-[#3843d0] transition-colors text-lg font-semibold group"
            >
              <ArrowLeft className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Brain,
                title: "Practical Skills",
                description: "Master AI implementation with hands-on exercises and real-world applications",
                color: "from-blue-50 to-indigo-50"
              },
              {
                icon: Target,
                title: "Expert Guidance",
                description: "Learn from industry leaders with proven success in AI implementation",
                color: "from-purple-50 to-pink-50"
              },
              {
                icon: Rocket,
                title: "Immediate Impact",
                description: "Start applying AI effectively in your business from day one",
                color: "from-pink-50 to-rose-50"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
                <div className={`relative bg-gradient-to-r ${feature.color} p-8 rounded-xl border-2 border-black transform transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2`}>
                  <feature.icon className="h-10 w-10 text-[#3843d0] mb-6" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-2xl border-2 border-black max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Be the First to Know</h3>
            <p className="text-gray-600 mb-6">
              Get exclusive early access and special launch offers when we go live.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-2 border-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="bg-[#3843d0] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2d35a8] transition-colors flex items-center border-2 border-black">
                Notify Me
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Comingsoon;