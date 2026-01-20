import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Speaking = () => {
  const navigate = useNavigate();

  const handleNewsletterClick = () => {
    navigate('/contact');
  };

  return (
    <>
      <div className="min-h-[80vh] bg-[#9399f4] pt-32 pb-24 relative overflow-hidden flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center text-white hover:text-black transition-colors group"
            >
              <ArrowLeft className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-black mb-6 tracking-tighter">
                SPEAKING &
                <br />
                EVENTS
              </h2>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-8">
              Helping make AI accessible for forward thinking organisations
              and events.
              </h2>
              <p className="text-xl text-[#000000] mb-8">
                Let's discuss how we can bring clarity to AI for your audience.
              </p>
              <div className="group/btn relative inline-block">
                <div className="absolute left-0 right-0 top-0 bottom-0 transition-transform duration-300 ease-out">
                  <div className="absolute inset-0 transition-transform duration-300 ease-out group-hover/btn:-translate-x-1 group-hover/btn:-translate-y-1">
                    <div className="absolute inset-0 rounded-xl bg-[#ff5ec4] border-2 border-black opacity-40"></div>
                  </div>
                  <div className="absolute inset-0 transition-transform duration-300 ease-out delay-[25ms] group-hover/btn:-translate-x-2 group-hover/btn:-translate-y-2">
                    <div className="absolute inset-0 rounded-xl bg-[#ff5ec4] border-2 border-black opacity-60"></div>
                  </div>
                </div>

                <button
                  onClick={handleNewsletterClick}
                  className="relative inline-flex items-center px-6 py-2.5 bg-[#ff5ec4] text-white rounded-xl text-base font-semibold hover:bg-[#ff4bb8] transition-colors border-2 border-black transform-gpu group-hover/btn:-translate-x-3 group-hover/btn:-translate-y-3"
                >
                  Get in touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-black shadow-2xl w-full max-w-md lg:max-w-none">
                <img
                  src="https://i.ibb.co/5xXQtmFx/PHOTO-2025-04-13-03-08-13.jpg"
                  alt="Keynote Speaking"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-24 border-t-2 border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div className="text-left max-w-xl">
              <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
                ABOUT ME, YOUR SPEAKER:
                <br />
                KATELIN O'SHEA
              </h2>
              <h3 className="text-3xl md:text-4xl font-black text-[#ff5ec4] mb-8">
                Bringing Strategic Clarity to AI Adoption
              </h3>
              <div className="text-xl md:text-2xl text-gray-600 space-y-8">
                <p>
                 I started exploring AI back in 2021 because I saw something most people missed: the gap between AI's promise and practical reality for non-technical business owners.
                </p>
                
                <p>
                  I combine 10+ years of operations expertise with 4+ years of hands-on AI experimentation, delivering strategic frameworks that cut through the never ending hype. My approach is grounded in systems thinking - working backward from your end goal to identify where AI actually creates value.
                </p>
                
                <p>
                  My talks focus on:
                  <ul className="list-disc list-inside mt-4 space-y-2">
                   <li><strong>Risk vs Impact Assessment: </strong> Choosing the right first AI pilots</li>
                   <li><strong>Time Thieves methodology: </strong>Identifying where teams lose hours every week</li>
                   <li><strong>Expectation calibration: </strong>What AI can and can't reliably do today</li>
                   <li><strong>Change leadership: </strong>Getting teams on board without the fear</li>
                   <div>No theory, no jargon - just clear strategic direction your audience can actually apply.</div>
                    </ul>
                </p>
              </div>

              <div className="mt-12">
                <h3 className="text-3xl md:text-4xl font-black text-black mb-8">
                  PERFECT FOR EVENTS WHERE YOUR AUDIENCE:
                </h3>
                <ul className="space-y-6 text-xl md:text-2xl text-gray-600">
                  <li className="flex items-center">
                    <span className="mr-4 text-[#ff5ec4] text-3xl">•</span>
                   Needs direction on where to start with AI
                  </li>
                  <li className="flex items-center">
                    <span className="mr-4 text-[#ff5ec4] text-3xl">•</span>
                    Wants frameworks, not hype
                  </li>
                  <li className="flex items-center">
                    <span className="mr-4 text-[#ff5ec4] text-3xl">•</span>
                    Is facing pressure to adopt but doesn't know how
                  </li>
                </ul>
              </div>

              <p className="mt-12 text-xl md:text-2xl text-gray-600">
                Let's discuss how I can bring strategic AI clarity to your next event.
              </p>

              <div className="flex">
                <div className="group/btn relative inline-block mt-8">
                  <div className="absolute left-0 right-0 top-0 bottom-0 transition-transform duration-300 ease-out">
                    <div className="absolute inset-0 transition-transform duration-300 ease-out group-hover/btn:-translate-x-1 group-hover/btn:-translate-y-1">
                      <div className="absolute inset-0 rounded-xl bg-[#ff5ec4] border-2 border-black opacity-40"></div>
                    </div>
                    <div className="absolute inset-0 transition-transform duration-300 ease-out delay-[25ms] group-hover/btn:-translate-x-2 group-hover/btn:-translate-y-2">
                      <div className="absolute inset-0 rounded-xl bg-[#ff5ec4] border-2 border-black opacity-60"></div>
                    </div>
                  </div>

                  <button
                    onClick={handleNewsletterClick}
                    className="relative inline-flex items-center px-8 py-4 bg-[#ff5ec4] text-white rounded-xl text-lg font-semibold hover:bg-[#ff4bb8] transition-colors border-2 border-black transform-gpu group-hover/btn:-translate-x-3 group-hover/btn:-translate-y-3"
                  >
                    Enquire Here For Availability
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] w-full mt-8 lg:mt-28">
                <div className="absolute inset-0 bg-[#ff5ec4] rounded-[40px] rotate-45 transform -translate-x-1/2 translate-y-1/2 scale-50" />
                <div className="relative bg-gray-100 rounded-[40px] border-2 border-black overflow-hidden aspect-square">
                  <img 
                    src="https://i.imgur.com/q3igsG5.jpeg"
                    alt="Katelin O'Shea"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Speaking;









// import React from 'react';
// import { ArrowLeft, ArrowRight } from 'lucide-react';
// import { Link, useNavigate } from 'react-router-dom';

// const Speaking = () => {
//   const navigate = useNavigate();

//   const handleNewsletterClick = () => {
//     navigate('/contact');
//   };

//   return (
//     <>
//       <div className="min-h-[80vh] bg-[#9399f4] pt-32 pb-24 relative overflow-hidden flex items-center">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
//           <div className="mb-8">
//             <Link
//               to="/"
//               className="inline-flex items-center text-white hover:text-black transition-colors group"
//             >
//               <ArrowLeft className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
//               Back to Home
//             </Link>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className="text-left">
//               <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-black mb-6 tracking-tighter">
//                 SPEAKING &
//                 <br />
//                 EVENTS
//               </h2>
//               <h2 className="text-2xl md:text-3xl font-black text-white mb-8">
//               Helping make AI accessible for forward thinking organisations
//               and events.
//               </h2>
//               <p className="text-xl text-[#000000] mb-8">
//                 Let's discuss how we can bring clarity to AI for your audience.
//               </p>
//               <div className="group/btn relative inline-block">
//                 <div className="absolute left-0 right-0 top-0 bottom-0 transition-transform duration-300 ease-out">
//                   <div className="absolute inset-0 transition-transform duration-300 ease-out group-hover/btn:-translate-x-1 group-hover/btn:-translate-y-1">
//                     <div className="absolute inset-0 rounded-xl bg-[#ff5ec4] border-2 border-black opacity-40"></div>
//                   </div>
//                   <div className="absolute inset-0 transition-transform duration-300 ease-out delay-[25ms] group-hover/btn:-translate-x-2 group-hover/btn:-translate-y-2">
//                     <div className="absolute inset-0 rounded-xl bg-[#ff5ec4] border-2 border-black opacity-60"></div>
//                   </div>
//                 </div>

//                 <button
//                   onClick={handleNewsletterClick}
//                   className="relative inline-flex items-center px-6 py-2.5 bg-[#ff5ec4] text-white rounded-xl text-base font-semibold hover:bg-[#ff4bb8] transition-colors border-2 border-black transform-gpu group-hover/btn:-translate-x-3 group-hover/btn:-translate-y-3"
//                 >
//                   Get in touch
//                   <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
//                 </button>
//               </div>
//             </div>

//             <div className="relative">
//               <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-black shadow-2xl">
//                 <img
//                   src="https://i.ibb.co/5xXQtmFx/PHOTO-2025-04-13-03-08-13.jpg"
//                   alt="Keynote Speaking"
//                   className="absolute inset-0 w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white py-24 border-t-2 border-b-2 border-black">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-16 items-start">
//             <div className="text-left max-w-xl">
//               <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
//                 ABOUT ME, YOUR SPEAKER:
//                 <br />
//                 KATELIN O'SHEA
//               </h2>
//               <h3 className="text-3xl md:text-4xl font-black text-[#ff5ec4] mb-8">
//                 Helping AI Make Sense for Your Audience
//               </h3>
//               <div className="text-xl md:text-2xl text-gray-600 space-y-8">
//                 <p>
//                   I started exploring AI back in 2021 (yes, before ChatGPT was everywhere!) because I saw something exciting: tools that
//                   could give businesses back valuable time to focus on what really matters.
//                 </p>
                
//                 <p>
//                   I combine real business experience with practical AI knowledge, delivering clear explanations and live demonstrations that
//                   show exactly how AI can work in your organisation or for the particular audience. No theory, just real solutions that work.
//                 </p>
                
//                 <p>
//                   My talks cut through the complexity of AI, focusing on implementation strategies that your audience can actually use. I
//                   bring a 'get things done' approach - because at the end of the day, it's about making AI work for your business, not just
//                   talking about it.
//                 </p>
//               </div>

//               <div className="mt-12">
//                 <h3 className="text-3xl md:text-4xl font-black text-black mb-8">
//                   PERFECT FOR EVENTS WHERE YOUR AUDIENCE:
//                 </h3>
//                 <ul className="space-y-6 text-xl md:text-2xl text-gray-600">
//                   <li className="flex items-center">
//                     <span className="mr-4 text-[#ff5ec4] text-3xl">•</span>
//                     Needs clarity on AI implementation
//                   </li>
//                   <li className="flex items-center">
//                     <span className="mr-4 text-[#ff5ec4] text-3xl">•</span>
//                     Wants practical solutions, not theory
//                   </li>
//                   <li className="flex items-center">
//                     <span className="mr-4 text-[#ff5ec4] text-3xl">•</span>
//                     Is ready to take action
//                   </li>
//                 </ul>
//               </div>

//               <p className="mt-12 text-xl md:text-2xl text-gray-600">
//                 Let's discuss how we can bring practical AI insights to your next event.
//               </p>

//               <div className="flex">
//                 <div className="group/btn relative inline-block mt-8">
//                   <div className="absolute left-0 right-0 top-0 bottom-0 transition-transform duration-300 ease-out">
//                     <div className="absolute inset-0 transition-transform duration-300 ease-out group-hover/btn:-translate-x-1 group-hover/btn:-translate-y-1">
//                       <div className="absolute inset-0 rounded-xl bg-[#ff5ec4] border-2 border-black opacity-40"></div>
//                     </div>
//                     <div className="absolute inset-0 transition-transform duration-300 ease-out delay-[25ms] group-hover/btn:-translate-x-2 group-hover/btn:-translate-y-2">
//                       <div className="absolute inset-0 rounded-xl bg-[#ff5ec4] border-2 border-black opacity-60"></div>
//                     </div>
//                   </div>

//                   <button
//                     onClick={handleNewsletterClick}
//                     className="relative inline-flex items-center px-8 py-4 bg-[#ff5ec4] text-white rounded-xl text-lg font-semibold hover:bg-[#ff4bb8] transition-colors border-2 border-black transform-gpu group-hover/btn:-translate-x-3 group-hover/btn:-translate-y-3"
//                   >
//                     Enquire Here For Availability
//                     <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="relative flex items-center justify-end">
//               <div className="relative max-w-[420px] w-full mt-0 lg:mt-28">
//                 <div className="absolute inset-0 bg-[#ff5ec4] rounded-[40px] rotate-45 transform -translate-x-1/2 translate-y-1/2 scale-50" />
//                 <div className="relative bg-gray-100 rounded-[40px] border-2 border-black overflow-hidden aspect-square">
//                   <img 
//                     src="https://i.imgur.com/q3igsG5.jpeg"
//                     alt="Katelin O'Shea"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Speaking;