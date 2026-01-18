// import React from 'react';
// import { Gift, Users, UserCheck, ArrowRight, FileText } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const Ways = () => {
//   const handleBrochureDownload = () => {
//     const link = document.createElement('a');
//     link.href = 'https://drive.google.com/uc?export=download&id=1fFcgl0dvIzIA70BCi7_rucYznPBWHYA2';
//     link.setAttribute('download', 'AI-Workshop-Brochure-2026.pdf');
//     link.setAttribute('target', '_blank');
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <section id="ways" className="py-16 bg-black border-t-2 border-b-2 border-black">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl font-black text-white sm:text-4xl md:text-5xl mb-6 leading-relaxed">
//             THREE WAYS TO MAKE AI WORK FOR YOU
//           </h2>
//           <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
//             Whether you need team training, personal learning, or ready-to-use resources - we've got you covered.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {/* Card 1: AI Consulting */}
//           <div className="group relative min-h-[450px] md:min-h-auto">
//             <div className="absolute inset-0 transition-all duration-300 ease-out transform-gpu">
//               <div className="absolute inset-0 rounded-2xl bg-white border-2 border-black opacity-40 group-hover:opacity-60 transition-all duration-300 ease-out"></div>
//               <div className="absolute inset-0 rounded-2xl bg-white border-2 border-black opacity-60 group-hover:opacity-80 transition-all duration-300 ease-out delay-[25ms]"></div>
//             </div>

//             <div className="relative bg-white p-6 sm:p-8 rounded-2xl border-2 border-black transform-gpu group-hover:-translate-x-3 group-hover:-translate-y-3 transition-all duration-300 ease-out flex flex-col h-full">
//               <div className="relative">
//                 <div className="w-16 h-16 bg-gradient-to-br from-[#9399f4] to-[#ff5ec4] rounded-xl flex items-center justify-center mb-6 border-2 border-black transition-all duration-300 ease-out flex-shrink-0">
//                   <UserCheck className="h-8 w-8 text-white" />
//                 </div>
//                 <div className="absolute -inset-1 bg-gradient-to-br from-[#9399f4]/20 to-[#ff5ec4]/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
//               </div>
              
//               <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-relaxed">AI Consulting</h3>
//               <div className="text-sm sm:text-base text-gray-600 mb-6 flex-grow leading-relaxed">
//                 Personalised AI implementation support for business owners and teams. Get unstuck fast with hands-on AI automation and implementation guidance.
//               </div>
              
//               <div className="group/btn relative">
//                 <div className="absolute inset-0 transition-all duration-300 ease-out">
//                   <div className="absolute inset-0 transition-all duration-300 ease-out group-hover/btn:-translate-x-1 group-hover/btn:-translate-y-1">
//                     <div className="absolute inset-0 rounded-xl bg-black/50 border-2 border-black opacity-40"></div>
//                   </div>
//                   <div className="absolute inset-0 transition-all duration-300 ease-out delay-[25ms] group-hover/btn:-translate-x-2 group-hover/btn:-translate-y-2">
//                     <div className="absolute inset-0 rounded-xl bg-black/30 border-2 border-black opacity-60"></div>
//                   </div>
//                 </div>

//                 <button
//                   onClick={handleBrochureDownload}
//                   className="relative inline-flex w-full items-center justify-center px-4 sm:px-6 py-3 bg-white text-[#3843d0] hover:bg-[#3843d0] hover:text-white rounded-xl font-semibold transition-colors border-2 border-black transform-gpu group-hover/btn:-translate-x-3 group-hover/btn:-translate-y-3 text-sm sm:text-base"
//                 >
//                   See our Brochure
//                   <FileText className="ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover/btn:translate-x-1 flex-shrink-0" />
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Card 2: Team Workshops */}
//           <div className="group relative min-h-[450px] md:min-h-auto">
//             <div className="absolute inset-0 transition-all duration-300 ease-out transform-gpu">
//               <div className="absolute inset-0 rounded-2xl bg-white border-2 border-black opacity-40 group-hover:opacity-60 transition-all duration-300 ease-out"></div>
//               <div className="absolute inset-0 rounded-2xl bg-white border-2 border-black opacity-60 group-hover:opacity-80 transition-all duration-300 ease-out delay-[25ms]"></div>
//             </div>

