import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import Features from './components/Features';
import Ways from './components/Ways';
import ConsultancyBanner from './components/ConsultancyBanner';
// import WhyAISection from './components/WhyAISection';
import Founder from './components/Founder';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import Comingsoon from './components/pages/Comingsoon';
// import Community from './components/pages/Community';
// import Goodiebag from './components/pages/Goodiebag';
import Workshops from './components/pages/Workshops';
import Speaking from './components/pages/Speaking';
import Contact from './components/pages/Contact';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import TermsCondition from './components/pages/TermsCondition';
import CookiePolicy from './components/pages/CookiePolicy';
// import GenAIKickstart from './components/pages/GenAIKickstart';
import FreeTools from './components/pages/FreeTools';
import FreeToolsAccess from './components/pages/FreeToolsAccess';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [pathname]);

  return null;
};

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    // Add a small delay to ensure the DOM is fully loaded
    const timeout = setTimeout(() => {
      if (location.state?.scrollToNewsletter) {
        const newsletterSection = document.getElementById('newsletter');
        if (newsletterSection) {
          const navHeight = 80; // Height of the fixed navbar
          const sectionTop = newsletterSection.offsetTop - navHeight;
          window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
          });
        }
      }
      if (location.state?.scrollToAbout) {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          const navHeight = 80; // Height of the fixed navbar
          const sectionTop = aboutSection.offsetTop - navHeight;
          window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
          });
        }
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [location]);

  return null;
};

const HomePage = () => (
  <>
    <Hero />
    
    <ConsultancyBanner />
    <Ways />
    {/* <WhyAISection /> */}
    <Features />
    <Founder />
    <FAQ />
    <Newsletter />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#faf9ff]">
        <ScrollToTop />
        <ScrollToSection />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/free-tools" element={<FreeTools />} /> 
             <Route path="/free-tools-access" element={<FreeToolsAccess />} /> 
            {/* <Route path="/gen-ai-kickstart" element={<GenAIKickstart />} /> */}
            {/* <Route path="/community" element={<Community />} /> */}
            {/* <Route path="/goodie-bag" element={<Goodiebag />} /> */}
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/speaking" element={<Speaking />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsCondition />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;