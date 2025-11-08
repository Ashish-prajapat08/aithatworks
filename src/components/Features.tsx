import React from 'react';
import { Globe, Lightbulb, Wand2, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: Lightbulb,
    title: 'No jargon, just clarity',
    description: 'All our learning focuses on explaining AI in simple, practical terms you can actually understand and apply.'
  },
  {
    icon: Globe,
    title: 'Real-world use cases',
    description: 'Learn from actual implementations and proven success stories.'
  },
  {
    icon: Wand2,
    title: 'Boost your productivity',
    description: 'Practical tools and techniques to enhance your daily workflow with AI.'
  },
  {
    icon: MessageCircle,
    title: 'Focus on what matters',
    description: 'Cut through the noise and learn exactly what you need to succeed with AI.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white border-t-2 border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-black text-black sm:text-4xl md:text-5xl font-heading" style={{ letterSpacing: '-0.06em' }}>
            WHY CHOOSE AI THAT WORKS?
          </h2>
          <p className="mt-4 text-xl text-black max-w-3xl mx-auto">
            Our mission is to deliver AI at a level which is accessible and understandable for all. Delivering practical, actionable and effective solutions, always.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative h-[280px]"
            >
              <div 
                className="absolute left-0 right-0 top-0 bottom-0 transition-all duration-300 ease-out"
                style={{
                  transform: `perspective(1000px)`
                }}
              >
                {/* Back card */}
                <div className="absolute inset-0 transition-all duration-300 ease-out md:group-hover:-translate-x-2 md:group-hover:-translate-y-1">
                  <div className="absolute inset-0 rounded-2xl bg-[#ff5ec4] border-2 border-black opacity-40"></div>
                </div>
                
                {/* Middle card */}
                <div className="absolute inset-0 transition-all duration-300 ease-out delay-[50ms] md:group-hover:-translate-x-3 md:group-hover:-translate-y-2">
                  <div className="absolute inset-0 rounded-2xl bg-[#9399f4] border-2 border-black opacity-60"></div>
                </div>
                
                {/* Front card */}
                <div className="absolute inset-0 transition-all duration-300 ease-out delay-100 md:group-hover:-translate-x-4 md:group-hover:-translate-y-3">
                  <div className="absolute inset-0 rounded-2xl bg-[#f7f5ff] border-2 border-black opacity-80"></div>
                </div>

                {/* Main card */}
                <div className="absolute inset-0 p-8 bg-white rounded-2xl transition-all duration-300 ease-out border-2 border-black transform-gpu md:group-hover:-translate-x-5 md:group-hover:-translate-y-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#9399f4] to-[#ff5ec4] rounded-2xl flex items-center justify-center mb-4 shadow-lg border-2 border-black transition-all duration-300 ease-out">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-br from-[#9399f4]/20 to-[#ff5ec4]/20 rounded-2xl blur-lg opacity-0 md:group-hover:opacity-100 transition-all duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight font-heading">
                    {feature.title}
                  </h3>
                  <div className="text-gray-600 text-base leading-snug">
                    {feature.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;