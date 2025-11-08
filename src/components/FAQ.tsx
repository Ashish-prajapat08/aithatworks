import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const FAQItem = ({ question, answer, isOpen, onClick, onContactClick }: {
  question: string;
  answer: string | React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
  onContactClick?: () => void;
}) => {
  return (
    <div className="mb-4">
      <button
        onClick={onClick}
        className="w-full bg-white rounded-xl px-6 py-4 flex justify-between items-center text-left transition-all duration-200 hover:shadow-lg"
      >
        <span className="text-[#2d1c5a] font-semibold">{question}</span>
        <ChevronDown 
          className={`h-4 w-4 text-[#2d1c5a] transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="bg-white rounded-xl mt-2 px-6 py-4 shadow-md">
          <div className="text-gray-600 whitespace-pre-line">
            {answer}
          </div>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = () => {
    navigate('/contact');
  };

  const faqs = [
    {
      question: "I've heard AI is complicated - will I really be able to use it?",
      answer: "If you can use a smartphone, you can use AI! We break everything down into simple, practical steps. Our students range from complete beginners to business leaders, and they all walk away knowing exactly how to make AI work for them."
    },
    {
      question: "How quickly will I see results?",
      answer: "You'll start seeing wins from day one! Our training focuses on practical applications you can use straight away. Many of our students tell us they save hours in their first week using the tools and techniques we teach."
    },
    {
      question: "What makes your training different?",
      answer: "We keep it real! No complex jargon or theoretical stuff - just practical, actionable training that shows you exactly how to use AI in your day-to-day work. Plus, I've been where you are, so I know exactly how to make AI click for non-technical people."
    },
    {
      question: "Which program is right for me?",
      answer: "If you want to power up your whole team, our Workshops are perfect. For personal learning, start with our Gen AI Kickstart Course. Not sure? Reach out via our contact page and I'll help you figure out the best path for your needs."
    },
    {
      question: "How much time do I need to commit?",
      answer: "Our Gen AI Kickstart Course is completely flexible - learn at whatever pace works for you. Some people zoom through in a few weeks, others take their time. For team training, we'll work around your schedule, whether that's intensive sessions or spread out over time."
    },
    {
      question: "What's the investment?",
      answer: (
        <div className="text-sm sm:text-base leading-relaxed text-gray-600">
          <p className="m-0">We've made AI training accessible for everyone:</p>
          <ul className="mt-2 space-y-1 list-none m-0">
            <li className="m-0">• Gen AI Kickstart Course: €34.99/month</li>
            <li className="m-0">• Team Workshops: Starting from €1600 per day</li>
            <li className="m-0">
              • Custom Programs: Let's chat about your needs – reach out at our{" "}
              <button
                onClick={handleContactClick}
                className="inline text-[#3843d0] hover:underline focus:outline-none m-0 p-0"
              >
                contact us page
              </button>.
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "Do I need to buy expensive AI tools?",
      answer: "Not at all! We'll show you how to get amazing results with free tools first. The only thing we recommend is a paid AI chatbot subscription (about €20/month) to access the best features. Beyond that, we'll help you choose tools that make sense for your specific needs."
    },
    {
      question: "Can you tailor the training for my team?",
      answer: "100% yes! Every team is different, so we customise our workshops to match your industry, challenges, and goals. We'll work together to create training that delivers exactly what your team needs."
    },
    {
      question: "Which industries do you work with?",
      answer: "From education and research, to ecommerce and logistics - and plenty in between! The best part? Because we're all at the start of the AI revolution, these core skills work across every industry. No matter your sector, you'll learn exactly how to make AI deliver real results for you and your business!"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-[#f7f5ff] border-t-2 border-b-2 border-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-[#2d1c5a] sm:text-4xl md:text-5xl mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              onContactClick={handleContactClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;