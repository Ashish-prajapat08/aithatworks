import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { a, div } from 'framer-motion/client';

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
        <span className="text-[#2d1c5a] font-bold faq-question">{question}</span>
        <ChevronDown 
          className={`h-4 w-4 text-[#2d1c5a] transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="bg-white rounded-xl mt-2 px-6 py-4 shadow-md faq-answer">
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
      answer: (
        <div>
          <p className="mb-4"> <strong>Need strategic direction?</strong> Start with the AI Audit & Roadmap. I'll assess where you're losing time, identify the right first moves, and build you a personalised roadmap.</p>
          <p className='mb-4'> <strong>Want to train your team?</strong> Customisable workshops (half-day or full-day) covering everything from Whats AI? to AI strategy and workflow automation.</p>
          <p className='mb-4'><strong>Ready for long-term support?</strong> The Transformation Journey is a multi-month partnership where your team learns, applies, and builds AI capability with ongoing guidance.</p>
          <p className='mb-4'> <strong>Looking for individual learning?</strong> I'm developing cohort-style courses on these same topics. Join the newsletter to be notified when they launch.</p>
          <p className='mb-4'><strong>Not sure?</strong> Reach out and I'll help you figure out the best starting point.</p>
          </div>
      )
    },
    {
      question: "How much time do I need to commit?",
answer: (
        <div>
          <p className="mb-4"> <strong>AI Audit & Roadmap:</strong> 4-6 weeks from kickoff to delivery (includes interviews and roadmap creation).</p>
          <p className="mb-4"> <strong>Workshops:</strong> Half-day or full-day sessions, scheduled to fit your team's availability.</p>
          <p className="mb-4"> <strong>Transformation Journey:</strong> Multi-month partnership with sessions spread out so your team has time to apply what they learn between sessions.</p>
          <p className="mb-4"> <strong>Cohort courses:</strong> Timing flexible - details shared when they launch.</p>
        </div>
)    },
    {
      question: "What's the investment?",
      answer: (
        <div>
          <p className="mb-4"><strong>AI Audit & Roadmap:</strong> to be determined on a case by case basis. </p>
          <p className='mb-4'><strong>Workshops:</strong> Half-day €1,200 | Full-day €2,200</p>
        <p className='mb-4'><strong>Transformation Journey:</strong> Custom pricing based on scope and timeline - let's chat about your needs.</p>
        <p className='mb-4'><strong>Cohort courses:</strong> Pricing announced when they launch.</p>
         </div>
      )
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
      answer: "I work with SMBs across industries - education, pharmaceuticals, medical, e-commerce, logistics, professional services, and more. My frameworks focus on operational problems (like time thieves and workflow inefficiencies) that show up everywhere, regardless of sector. If you're losing time to repetitive tasks or unclear processes, the methodology applies to you."
    },
    {
      question: "What's the difference between AI Consulting, Workshops, and Cohort Courses?",
      answer: (
        <div>
          <p className="mb-4"><strong>AI Consulting: </strong> One-to-one interviews with your team to identify "Time Thieves" and operational inefficiencies. You get a personalised roadmap with quick wins and clear direction - not a generic report.</p>
          
          <p className="mb-4"><strong>Workshops: </strong> Live, bespoke training for your team. Half-day or full-day sessions, fully customisable to your business needs. Topics include AI strategy, foundational AI training, prompting skills, departmental deep-dives, and more.</p>
          
          <p className='mb-4'><strong>Transformation Journey: </strong> Multi-month partnership using our "Test and Learn" method. Your team applies training between sessions, and we troubleshoot what didn't work together in "Implementation Clinics." The goal: moving from "Using AI" to "Thinking AI-First."</p>

          <p className='mb-4'><strong>Cohort Courses: </strong> (Coming soon) Live group training on specific AI topics. Purchase a ticket to join a scheduled cohort, learn alongside other professionals, and get access to recordings and helpful resources. Join our newsletter to be notified when enrollment opens.</p>
        </div>
      )
    },
    {
      question:"What's the difference between your services?",
      answer: (
        <div> 
          <p className='mb-4'><strong>AI Consulting:</strong> Strategic assessment of where you're losing time, with a personalised roadmap showing where to start and what to avoid.</p>
          <p className='mb-4'> <strong>Workshops:</strong> Half-day or full-day training sessions tailored to your team's specific needs and challenges.</p>
          <p className='mb-4'><strong>Transformation Journey: </strong> Multi-month partnership with ongoing support as your team learns and applies AI in practice.</p>
          <p className='mb-4'><strong>Cohort Courses:</strong> (Coming soon) Live group training on specific AI topics. <em>Join the newsletter for updates.</em></p>
        </div>
      ) },
     {
      question: "What courses do you offer?",
      answer: (
        <div>
          <p className='mb-4'><strong>For business teams: </strong>Bespoke workshops (half-day or full-day) on topics like AI strategy, governance, workflow automation, and Claude Skills & Projects. Sessions are fully interactive and tailored to your team's specific needs. If you have a particular challenge or skill gap, I can build a bespoke session for it. Get in touch to discuss what would work for your team.</p>

          <p className='mb-4'><strong>For individuals: </strong>I'm developing cohort-style courses on the same topics which will be run throughout the year in a bootcamp style format online, covering - AI strategy, content operations, workflow automation, Claude Skills & Projects.These will be live, interactive, and focused on practical application. Join the newsletter to be notified when enrollment opens.</p>
        </div>
      )
    },

    // {
    //   question: "How do I know which option is right for me?",
    //   answer: (
    //     <div>
    //       <p className="mb-2"><strong>Choose Free Tools if:</strong> You're just getting started and want to explore AI on your own.</p>
          
    //       <p className="mb-2"><strong>Choose a Cohort Course if:</strong> You want structured learning on a specific topic alongside other professionals. <em>(Join our newsletter for updates)</em></p>
          
    //       <p className="mb-2"><strong>Choose 1-to-1 Consulting if:</strong> You're a solo business owner who needs personalised guidance.</p>
          
    //       <p><strong>Choose a Workshop if:</strong> You have a team that needs tailored AI training for your specific business processes.</p>
    //     </div>
    //   )
    // }
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