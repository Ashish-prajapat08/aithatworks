import React from "react";
import { Linkedin, Quote } from "lucide-react";
import { Users2, ArrowRight, ArrowLeft, Mail, FileText } from "lucide-react";
const Founder = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1fFcgl0dvIzIA70BCi7_rucYznPBWHYA2";
    link.setAttribute("download", "AI-Workshop-Brochure-2026.pdf");
    link.setAttribute("target", "_blank");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
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
          {/* <h2 className="text-3xl font-black text-gray-900 sm:text-4xl md:text-5xl">
            Who Tests Everything So You Don't Have To
          </h2> */}
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
            <blockquote className="relative founder-section">
              {/* Opening quote icon */}
              <div className="absolute  top-0 left-0 text-black md:text-[#ff5ec4] ml-5 md:ml-0  text-5xl md:text-7xl -translate-x-8 -translate-y-6  opacity-30 z-0 rotate-180">
                <Quote />
              </div>

              <div className="text-base leading-relaxed space-y-3 font-normal text-justify">
               <p><span className="font-bold">
                  I've been experimenting with AI since 2021, long before ChatGPT
                  became a household name. 
                </span> It was through watching how even basic AI back then could
                  solve real business problems with the right operations
                  mindset; was the moment everything clicked for me.</p>

                <p className="font-bold">
                  I realised AI wasn't just some new technology. It was instead
                  a way to fundamentally change how all businesses operate.{" "}
                </p>

                <p>
                  Since then, I've built large-scale content management systems,
                  automated cross-functional project management, and deployed
                  AI-powered chatbots at Enterprise level that maintain brand
                  voice and augment team knowledge. I've used AI for conflict
                  resolution, strategic ideation, email marketing automation,
                  sales pipeline optimisation, and brand positioning work that
                  would have taken teams weeks/months to complete manually.
                </p>

                <p className="font-bold">What makes my approach different?</p>

                <p>
                  <span className="font-bold">
                    I come from operations, not computer science.
                  </span>{" "}
                  I've spent over 10+ years leading teams at companies like
                  Dropbox and navigating startup chaos where resources are tight
                  and results matter immediately. As a result I understand the
                  pressure of needing AI to deliver ROI, not just look good in a
                  presentation.
                </p>

                <p>
                  <span className="font-bold">
                    I also come from content creation and brand strategy.
                  </span>{" "}
                  Great AI outputs require great foundations. If your brand
                  voice isn't clearly defined, your AI tools will produce
                  generic content. My workshops can help you avoid that at all
                  costs.
                </p>

                <p>
                  <span className="font-bold">
                    I believe in only speaking plain English.
                  </span>{" "}
                  When I transitioned into tech, I was drowning in jargon. It
                  was frustrating and completely unnecessary. I made a promise:
                  I'd never do that to the people I work with. If I can't
                  explain something simply, I haven't understood it well enough.
                </p>

                <p className="font-bold">
                  Here's the thing most consultants won't tell you:
                </p>

                <p>
                  The AI landscape moves faster than any business can track. New
                  tools launch daily. Models update weekly. What worked last
                  month might be obsolete today. That's exactly why I've built
                  my own automation systems to monitor the AI landscape for me.
                  I filter out the noise so I can focus on what will genuinely
                  impact your business, and I do this so you won’t have to.
                </p>

                <p>
                  <span className="font-bold">
                    My philosophy is straightforward:
                  </span>{" "}
                  Test first. Implement what works. Ditch what doesn't. And
                  always focus on the business outcome, not the tool itself.
                  I've worked with enterprise teams managing global operations
                  and scrappy startups doing more with less. I bring that
                  real-world experience to every engagement.
                </p>

                <p>
                  <span className="font-bold">The result?</span> You skip the
                  trial and error and get straight to AI team education and
                  solutions that impact your bottom line.
                </p>

                <p className="font-bold">
                  Ready to see what actually works for your business?
                </p>

                <p>
                  Start by downloading our services brochure. You'll see exactly
                  how we work, what we offer, and our pricing structure. I
                  believe in transparency - you should know what you're
                  considering before we ever get on a call.
                </p>
               <p>
                  If what you see resonates, then let's have a conversation
                  about your specific situation.<div className="inline-block relative align-middle ml-2 text-black md:text-[#ff5ec4] text-2xl md:text-4xl opacity-30" style={{ top: '12px' }}><Quote /></div>
                </p>
                <div className="flex items-center justify-center lg:justify-start space-x-2 py-5">
                  <button
                    onClick={handleDownload}
                    className="inline-flex items-center bg-[#3843d0] text-white px-6 py-3 rounded-lg hover:bg-[#2d35a8] transition-colors border-2 border-black"
                  >
                    <FileText className="h-5 w-5 mr-2" />
                    Download our 2026 Workshop Brochure
                  </button>
                </div>
              </div>

              <footer className="mt-8">
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

// import React from "react";
// import { Linkedin, Quote } from "lucide-react";

