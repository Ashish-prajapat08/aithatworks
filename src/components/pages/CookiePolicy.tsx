import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CookiePolicy = () => {
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
          <div className="mb-12">
            <h1 className="text-4xl font-black text-gray-900 mb-4">
              Cookie Policy
            </h1>
            <p className="text-gray-600">Effective Date: 2/4/2025</p>
            <p className="text-gray-600">Company: AI That Works Ltd</p>
            <p className="text-gray-600">Registered in: Republic of Ireland</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-gray-600">
                This Cookie Policy explains how AI That Works Ltd ("we", "us",
                "our") uses cookies and similar tracking technologies on our
                website [http://www.aithatworks.io] and any related subdomains.
                It outlines what these technologies are, why we use them, and
                how you can control them.
              </p>
              <p className="text-gray-600 mt-4">
                This policy should be read in conjunction with our{" "}
                <Link to="/privacy" className="text-[#3843d0] hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. What Are Cookies?</h2>
              <p className="text-gray-600">
                Cookies are small text files placed on your device (computer,
                smartphone, tablet) when you visit a website. They help us
                provide a better user experience by remembering your
                preferences, gathering analytical data, and enabling key website
                functions.
              </p>
              <p className="text-gray-600 mt-4">Cookies can be:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>First-party – set by our website</li>
                <li>
                  Third-party – set by external providers (e.g. Google
                  Analytics, YouTube)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                3. Types of Cookies We Use
              </h2>
              <p className="text-gray-600">
                We use the following categories of cookies on our site:
              </p>

              <h3 className="text-xl font-bold mt-6 mb-2">Essential Cookies</h3>
              <p className="text-gray-600 mb-2">
                These cookies are necessary for the basic functionality of the
                website and cannot be switched off. They include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Session management</li>
                <li>Security and fraud prevention</li>
                <li>Access to secure areas</li>
              </ul>
              <p className="text-gray-600 mt-2">
                Example: sessionid, csrftoken
              </p>

              <h3 className="text-xl font-bold mt-6 mb-2">
                Performance & Analytics Cookies
              </h3>
              <p className="text-gray-600 mb-2">
                These help us understand how visitors interact with our site
                (e.g. pages visited, time on site, bounce rates) so we can
                improve performance.
              </p>
              <p className="text-gray-600">Examples:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Google Analytics (_ga, _gid)</li>
                <li>Hotjar or similar tools (if used)</li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-2">
                Functionality Cookies
              </h3>
              <p className="text-gray-600">
                These remember your preferences and choices to enhance your user
                experience, such as language selection or remembering login
                details.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-2">
                Marketing & Advertising Cookies
              </h3>
              <p className="text-gray-600 mb-2">
                Used (only with your consent) to deliver personalised content,
                track ad performance, and build a profile of your interests.
              </p>
              <p className="text-gray-600">Examples:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Meta Pixel (_fbp)</li>
                <li>Google Ads (IDE, ANID)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. How We Use Cookies</h2>
              <p className="text-gray-600">
                We use cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>To maintain website functionality and user sessions</li>
                <li>To remember user preferences</li>
                <li>To analyse site usage and improve performance</li>
                <li>To deliver relevant marketing, with your consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                5. Managing Your Cookie Preferences
              </h2>
              <p className="text-gray-600 mb-4">
                When you first visit our website, you will see a cookie banner
                that allows you to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Accept all cookies</li>
                <li>Reject non-essential cookies</li>
                <li>Manage your preferences by category</li>
              </ul>
              <p className="text-gray-600 mt-4">
                You can update your preferences at any time via the cookie
                settings on our website.
              </p>
              <p className="text-gray-600 mt-4">
                You may also manage cookies directly through your browser
                settings:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Chrome</li>
                <li>Firefox</li>
                <li>Safari</li>
                <li>Edge</li>
              </ul>
              <p className="text-gray-600 mt-4">
                Please note: blocking essential cookies may affect website
                performance or prevent certain features from working.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                6. Third-Party Cookies
              </h2>
              <p className="text-gray-600 mb-4">
                We may use third-party services that place cookies on your
                device to deliver services or enhance functionality. These
                include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Google Analytics</li>
                <li>Meta / Facebook Ads</li>
                <li>YouTube (embedded videos)</li>
                <li>Beehiiv (email signups)</li>
              </ul>
              <p className="text-gray-600 mt-4">
                Each third party is responsible for its own cookies and privacy
                practices. We encourage you to review their privacy policies for
                more information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Data Transfers</h2>
              <p className="text-gray-600">
                Some cookies may involve processing of personal data outside the
                EEA. In such cases, we ensure appropriate safeguards are in
                place under the GDPR, such as Standard Contractual Clauses
                (SCCs) or data transfer agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                8. Updates to This Policy
              </h2>
              <p className="text-gray-600">
                We may update this Cookie Policy from time to time to reflect
                changes in the law or our cookie usage. Any changes will be
                published on this page with an updated "Effective Date."
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
              <p className="text-gray-600">
                For questions about our use of cookies or how we process
                personal data:
                <br />
                AI That Works Ltd
                <br />
                📧 katelin@aithatworks.io
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CookiePolicy;
