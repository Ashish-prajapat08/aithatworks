import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const Newsletter = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    consent: false
  });

  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    if (!formData.consent) {
      setIsLoading(false);
      alert('Please agree to receive updates.');
      return;
    }

    try {
      const response = await fetch('https://beehive-backend-sigma.vercel.app/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        console.log('Subscription successful:', result);
        setIsSubscribed(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          jobTitle: '',
          consent: false,
        });
      } else {
        setErrorMessage(result.message || 'Something went wrong. Please try again later.');
      }
    } catch (error) {
      setErrorMessage('Network error. Please try again later.');
      console.error('Error during subscription:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="newsletter" className="py-24 bg-[#f7f5ff] border-t-2 border-b-2 border-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #000000 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-black">
            <div className="inline-flex items-center justify-center p-3 bg-[#3843d0]/10 rounded-2xl mb-8">
              <Mail className="h-8 w-8 text-[#3843d0]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              GET THE <span className="text-[#fd5ec2]">AI THAT WORKS</span> NEWSLETTER DELIVERED DIRECTLY TO YOUR INBOX
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join our growing community of professionals getting weekly AI insights, tips, and strategies which you can put to work today!
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-black">
            {/* Show success message if subscribed */}
            {isSubscribed ? (
              <div className="text-center">
                <h3 className="text-xl font-semibold text-[#3843d0]">Subscription Successful!</h3>
                <p className="text-lg text-gray-600 mt-4">Thank you for subscribing! You will receive the latest updates directly to your inbox.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#3843d0] focus:ring-2 focus:ring-[#3843d0]/20 outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#3843d0] focus:ring-2 focus:ring-[#3843d0]/20 outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#3843d0] focus:ring-2 focus:ring-[#3843d0]/20 outline-none transition-colors"
                    required
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    title="Please enter a valid email address"
                  />
                </div>

                <div>
                  <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">
                    Job title / Role
                  </label>
                  <input
                    type="text"
                    id="jobTitle"
                    value={formData.jobTitle}
                    onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#3843d0] focus:ring-2 focus:ring-[#3843d0]/20 outline-none transition-colors"
                    required
                  />
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      id="consent"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="h-4 w-4 rounded border-gray-300 text-[#3843d0] focus:ring-[#3843d0]"
                      required
                    />
                  </div>
                  <label htmlFor="consent" className="ml-3 text-sm text-gray-600">
                    Count me in! I'd love AI tips, tricks and updates from AI That Works delivered straight to my inbox. Unsubscribe whenever you like!
                  </label>
                </div>

                {errorMessage && (
                  <div className="text-red-600 text-sm mt-2">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#3843d0]'} text-white px-6 py-4 rounded-lg font-semibold hover:bg-[#2d35a8] transition-colors flex items-center justify-center group border-2 border-black`}
                >
                  {isLoading ? 'Subscribing...' : 'Subscribe to Newsletter'}
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;