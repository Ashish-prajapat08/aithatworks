import React from 'react';
import { Linkedin, Quote } from 'lucide-react';

const Founder = () => {
  return (
    <section id="about" className="py-16 bg-[#faf5ff] relative overflow-hidden border-t-2 border-b-2 border-black">
      {/* Decorative star - adjusted for mobile */}
      <div className="absolute top-4 left-4 md:top-12 md:left-12 text-[#ff5ec4] text-4xl md:text-6xl transform rotate-12 z-0">✦</div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 relative z-10">
          <h2 className="text-3xl font-black text-gray-900 sm:text-4xl md:text-5xl">
            Meet Katelin, Your Gen AI Expert
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="relative lg:col-span-2">
            <div className="relative max-w-[320px] mx-auto">
              {/* Hexagon shape with image */}
              <div className="aspect-square relative">
                <div className="absolute inset-0 bg-[#ff5ec4] rounded-[40px] rotate-45 transform -translate-x-1/2 translate-y-1/2 scale-75" />
                <div className="absolute inset-0 bg-gray-100 rounded-[40px] border-2 border-black overflow-hidden">
                  <img 
                    src="https://i.imgur.com/q3igsG5.jpeg"
                    alt="Katelin O'Shea"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-3">
            <blockquote className="relative">
              {/* Opening quote icon */}
              <div className="absolute  top-0 left-0 text-black md:text-[#ff5ec4] ml-5 md:ml-0  text-5xl md:text-7xl -translate-x-8 -translate-y-6  opacity-30 z-0 rotate-180">
                <Quote />
              </div>
            
              <p className="text-base leading-relaxed mb-4  space-y-3">
              
                <span className="block">Hi 👋 and a big thanks for checking out AI That Works, I'm Katelin, and I love to help people discover how they can actually win with AI.</span>
                
                <span className="block">I jumped into the AI world back in 2021 (yes, before ChatGPT was everywhere!) because I saw something exciting, something I couldn't turn away from: that lightbulb moment led me to realise that AI was a tool that could give us back our valuable time, and time to focus on what really matters.</span>
                
                <span className="block">Now I'm helping businesses save hours every week using AI in ways they never thought possible. People often tell me I have a 'get things done' attitude (guilty as charged! 😊). I use this same approach to teach AI - no fluff, no tech jargon, just practical ways to make AI work for you, both in your business or your personal life.</span>
                
                <span className="block">What makes me different? I've been in your shoes. From my experience running small businesses to leading multinational teams, I know exactly what works in the real world and what doesn't. I've seen firsthand how the right AI tools can turn hours of work into just minutes.</span>
                
                <span className="block">Showing people how to use AI and level up their existing skills drives me, big time!</span>
                
                <span className="block">
  Because let's face it - we're all drowning in busy work, and now with AI there's a better way to work, and I'm here to show you how.
  <span className="inline-block relative align-middle ml-2 text-black md:text-[#ff5ec4] text-2xl md:text-4xl opacity-30" style={{ top: '12px' }}>
    <Quote />
  </span>
</span>

</p>
              
              

              
              <footer className="mt-8">
                <div className="text-black space-y-2">
                  <p>When you train with me, you're getting someone who:</p>
                  <ul className="list-none space-y-1 pl-4">
                    <li>• Brings real business experience to the table</li>
                    <li>• Focuses on practical, value-driven results</li>
                    <li>• Makes complex AI stuff actually make sense</li>
                    <li>• Understands your business challenges firsthand</li>
                  </ul>
                  <p className="mt-4">Ready to make AI work for you? So Let's do this!</p>
                </div>

                <div className="mt-6 flex items-center">
                  <div>
                    <div className="text-lg font-bold text-gray-900">Katelin O'Shea</div>
                    <div className="text-sm text-gray-600">Founder & CEO of AI That Works</div>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/katelinoshea/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 text-gray-400 hover:text-[#0077b5] transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;