//             <div className="relative bg-white p-6 sm:p-8 rounded-2xl border-2 border-black transform-gpu group-hover:-translate-x-3 group-hover:-translate-y-3 transition-all duration-300 ease-out flex flex-col h-full">
//               <div className="relative">
//                 <div className="w-16 h-16 bg-gradient-to-br from-[#9399f4] to-[#ff5ec4] rounded-xl flex items-center justify-center mb-6 border-2 border-black transition-all duration-300 ease-out flex-shrink-0">
//                   <Users className="h-8 w-8 text-white" />
//                 </div>
//                 <div className="absolute -inset-1 bg-gradient-to-br from-[#9399f4]/20 to-[#ff5ec4]/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
//               </div>
              
//               <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-relaxed">Team Workshops</h3>
//               <div className="text-sm sm:text-base text-gray-600 mb-6 flex-grow leading-relaxed">
//                 Get your whole team AI-confident with practical, engaging training that actually sticks. Delivered online and tailored to your business.
//               </div>
              
//               <div className="group/btn relative">
//                 <div className="absolute inset-0 transition-all duration-300 ease-out">
//                   <div className="absolute inset-0 transition-all duration-300 ease-out group-hover/btn:-translate-x-1 group-hover/btn:-translate-y-1">
//                     <div className="absolute inset-0 rounded-xl bg-black/50 border-2 border-black opacity-40"></div>
//                   </div>
//                   <div className="absolute inset-0 transition-all duration-300 ease-out delay-[25ms] group-hover/btn:-translate-x-2 group-hover/btn:-translate-y-2">
//                     <div className="absolute inset-0 rounded-xl bg-black/30 border-2 border-black opacity-60"></div>
//                   </div>
//                 </div>

//                 <Link
//                   to="/workshops"
//                   className="relative inline-flex w-full items-center justify-center px-4 sm:px-6 py-3 bg-white text-[#3843d0] hover:bg-[#3843d0] hover:text-white rounded-xl font-semibold transition-colors border-2 border-black transform-gpu group-hover/btn:-translate-x-3 group-hover/btn:-translate-y-3 text-sm sm:text-base"
//                 >
//                   Book a Workshop
//                   <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover/btn:translate-x-1 flex-shrink-0" />
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* Card 3: Free AI Tools */}
//           <div className="group relative min-h-[450px] md:min-h-auto">
//             <div className="absolute inset-0 transition-all duration-300 ease-out transform-gpu">
//               <div className="absolute inset-0 rounded-2xl bg-white border-2 border-black opacity-40 group-hover:opacity-60 transition-all duration-300 ease-out"></div>
//               <div className="absolute inset-0 rounded-2xl bg-white border-2 border-black opacity-60 group-hover:opacity-80 transition-all duration-300 ease-out delay-[25ms]"></div>
//             </div>

//             <div className="relative bg-white p-6 sm:p-8 rounded-2xl border-2 border-black transform-gpu group-hover:-translate-x-3 group-hover:-translate-y-3 transition-all duration-300 ease-out flex flex-col h-full">
//               <div className="relative">
//                 <div className="w-16 h-16 bg-gradient-to-br from-[#9399f4] to-[#ff5ec4] rounded-xl flex items-center justify-center mb-6 border-2 border-black transition-all duration-300 ease-out flex-shrink-0">
//                   <Gift className="h-8 w-8 text-white" />
//                 </div>
//                 <div className="absolute -inset-1 bg-gradient-to-br from-[#9399f4]/20 to-[#ff5ec4]/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
//               </div>
              
//               <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-relaxed">Our Free AI Tools</h3>
//               <div className="text-sm sm:text-base text-gray-600 mb-6 flex-grow leading-relaxed">
//                 Get instant access to practical AI resources, templates, and guides. Plus, join our weekly newsletter for actionable AI tips you can use right away.
//               </div>
              
//               <div className="group/btn relative">
//                 <div className="absolute inset-0 transition-all duration-300 ease-out">
//                   <div className="absolute inset-0 transition-all duration-300 ease-out group-hover/btn:-translate-x-1 group-hover/btn:-translate-y-1">
//                     <div className="absolute inset-0 rounded-xl bg-black/50 border-2 border-black opacity-40"></div>
//                   </div>
//                   <div className="absolute inset-0 transition-all duration-300 ease-out delay-[25ms] group-hover/btn:-translate-x-2 group-hover/btn:-translate-y-2">
//                     <div className="absolute inset-0 rounded-xl bg-black/30 border-2 border-black opacity-60"></div>
//                   </div>
//                 </div>

