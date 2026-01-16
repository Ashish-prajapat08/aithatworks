import React from "react";
import { Linkedin, Quote } from "lucide-react";

const Founder = () => {
  return (
    <section
      id="about"
      className="py-16 bg-[#faf5ff] relative overflow-hidden border-t-2 border-b-2 border-black"
    >
      {/* Decorative star - adjusted for mobile */}
      <div className="absolute top-4 left-4 md:top-12 md:left-12 text-[#ff5ec4] text-4xl md:text-6xl transform rotate-12 z-0">
        ✦
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 relative z-10">
          <h2 className="text-3xl font-black text-gray-900 sm:text-4xl md:text-5xl">
            Meet Katelin, The AI Strategist
          </h2>
          <h2 className="text-3xl font-black text-gray-900 sm:text-4xl md:text-5xl">
            Who Tests Everything So You Don't Have To
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

              <p className="text-base leading-relaxed mb-4  space-y-3 font-normal">
                {/* <span className="block">
                  Hi 👋 and a big thanks for checking out AI That Works, I'm
                  Katelin, and I love to help people discover how they can
                  actually win with AI.
                </span>

                <span className="block">
                  I jumped into the AI world back in 2021 (yes, before ChatGPT
                  was everywhere!) because I saw something exciting, something I
                  couldn't turn away from: that lightbulb moment led me to
                  realise that AI was a tool that could give us back our
                  valuable time, and time to focus on what really matters.
                </span>

                <span className="block">
                  Now I'm helping businesses save hours every week using AI in
                  ways they never thought possible. People often tell me I have
                  a 'get things done' attitude (guilty as charged! 😊). I use
                  this same approach to teach AI - no fluff, no tech jargon,
                  just practical ways to make AI work for you, both in your
                  business or your personal life.
                </span>

                <span className="block">
                  What makes me different? I've been in your shoes. From my
                  experience running small businesses to leading multinational
                  teams, I know exactly what works in the real world and what
                  doesn't. I've seen firsthand how the right AI tools can turn
                  hours of work into just minutes.
                </span>

                <span className="block">
                  Showing people how to use AI and level up their existing
                  skills drives me, big time!
                </span>

                <span className="block">
                  Because let's face it - we're all drowning in busy work, and
                  now with AI there's a better way to work, and I'm here to show
                  you how.
                  <span
                    className="inline-block relative align-middle ml-2 text-black md:text-[#ff5ec4] text-2xl md:text-4xl opacity-30"
                    style={{ top: "12px" }}
                  >
                    <Quote />
                  </span>
                </span> */}

                <span className="block">  <b>I've been experimenting with AI since 2021,long before ChatGPT became a household name.</b> </span>

                <span className="block">  My introduction wasn't through a viral tool. It was through a startup using large language models for social impact work. Watching how even basic AI could solve real problems with the right operations mindset; that was the moment everything clicked for me.</span>

                <span className="block"> <b>I realised AI wasn't just a shiny new technology. It was a way to fundamentally change how businesses operate.</b></span>

                <span className="block">Since then, I've built large-scale content management systems, automated cross-functional project management, and deployed AI-powered chatbots that maintain brand voice and augment team knowledge. I've used AI for conflict resolution, strategic ideation, email marketing automation, sales pipeline optimisation, and brand positioning work that would have taken teams weeks/months to complete manually.</span>

                <span className="block"><b>What makes my approach different?</b></span>
                <span className="block"><b>I come from operations, not computer science.</b> I've spent over 15+ years leading teams at companies like Dropbox and navigating startup chaos where resources are tight and results matter immediately. As a result I understand the pressure of needing AI to deliver ROI, not just look good in a presentation.</span>

                <span className="block"> <b>I also come from content creation and brand strategy.</b> Great AI outputs requires great foundations. If your brand voice isn't clearly defined, your AI tools will produce generic content. I help you avoid that.

                </span>
                 <span className="block"> <b>And I believe in speaking plain English.</b> When I transitioned into tech, I was drowning in jargon. It was frustrating and completely unnecessary. I made a promise: I'd never do that to the people I work with. If I can't explain something simply, I haven't understood it well enough.</span>

                 <span className="block"><b>Here's the thing most consultants won't tell you:</b></span>

                 <span className="block">The AI landscape moves faster than any business can track. New tools launch daily. Models update weekly. What worked last month might be obsolete today.
That's exactly why I've built my own automation systems to monitor the AI landscape for me. I filter out the noise so I can focus on what will genuinely impact your business. I do this so you don't have to.</span>

<span className="block"><b>My philosophy is straightforward:</b>

Test first. Implement what works. Ditch what doesn't. And always focus on the business outcome, not the tool itself.

I've worked with enterprise teams managing global operations and scrappy startups doing more with less. I bring that real-world experience to every engagement - whether you need strategic guidance or hands-on implementation.</span>
 <span className="block"><b>The result?</b> You skip the trial and error and get straight to AI solutions that impact your bottom line.</span>
 <span className="block"><b>Ready to see what actually works for your business?</b></span>

<span className="block">Start by downloading our services brochure. You'll see exactly how we work, what we offer, and our pricing structure. I believe in transparency - you should know what you're considering before we ever get on a call.</span>

<span className="block">If what you see resonates, then let's have a conversation about your specific situation.</span>

<span className="block"><b>Download our 2026 Workshop Brochure</b></span>

                              </p>


              <footer className="mt-8">
                {/* <div className="text-black space-y-2">
                  <p>When you train with me, you're getting someone who:</p>
                  <ul className="list-none space-y-1 pl-4">
                    <li>• Brings real business experience to the table</li>
                    <li>• Focuses on practical, value-driven results</li>
                    <li>• Makes complex AI stuff actually make sense</li>
                    <li>• Understands your business challenges firsthand</li>
                  </ul>
                  <p className="mt-4">
                    Ready to make AI work for you? So Let's do this!
                  </p>
                </div> */}

                <div className="mt-6 flex items-center">
                  <div>
                    <div className="text-lg font-bold text-gray-900">
                      Katelin O'Shea
                    </div>
                    <div className="text-sm text-gray-600">
                      Founder & CEO of AI That Works
                    </div>
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
