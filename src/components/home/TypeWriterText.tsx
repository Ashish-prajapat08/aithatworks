import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ text, className = "", delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex === text.length) {
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
        setDisplayText('');
      }, 3000); // Wait 3 seconds before restarting
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setDisplayText(prev => prev + text[currentIndex]);
      setCurrentIndex(prev => prev + 1);
    }, currentIndex === 0 ? delay : 150); // Increased from 50ms to 150ms per character

    return () => clearTimeout(timeout);
  }, [currentIndex, text, delay]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {displayText}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "linear"
        }}
        className="inline-block ml-1"
      >
        |
      </motion.span>
    </motion.span>
  );
};

export default TypewriterText;