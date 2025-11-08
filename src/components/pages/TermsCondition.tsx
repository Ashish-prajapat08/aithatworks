import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsCondition = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#faf9ff] to-white pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Back Navigation */}
          <Link
            to="/"
            className="inline-flex items-center text-gray-600 hover:text-[#3843d0] mb-8 transition-colors group"
          >
            <ArrowLeft className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
 
          {/* Header */}
          <div className="mb-12 space-y-2">
            <h1 className="text-4xl font-black text-gray-900 mb-4">Terms & Conditions</h1>
            <p className="text-gray-600">Effective Date: 2/4/2025</p>
            <p className="text-gray-600">Company Name: AI That Works Limited</p>
            <p className="text-gray-600">Registered in: Republic of Ireland</p>
            <p className="text-gray-600">Company Registration Number: 786111</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-gray-600">
                Welcome to AI That Works, a training platform offering practical, beginner-friendly courses and resources focused on the
                use of artificial intelligence. By accessing or using our services, you agree to be bound by the following Terms of Service
                ("Terms"), which govern your use of our website, content, and any related services provided through
                www.aithatworks.io and its subdomains.
              </p>
              <p className="text-gray-600 mt-4">
                If you do not agree to these Terms, you must not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Definitions</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>"Company", "we", "our", "us" – Refers to AI That Works Limited, registered in the Republic of Ireland.</li>
                <li>"User", "you", "your" – Any individual or entity accessing or using our Services.</li>
                <li>"Services" – Online courses, tutorials, training resources, downloads, and related support or consultation.</li>
                <li>"Website" – http://www.aithatworks.io and any subdomains.</li>
                <li>"Account" – A user profile required to access or purchase Services.</li>
                <li>"Content" – All materials including text, videos, audio, documents, images, code, and other media.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Age Restrictions</h2>
              <p className="text-gray-600">
                Use of our Services is only permitted for individuals aged 18 or older, or under supervision of a parent or legal guardian. By
                registering an account, you confirm that you meet this requirement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Services We Provide</h2>
              <p className="text-gray-600">AI That Works provides:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Online and in-person training on AI tools and concepts</li>
                <li>Pre-recorded tutorials and downloadable guides</li>
                <li>Live sessions, webinars, and consultancy</li>
                <li>Subscription-based or one-time purchase models for access</li>
              </ul>
              <p className="text-gray-600 mt-4">
                We reserve the right to modify or discontinue Services at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. User Responsibilities</h2>
              <p className="text-gray-600">By using our Services, you agree to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Use our platform for lawful purposes only</li>
                <li>Not redistribute, resell, or publicly share our content without written consent</li>
                <li>Keep your account details secure and not share login access</li>
                <li>Pay all applicable fees and taxes related to your subscription or purchase</li>
                <li>Refrain from engaging in abusive or disruptive conduct on the platform</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Intellectual Property</h2>
              <p className="text-gray-600">
                All content on our Website and platform is the intellectual property of AI That Works or its licensors, protected under EU
                copyright and trademark laws.
              </p>
              <p className="text-gray-600 mt-4">
                You may not copy, reproduce, or distribute any materials without our express written permission except as permitted under
                limited exceptions (e.g., fair use).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Subscriptions and Payments</h2>
              <p className="text-gray-600">You may access Services through:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Monthly or annual subscriptions</li>
                <li>One-off course purchases</li>
                <li>Bundled services or corporate training packages</li>
              </ul>
              <p className="text-gray-600 mt-4">
                By subscribing, you agree to automatic billing at the frequency agreed. You can cancel your subscription at any time;
                cancellation will take effect at the end of the current billing cycle. No refunds will be issued for partial use unless required
                by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Cancellation and Refund Policy</h2>
              <p className="text-gray-600">
                As a consumer under EU law, you have the right to cancel your purchase within 14 days of entering the contract (cooling-
                off period), unless:
              </p>
              <p className="text-gray-600 mt-4">
                You requested immediate access to digital content and acknowledged the waiver of your right to withdraw.
              </p>
              <p className="text-gray-600 mt-4">
                To cancel, email us at contactus@aithatworks.io with your name, order details, and reason (optional). Refunds (if
                applicable) will be processed within 14 days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Termination</h2>
              <p className="text-gray-600">
                We reserve the right to suspend or terminate your account and access to Services, without refund, if you breach these
                Terms or misuse the platform. You may also terminate your account at any time by contacting us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Third-Party Services</h2>
              <p className="text-gray-600">
                We may use or link to third-party services (e.g., payment processors, video hosting platforms). We are not responsible for
                the privacy or performance of these services. Use is subject to their own terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Privacy and Data Protection</h2>
              <p className="text-gray-600">
                Our collection and use of your personal data is governed by our <Link to="/privacy" className="text-[#3843d0] hover:underline">Privacy Policy</Link>. We comply with the General Data
                Protection Regulation (EU 2016/679) and the Data Protection Act 2018 (Ireland).
              </p>
              <p className="text-gray-600 mt-4">
                You have the right to access, rectify, or delete your data at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">12. Limitation of Liability</h2>
              <p className="text-gray-600">
                To the extent permitted by applicable law, AI That Works Ltd shall not be liable for:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Losses arising from use or inability to use our Services</li>
                <li>Indirect or consequential damages</li>
                <li>Errors, interruptions, or bugs in the content or platform</li>
              </ul>
              <p className="text-gray-600 mt-4">
                Our total liability shall not exceed the amount paid by you in the past 12 months.
              </p>
              <p className="text-gray-600 mt-4">
                Nothing in these Terms limits your rights under Irish consumer law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">13. Availability and Downtime</h2>
              <p className="text-gray-600">
                We aim to provide continuous access to our platform, but we cannot guarantee uninterrupted or error-free service. We
                reserve the right to suspend access temporarily for maintenance or upgrades.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">14. Communications and Contact</h2>
              <p className="text-gray-600">
                We may send you communications related to your use of the Services, including legal updates, billing notices, and technical
                support.
              </p>
              <p className="text-gray-600 mt-4">
                For questions, cancellations, or support, contact:<br />
                AI That Works Ltd<br />
                📧 contactus@aithatworks.io
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">15. Changes to These Terms</h2>
              <p className="text-gray-600">
                We may update these Terms to reflect legal, regulatory, or business changes. The latest version will always be available on
                our Website. Continued use of our Services after any updates constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">16. Governing Law and Jurisdiction</h2>
              <p className="text-gray-600">
                These Terms are governed by and construed in accordance with the laws of Ireland. You and AI That Works agree to
                submit to the exclusive jurisdiction of the Irish courts.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsCondition;