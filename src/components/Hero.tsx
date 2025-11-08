import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';

const GridBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      {/* Base grid */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Animated overlay grid */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          backgroundPosition: ['0px 0px', '40px 40px']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(99, 102, 241, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99, 102, 241, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Glowing orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[80px] opacity-30"
        animate={{
          x: ['-25%', '25%', '-25%'],
          y: ['-15%', '15%', '-15%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: 'linear-gradient(45deg, rgba(99, 102, 241, 0.4), rgba(167, 139, 250, 0.4))',
        }}
      />

      <motion.div
        className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full blur-[60px] opacity-30"
        animate={{
          x: ['25%', '-15%', '25%'],
          y: ['25%', '-25%', '25%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: 'linear-gradient(-45deg, rgba(167, 139, 250, 0.4), rgba(99, 102, 241, 0.4))',
        }}
      />
    </div>
  );
};

const Hero = () => {
  return (
    <div className="relative overflow-hidden pt-32 pb-24 bg-[#f7f5ff]">
      <GridBackground />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
            <span className="block">AI That Doesn't Just</span>
            <span className="block">Adapt – It Evolves</span>
            <span className="block text-[#ff5ec4] mt-2">Your Entire Strategy</span>
          </h1>
          
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Expert AI consultation and custom GPT development to revolutionize your business
          </p>

          <div className="mt-12 flex justify-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-1 text-amber-400"
            >
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-current" />
              ))}
            </motion.div>
            <span className="text-gray-600">
              5/5 from <span className="font-semibold">1,000+</span> satisfied clients
            </span>
          </div>

          <div className="mt-10 flex justify-center space-x-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/community"
              className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center"
            >
              Join Our Community <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/custom-gpts"
              className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-colors"
            >
              Explore Custom GPTs
            </motion.a>
          </div>

          <div className="mt-12 flex justify-center space-x-8 text-sm text-gray-500">
            <span className="flex items-center">
              <span className="mr-2">✓</span> No credit card required
            </span>
            <span className="flex items-center">
              <span className="mr-2">✓</span> Free consultation
            </span>
            <span className="flex items-center">
              <span className="mr-2">✓</span> Cancel anytime
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;