import React from 'react';
import { Users, BookOpen, Gift, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Ways = () => {
  return (
    <section id="ways" className="py-16 bg-black border-t-2 border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-white sm:text-4xl md:text-5xl mb-6 leading-relaxed">
            THREE WAYS TO MAKE AI WORK FOR YOU
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Whether you need team training, personal learning, or ready-to-use resources - we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Users,
              title: "Staff Workshops",
              description: "Get your whole team AI-confident with practical, engaging training that actually sticks. Available in-person and online.",
              link: "/workshops",
              buttonText: "Book Workshop"
            },
            {
              icon: BookOpen,
              title: "Learn",
              description: "From AI-confused to AI-confident in weeks. A step-by-step course that shows you exactly how to make generative AI work for you.",
              link: "/gen-ai-kickstart",
              buttonText: "Start Learning"
            },
            {
              icon: Gift,
              title: "The AI Goodie Bag",
              description: "Your all-access pass to AI success! Gain instant access to 20+ custom, value driving GPTs, unlimited resources, + monthly fresh additions.",
              link: "/goodie-bag",
              buttonText: "Get Access"
            }
          ].map((way, index) => (
            <div
              key={index}
              className="group relative h-[400px]"
            >
              <div className="absolute inset-0 transition-all duration-300 ease-out transform-gpu">
                {/* Back layer */}
                <div className="absolute inset-0 transition-all duration-300 ease-out group-hover:-translate-x-2 group-hover:-translate-y-1">
                  <div className="absolute inset-0 rounded-2xl bg-[#ff5ec4] border-2 border-black opacity-40"></div>
                </div>
                
                {/* Middle layer */}
                <div className="absolute inset-0 transition-all duration-300 ease-out delay-[50ms] group-hover:-translate-x-3 group-hover:-translate-y-2">
                  <div className="absolute inset-0 rounded-2xl bg-[#9399f4] border-2 border-black opacity-60"></div>
                </div>
                
                {/* Front layer */}
                <div className="absolute inset-0 transition-all duration-300 ease-out delay-100 group-hover:-translate-x-4 group-hover:-translate-y-3">
                  <div className="absolute inset-0 rounded-2xl bg-[#f7f5ff] border-2 border-black opacity-80"></div>
                </div>

                {/* Main card */}
                <div className="absolute inset-0 bg-white p-8 rounded-2xl transition-all duration-300 ease-out border-2 border-black transform-gpu group-hover:-translate-x-5 group-hover:-translate-y-4 flex flex-col">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#9399f4] to-[#ff5ec4] rounded-xl flex items-center justify-center mb-6 border-2 border-black transition-all duration-300 ease-out">
                      <way.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-br from-[#9399f4]/20 to-[#ff5ec4]/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-relaxed">{way.title}</h3>
                  <div className="text-gray-600 mb-4 flex-grow leading-relaxed">{way.description}</div>
                  
                  <div className="group/btn relative mt-auto">
                    <div className="absolute left-0 right-0 top-0 bottom-0 transition-all duration-300 ease-out">
                      {/* Button hover layers */}
                      <div className="absolute inset-0 transition-all duration-300 ease-out group-hover/btn:-translate-x-1 group-hover/btn:-translate-y-1">
                        <div className="absolute inset-0 rounded-xl bg-black/50 border-2 border-black opacity-40"></div>
                      </div>
                      <div className="absolute inset-0 transition-all duration-300 ease-out delay-[25ms] group-hover/btn:-translate-x-2 group-hover/btn:-translate-y-2">
                        <div className="absolute inset-0 rounded-xl bg-black/30 border-2 border-black opacity-60"></div>
                      </div>
                    </div>

                    <Link
                      to={way.link}
                      className="relative inline-flex w-full items-center justify-center px-6 py-3 bg-white text-[#3843d0] hover:bg-[#3843d0] hover:text-white rounded-xl font-semibold transition-colors border-2 border-black transform-gpu group-hover/btn:-translate-x-3 group-hover/btn:-translate-y-3"
                    >
                      {way.buttonText}
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
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

export default Ways;