import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import GridMotionBackground from './GridMotionBackground';
import { Link } from 'react-router-dom';
import Picture from '../../assets/images/AI_THAT_WORKS_KATELIN.png';

const Hero = () => {
  const scrollToWays = (e: React.MouseEvent) => {
    e.preventDefault();
    const waysSection = document.getElementById('ways');
    if (waysSection) {
      waysSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden pt-32 pb-0 bg-[#9399f4]">
      <GridMotionBackground />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="text-left mb-5">
            <div className="overflow-hidden mb-8">
              <h1 
                className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl md:text-5xl leading-tight max-w-2xl"
                style={{ letterSpacing: '-0.06em' }}
              >
                <span className="block text-gray-900 mb-2">
                  STOP WONDERING
                </span>
                <span className="block text-gray-900 mb-2">
                  ABOUT AI.
                </span>
                <span className="block text-gray-900">
                  START MAKING IT WORK.
                </span>
              </h1>
            </div>
            
            <p className="mt-6 text-lg text-black 900 max-w-xl leading-relaxed">
              Get the essential AI training, tools & support you and your teams need with AI That Works. Delivering practical, actionable and effective AI solutions, always.
            </p>

            {/* Mobile Image after the paragraph */}
            <div className="lg:hidden flex justify-center mt-8 mb-0 p-0">
              <picture>
                <source
                  type="image/webp"
                  srcSet="https://i.imgur.com/zYdb9ct.webp"
                />
                <img
                  src={Picture}
                  alt="AI That Works"
                  className="w-[80%] h-auto !border-0 transform scale-[1.1]"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </picture>
            </div>

            <hr className="lg:hidden my-4 border-t-2 border-black p-0 mt-[14px]" /> {/* Section Divider */}

            <div className="mt-8 flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6">
  {/* Kickstart CTA */}
  <div className="group/btn relative w-full sm:w-auto">
    <div className="absolute inset-0 transition-all duration-300 ease-out">
      {/* Button hover layers */}
      <div className="absolute inset-0 transition-all duration-300 ease-out group-hover/btn:-translate-x-1 group-hover/btn:-translate-y-1">
        <div className="absolute inset-0 rounded-xl bg-[#ff5ec4] border-2 border-black opacity-40"></div>
      </div>
      <div className="absolute inset-0 transition-all duration-300 ease-out delay-[25ms] group-hover/btn:-translate-x-2 group-hover/btn:-translate-y-2">
        <div className="absolute inset-0 rounded-xl bg-[#ff5ec4] border-2 border-black opacity-60"></div>
      </div>
    </div>

    <Link
      to="/gen-ai-kickstart"
      className="relative inline-flex w-full items-center justify-center px-6 py-3 bg-[#ff5ec4] text-white hover:bg-[#ff4bb8] hover:text-white rounded-xl font-semibold transition-colors border-2 border-black transform-gpu group-hover/btn:-translate-x-3 group-hover/btn:-translate-y-3"
    >
      Join the Kickstart Course
      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
    </Link>
  </div>

  {/* What We Offer CTA */}
  <div className="group/btn relative w-full sm:w-auto">
    <div className="absolute inset-0 transition-all duration-300 ease-out">
      {/* Button hover layers */}
      <div className="absolute inset-0 transition-all duration-300 ease-out group-hover/btn:-translate-x-1 group-hover/btn:-translate-y-1">
        <div className="absolute inset-0 rounded-xl bg-black/50 border-2 border-black opacity-40"></div>
      </div>
      <div className="absolute inset-0 transition-all duration-300 ease-out delay-[25ms] group-hover/btn:-translate-x-2 group-hover/btn:-translate-y-2">
        <div className="absolute inset-0 rounded-xl bg-black/30 border-2 border-black opacity-60"></div>
      </div>
    </div>

    <button
      onClick={scrollToWays}
      className="relative inline-flex w-full items-center justify-center px-6 py-3 bg-white text-[#3843d0] hover:bg-[#3843d0] hover:text-white rounded-xl font-semibold transition-colors border-2 border-black transform-gpu group-hover/btn:-translate-x-3 group-hover/btn:-translate-y-3"
    >
      What we offer
    </button>
  </div>
</div>


            <div className="mt-8 flex flex-wrap justify-bete gap-4 text-sm text-gray-600">
              <span className="flex items-center">
                <span className="mr-2">✓</span> Real-world use cases
              </span>
              <span className="flex items-center">
                <span className="mr-2">✓</span> Boost your productivity
              </span>
              <span className="flex items-center">
                <span className="mr-2">✓</span> Focus on what matters
              </span>
       
          </div>

          </div>

          {/* Desktop Image */}
          <div className="hidden lg:flex lg:items-start lg:justify-center translate-y-8">
            <picture>
              <source
                type="image/webp"
                srcSet="https://i.imgur.com/zYdb9ct.webp"
              />
              <img
                src={Picture}
                alt="AI That Works"
                className="w-[550px] h-auto !border-0 max-w-none transform scale-[1.1]"
                width="550"
                height="550"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                sizes="(min-width: 1024px) 550px, 100vw"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;