//                 <Link
//                   to="/free-tools"
//                   className="relative inline-flex w-full items-center justify-center px-4 sm:px-6 py-3 bg-white text-[#3843d0] hover:bg-[#3843d0] hover:text-white rounded-xl font-semibold transition-colors border-2 border-black transform-gpu group-hover/btn:-translate-x-3 group-hover/btn:-translate-y-3 text-sm sm:text-base"
//                 >
//                   Get Free Tools
//                   <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover/btn:translate-x-1 flex-shrink-0" />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default Ways;








import React from 'react';
import { Gift, Users, UserCheck, ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Ways = () => {
  const handleBrochureDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1fFcgl0dvIzIA70BCi7_rucYznPBWHYA2';
    link.setAttribute('download', 'AI-Workshop-Brochure-2026.pdf');
    link.setAttribute('target', '_blank');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
          {/* Card 1: AI Consulting */}
          <div className="group relative">
            <div className="absolute inset-0 transition-all duration-300 ease-out transform-gpu">
              <div className="absolute inset-0 rounded-2xl bg-white border-2 border-black opacity-40 group-hover:opacity-60 transition-all duration-300 ease-out"></div>
              <div className="absolute inset-0 rounded-2xl bg-white border-2 border-black opacity-60 group-hover:opacity-80 transition-all duration-300 ease-out delay-[25ms]"></div>
            </div>

            <div className="relative bg-white p-6 sm:p-8 rounded-2xl border-2 border-black transform-gpu group-hover:-translate-x-3 group-hover:-translate-y-3 transition-all duration-300 ease-out flex flex-col h-full">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#9399f4] to-[#ff5ec4] rounded-xl flex items-center justify-center mb-6 border-2 border-black transition-all duration-300 ease-out flex-shrink-0">
                  <UserCheck className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-[#9399f4]/20 to-[#ff5ec4]/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-relaxed">AI Consulting</h3>
              <div className="text-sm sm:text-base text-gray-600 mb-12 leading-relaxed">
                Personalised AI implementation support for business owners and teams. Get unstuck fast with hands-on AI automation and implementation guidance.
              </div>
              
              <div className="group/btn relative mt-auto">
                <div className="absolute inset-0 transition-all duration-300 ease-out">
                  <div className="absolute inset-0 transition-all duration-300 ease-out group-hover/btn:-translate-x-1 group-hover/btn:-translate-y-1">
                    <div className="absolute inset-0 rounded-xl bg-black/50 border-2 border-black opacity-40"></div>
                  </div>
                  <div className="absolute inset-0 transition-all duration-300 ease-out delay-[25ms] group-hover/btn:-translate-x-2 group-hover/btn:-translate-y-2">
                    <div className="absolute inset-0 rounded-xl bg-black/30 border-2 border-black opacity-60"></div>
                  </div>
                </div>

                <button
                  onClick={handleBrochureDownload}
                  className="relative inline-flex w-full items-center justify-center px-4 sm:px-6 py-3 bg-white text-[#3843d0] hover:bg-[#3843d0] hover:text-white rounded-xl font-semibold transition-colors border-2 border-black transform-gpu group-hover/btn:-translate-x-3 group-hover/btn:-translate-y-3 text-sm sm:text-base"
                >
                  See our Brochure
                  <FileText className="ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover/btn:translate-x-1 flex-shrink-0" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Team Workshops */}
          <div className="group relative">
            <div className="absolute inset-0 transition-all duration-300 ease-out transform-gpu">
              <div className="absolute inset-0 rounded-2xl bg-white border-2 border-black opacity-40 group-hover:opacity-60 transition-all duration-300 ease-out"></div>
              <div className="absolute inset-0 rounded-2xl bg-white border-2 border-black opacity-60 group-hover:opacity-80 transition-all duration-300 ease-out delay-[25ms]"></div>
            </div>

            <div className="relative bg-white p-6 sm:p-8 rounded-2xl border-2 border-black transform-gpu group-hover:-translate-x-3 group-hover:-translate-y-3 transition-all duration-300 ease-out flex flex-col h-full">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#9399f4] to-[#ff5ec4] rounded-xl flex items-center justify-center mb-6 border-2 border-black transition-all duration-300 ease-out flex-shrink-0">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-[#9399f4]/20 to-[#ff5ec4]/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-relaxed">Team Workshops</h3>
              <div className="text-sm sm:text-base text-gray-600 mb-12 leading-relaxed">
                Get your whole team AI-confident with practical, engaging training that actually sticks. Delivered online and tailored to your business.
              </div>
              
              <div className="group/btn relative mt-auto">
                <div className="absolute inset-0 transition-all duration-300 ease-out">
                  <div className="absolute inset-0 transition-all duration-300 ease-out group-hover/btn:-translate-x-1 group-hover/btn:-translate-y-1">
                    <div className="absolute inset-0 rounded-xl bg-black/50 border-2 border-black opacity-40"></div>
                  </div>
                  <div className="absolute inset-0 transition-all duration-300 ease-out delay-[25ms] group-hover/btn:-translate-x-2 group-hover/btn:-translate-y-2">
                    <div className="absolute inset-0 rounded-xl bg-black/30 border-2 border-black opacity-60"></div>
                  </div>
                </div>

                <Link
                  to="/workshops"
                  className="relative inline-flex w-full items-center justify-center px-4 sm:px-6 py-3 bg-white text-[#3843d0] hover:bg-[#3843d0] hover:text-white rounded-xl font-semibold transition-colors border-2 border-black transform-gpu group-hover/btn:-translate-x-3 group-hover/btn:-translate-y-3 text-sm sm:text-base"
                >
                  Book a Workshop
                  <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover/btn:translate-x-1 flex-shrink-0" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3: Free AI Tools */}
          <div className="group relative">
            <div className="absolute inset-0 transition-all duration-300 ease-out transform-gpu">
              <div className="absolute inset-0 rounded-2xl bg-white border-2 border-black opacity-40 group-hover:opacity-60 transition-all duration-300 ease-out"></div>
              <div className="absolute inset-0 rounded-2xl bg-white border-2 border-black opacity-60 group-hover:opacity-80 transition-all duration-300 ease-out delay-[25ms]"></div>
            </div>

            <div className="relative bg-white p-6 sm:p-8 rounded-2xl border-2 border-black transform-gpu group-hover:-translate-x-3 group-hover:-translate-y-3 transition-all duration-300 ease-out flex flex-col h-full">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#9399f4] to-[#ff5ec4] rounded-xl flex items-center justify-center mb-6 border-2 border-black transition-all duration-300 ease-out flex-shrink-0">
                  <Gift className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-[#9399f4]/20 to-[#ff5ec4]/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-relaxed">Our Free AI Tools</h3>
              <div className="text-sm sm:text-base text-gray-600 mb-12 leading-relaxed">
                Get instant access to practical AI resources, templates, and guides. Plus, join our weekly newsletter for actionable AI tips you can use right away.
              </div>
              
              <div className="group/btn relative mt-auto">
                <div className="absolute inset-0 transition-all duration-300 ease-out">
                  <div className="absolute inset-0 transition-all duration-300 ease-out group-hover/btn:-translate-x-1 group-hover/btn:-translate-y-1">
                    <div className="absolute inset-0 rounded-xl bg-black/50 border-2 border-black opacity-40"></div>
                  </div>
                  <div className="absolute inset-0 transition-all duration-300 ease-out delay-[25ms] group-hover/btn:-translate-x-2 group-hover/btn:-translate-y-2">
                    <div className="absolute inset-0 rounded-xl bg-black/30 border-2 border-black opacity-60"></div>
                  </div>
                </div>

                <Link
                  to="/free-tools"
                  className="relative inline-flex w-full items-center justify-center px-4 sm:px-6 py-3 bg-white text-[#3843d0] hover:bg-[#3843d0] hover:text-white rounded-xl font-semibold transition-colors border-2 border-black transform-gpu group-hover/btn:-translate-x-3 group-hover/btn:-translate-y-3 text-sm sm:text-base"
                >
                  Get Free Tools
                  <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover/btn:translate-x-1 flex-shrink-0" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ways;