// const Founder = () => {
//   return (
//     <section
//       id="about"
//       className="py-16 bg-[#faf5ff] relative overflow-hidden border-t-2 border-b-2 border-black"
//     >
//       {/* Decorative star - adjusted for mobile */}
//       <div className="absolute top-4 left-4 md:top-12 md:left-12 text-[#ff5ec4] text-4xl md:text-6xl transform rotate-12 z-0">
//         ✦
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-8 relative z-10">
//           <h2 className="text-3xl font-black text-gray-900 sm:text-4xl md:text-5xl">
//             Meet Katelin, The AI Strategist
//           </h2>
//           <h2 className="text-3xl font-black text-gray-900 sm:text-4xl md:text-5xl">
//             Who Tests Everything So You Don't Have To
//           </h2>
//         </div>

//         <div className="grid lg:grid-cols-5 gap-8 items-start">
//           <div className="relative lg:col-span-2">
//             <div className="relative max-w-[320px] mx-auto">
//               {/* Hexagon shape with image */}
//               <div className="aspect-square relative">
//                 <div className="absolute inset-0 bg-[#ff5ec4] rounded-[40px] rotate-45 transform -translate-x-1/2 translate-y-1/2 scale-75" />
//                 <div className="absolute inset-0 bg-gray-100 rounded-[40px] border-2 border-black overflow-hidden">
//                   <img
//                     src="https://i.imgur.com/q3igsG5.jpeg"
//                     alt="Katelin O'Shea"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="relative lg:col-span-3">
//             <blockquote className="relative founder-section">
//               {/* Opening quote icon */}
//               <div className="absolute  top-0 left-0 text-black md:text-[#ff5ec4] ml-5 md:ml-0  text-5xl md:text-7xl -translate-x-8 -translate-y-6  opacity-30 z-0 rotate-180">
//                 <Quote />
//               </div>

//               <div className="text-base leading-relaxed space-y-3 font-normal text-justify">
//                 <p className="font-bold">I've been experimenting with AI since 2021,long before ChatGPT became a household name.</p>

//                 <p>My introduction wasn't through a viral tool. It was through a startup using large language models for social impact work. Watching how even basic AI could solve real problems with the right operations mindset; that was the moment everything clicked for me.</p>

//                 <p className="font-bold">I realised AI wasn't just a shiny new technology. It was a way to fundamentally change how businesses operate.</p>

//                 <p>Since then, I've built large-scale content management systems, automated cross-functional project management, and deployed AI-powered chatbots that maintain brand voice and augment team knowledge. I've used AI for conflict resolution, strategic ideation, email marketing automation, sales pipeline optimisation, and brand positioning work that would have taken teams weeks/months to complete manually.</p>

//                 <p className="font-bold">What makes my approach different?</p>

//                 <p><span className="font-bold">I come from operations, not computer science.</span> I've spent over 15+ years leading teams at companies like Dropbox and navigating startup chaos where resources are tight and results matter immediately. As a result I understand the pressure of needing AI to deliver ROI, not just look good in a presentation.</p>

//                 <p><span className="font-bold">I also come from content creation and brand strategy.</span> Great AI outputs requires great foundations. If your brand voice isn't clearly defined, your AI tools will produce generic content. I help you avoid that.</p>

//                 <p><span className="font-bold">And I believe in speaking plain English.</span> When I transitioned into tech, I was drowning in jargon. It was frustrating and completely unnecessary. I made a promise: I'd never do that to the people I work with. If I can't explain something simply, I haven't understood it well enough.</p>

//                 <p className="font-bold">Here's the thing most consultants won't tell you:</p>

//                 <p>The AI landscape moves faster than any business can track. New tools launch daily. Models update weekly. What worked last month might be obsolete today. That's exactly why I've built my own automation systems to monitor the AI landscape for me. I filter out the noise so I can focus on what will genuinely impact your business. I do this so you don't have to.</p>

//                 <p><span className="font-bold">My philosophy is straightforward:</span> Test first. Implement what works. Ditch what doesn't. And always focus on the business outcome, not the tool itself. I've worked with enterprise teams managing global operations and scrappy startups doing more with less. I bring that real-world experience to every engagement - whether you need strategic guidance or hands-on implementation.</p>

//                 <p><span className="font-bold">The result?</span> You skip the trial and error and get straight to AI solutions that impact your bottom line.</p>

//                 <p className="font-bold">Ready to see what actually works for your business?</p>

//                 <p>Start by downloading our services brochure. You'll see exactly how we work, what we offer, and our pricing structure. I believe in transparency - you should know what you're considering before we ever get on a call.</p>

//                 <p>If what you see resonates, then let's have a conversation about your specific situation.</p>

//                 <p className="font-bold">Download our 2026 Workshop Brochure</p>
//               </div>

//               <footer className="mt-8">
//                 <div className="mt-6 flex items-center">
//                   <div>
//                     <div className="text-lg font-bold text-gray-900">
//                       Katelin O'Shea
//                     </div>
//                     <div className="text-sm text-gray-600">
//                       Founder & CEO of AI That Works
//                     </div>
//                   </div>
//                   <a
//                     href="https://www.linkedin.com/in/katelinoshea/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="ml-4 text-gray-400 hover:text-[#0077b5] transition-colors"
//                   >
//                     <Linkedin className="h-5 w-5" />
//                   </a>
//                 </div>
//               </footer>
//             </blockquote>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Founder;
