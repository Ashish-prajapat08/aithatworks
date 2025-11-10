// import React from 'react';
// import { ArrowRight } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const WhyAISection = () => {
//   const navigate = useNavigate();

//   const handleNavigate = () => {
//     navigate('/gen-ai-kickstart');
//     window.scrollTo(0, 0);
//   };

//   return (
//     <section className="py-12 bg-[#ffc7ea] relative overflow-hidden border-t-2 border-b-2 border-black">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl md:text-5xl mb-6">
//               THE GEN AI KICKSTART COURSE
//               <span className="block text-lg sm:text-xl md:text-2xl mt-2 text-gray-800">
//                 LEARN ON YOUR OWN TERMS.
//               </span>
//             </h2>
//             <p className="text-xl text-gray-600 mb-8">
//               Build real AI skills on your own schedule with our step-by-step course, created and lead personally by Gen AI expert Katelin O'Shea.
//             </p>
//             <p className="text-xl text-gray-600 mb-8">
//               Get practical, jargon-free training that shows you exactly how to make AI That Works for you. Everything explained in bite-sized, actionable lessons that you can start using right away.
//             </p>
//             <p className="text-xl text-gray-600 mb-8">
//               Ready to get AI-confident? Join our growing community of business owners already winning with AI. No technical background needed!
//             </p>

//             <div className="flex justify-start">
//               <div className="group/btn relative">
//                 <div className="absolute left-0 right-0 top-0 bottom-0 transition-transform duration-300 ease-out">
//                   <div className="absolute inset-0 transition-transform duration-300 ease-out group-hover/btn:-translate-x-1 group-hover/btn:-translate-y-1">
//                     <div className="absolute inset-0 rounded-xl bg-[#ff5ec4] border-2 border-black opacity-40"></div>
//                   </div>
//                   <div className="absolute inset-0 transition-transform duration-300 ease-out delay-[25ms] group-hover/btn:-translate-x-2 group-hover/btn:-translate-y-2">
//                     <div className="absolute inset-0 rounded-xl bg-[#ff5ec4] border-2 border-black opacity-60"></div>
//                   </div>
//                 </div>

//                 <button 
//                   onClick={handleNavigate}
//                   className="relative inline-flex items-center px-6 py-2.5 bg-[#ff5ec4] text-white rounded-xl text-base font-semibold hover:bg-[#ff4bb8] transition-colors border-2 border-black transform-gpu group-hover/btn:-translate-x-3 group-hover/btn:-translate-y-3"
//                 >
//                   Register your EARLY BIRD interest here
//                   <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="relative">
//             <div className="relative">
//               <div className="absolute -top-20 -right-20 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-30" />
//               <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-30" />
//               <img
//                 src="https://i.ibb.co/bMF4jqLm/Chat-GPT-Image-Apr-12-2025-11-07-47-PM.png"
//                 alt="AI Training"
//                 className="rounded-2xl shadow-2xl relative z-10"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyAISection;