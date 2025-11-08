import React from 'react';
import { motion } from 'framer-motion';

const GridBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Static base grid */}
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

      {/* Animated grid overlay - Optimized duration */}
      <motion.div 
        className="absolute inset-0"
        initial={{ backgroundPosition: '0px 0px' }}
        animate={{ 
          backgroundPosition: ['0px 0px', '40px 40px']
        }}
        transition={{
          duration: 3,
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

      {/* Optimized pulsating circles */}
      <motion.div
        className="absolute left-1/4 top-1/4 w-[600px] h-[600px] rounded-full"
        initial={{ scale: 0.8, opacity: 0.4 }}
        animate={{ 
          scale: [0.8, 1.1, 0.8],
          opacity: [0.4, 0.5, 0.4]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, rgba(99, 102, 241, 0) 70%)'
        }}
      />

      <motion.div
        className="absolute right-1/4 bottom-1/4 w-[500px] h-[500px] rounded-full"
        initial={{ scale: 1, opacity: 0.3 }}
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.4, 0.3]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
        style={{
          background: 'radial-gradient(circle, rgba(167, 139, 250, 0.2) 0%, rgba(167, 139, 250, 0) 70%)'
        }}
      />

      {/* Optimized glowing orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[80px] opacity-30"
        animate={{
          x: ['-20%', '20%', '-20%'],
          y: ['-10%', '10%', '-10%'],
        }}
        transition={{
          duration: 5,
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
          x: ['20%', '-10%', '20%'],
          y: ['20%', '-20%', '20%'],
        }}
        transition={{
          duration: 6,
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

export default GridBackground;

export { GridBackground }