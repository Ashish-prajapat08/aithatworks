import React from 'react';
import { Users, Target, TrendingUp, FileText } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const ConsultancyBanner = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScheduleClick = () => {
    if (location.pathname === '/') {
      const newsletterSection = document.getElementById('newsletter');
      if (newsletterSection) {
        newsletterSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollToNewsletter: true } });
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1EGJAqT4w-EvYnqEEZiKCzqQsWlS2iX1F';
    link.setAttribute('download', 'AI-Workshop-Brochure-2025.pdf');
    link.setAttribute('target', '_blank');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative py-12 sm:py-24 overflow-hidden bg-white border-t-2 border-b-2 border-black">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #000000 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-black">
            <h2 className="text-3xl font-black tracking-tight text-black sm:text-4xl md:text-5xl mb-6">
              POWER UP<br />
              YOUR PEOPLE<br />
              WITH OUR TAILORED<br />
              AI WORKSHOPS
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Every workshop is tailored to your business needs and delivered in clear, practical steps. Because when your people win with AI, your business wins too!
            </p>
            
            <div className="space-y-6">
              {[
                {
                  icon: Users,
                  title: 'Amplify, Don\'t Replace',
                  description: 'Show your team how AI enhances their skills, giving them time back for strategic, value-driving work.'
                },
                {
                  icon: Target,
                  title: 'EU AI Act Ready',
                  description: 'Our workshops will satisfy EU requirements, plus have your team leave knowing exactly how to use AI safely and effectively.'
                },
                {
                  icon: TrendingUp,
                  title: 'Real Skills, Real Impact',
                  description: 'No theory - just practical AI training your team can use right away in their daily work.'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-[#3843d0]/10 p-3 rounded-lg">
                    <item.icon className="h-6 w-6 text-[#3843d0]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-black">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-600 mb-4">See our 2025 Workshop Brochure for details on:</p>
              <ul className="text-gray-600 list-disc list-inside mb-6 space-y-2">
                <li>Online and in-person training options</li>
                <li>6 and 12 month training programs</li>
              </ul>
              
              <button
                onClick={handleDownload}
                className="bg-[#3843d0] text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-[#2d35a8] transition-colors inline-flex items-center border-2 border-black"
              >
                <FileText className="h-4 w-4 mr-2" />
                Download our AI Workshop Brochure
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-black">
              <img
                src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80"
                alt="AI Consultation"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                  <p className="text-2xl font-semibold text-white mb-3">
                    Ready to Start?
                  </p>
                  <Link
                    to="/contact"
                    className="bg-white text-[#3843d0] px-6 py-2.5 rounded-xl font-semibold hover:bg-gray-50 transition-colors w-full border-2 border-black block text-center"
                  >
                    Contact us to make a booking
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultancyBanner;