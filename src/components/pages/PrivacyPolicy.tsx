import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
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
              Privacy Policy
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
                AI That Works Ltd ("we", "us", "our") is committed to respecting
                your privacy and protecting your personal data. This Privacy
                Policy outlines how we collect, use, disclose, and safeguard
                your information when you interact with our website and
                services, in accordance with the General Data Protection
                Regulation (EU 2016/679) ("GDPR") and the Data Protection Act
                2018 (Ireland).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Definitions</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  "Personal Data": Any information relating to an identified or
                  identifiable natural person.
                </li>
                <li>
                  "Processing": Any operation performed on personal data,
                  whether automated or not.
                </li>
                <li>
                  "Data Subject" / "User": You, the individual using our
                  services or website.
                </li>
                <li>
                  "Controller": AI That Works Ltd, which determines the purposes
                  and means of processing personal data.
                </li>
                <li>
                  "Processor": A third party that processes data on our behalf.
                </li>
                <li>
                  "Website": www.aithatworks.io and associated subdomains.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Who We Are</h2>
              <p className="text-gray-600">
                AI That Works Ltd
                <br />
                Registered in the Republic of Ireland
                <br />
                Email: katelin@aithatworks.io
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                4. What Personal Data We Collect
              </h2>
              <p className="text-gray-600 mb-4">
                We may collect the following types of personal data:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Full name</li>
                <li>Date of birth</li>
                <li>Job title and industry</li>
                <li>Email address and phone number</li>
                <li>Billing and payment information</li>
                <li>Location data and IP address</li>
                <li>Technical data (browser, device, OS, referral URL)</li>
                <li>Usage data (pages visited, time on site, actions taken)</li>
                <li>Marketing preferences</li>
                <li>Cookie and tracking information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                5. Legal Basis for Processing
              </h2>
              <p className="text-gray-600 mb-4">
                Under Article 6 of the GDPR, we process your personal data on
                the following lawful bases:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Consent – when you opt in to marketing or cookies</li>
                <li>
                  Contract – to fulfil services you have purchased or registered
                  for
                </li>
                <li>
                  Legal obligation – for compliance with tax, financial, or
                  regulatory requirements
                </li>
                <li>
                  Legitimate interests – for security, service improvement, or
                  business analysis, where your rights are not overridden
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                6. How We Use Your Data
              </h2>
              <p className="text-gray-600 mb-4">
                We may use your personal data for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  To provide and manage access to our services and content
                </li>
                <li>To process orders and payments</li>
                <li>To respond to your enquiries and requests</li>
                <li>To send service-related and marketing communications</li>
                <li>To personalise your experience on our website</li>
                <li>To improve website performance and customer experience</li>
                <li>To fulfil legal and regulatory obligations</li>
              </ul>
              <p className="text-gray-600 mt-4">
                We do not sell or rent your personal data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                7. Data Sharing and Third Parties
              </h2>
              <p className="text-gray-600 mb-4">
                We only share data with trusted third-party processors who
                assist us in delivering our services, such as:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Payment processors (e.g. Stripe, PayPal)</li>
                <li>Cloud hosting and CRM providers</li>
                <li>
                  Email and newsletter platforms (e.g. Mailchimp, ConvertKit)
                </li>
                <li>Legal or financial advisors (where legally required)</li>
              </ul>
              <p className="text-gray-600 mt-4">
                All such parties operate under Data Processing Agreements and
                are compliant with GDPR obligations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                8. International Data Transfers
              </h2>
              <p className="text-gray-600 mb-4">
                If your data is transferred outside the European Economic Area
                (EEA), we ensure appropriate safeguards are in place, such as:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  Standard Contractual Clauses approved by the European
                  Commission
                </li>
                <li>Transfers to countries with an EU adequacy decision</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Data Retention</h2>
              <p className="text-gray-600">
                We retain personal data only for as long as necessary for the
                purposes for which it was collected, or as required by law (e.g.
                financial records retained for 6 years). After this period, your
                data will be securely deleted or anonymised.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                10. Your Rights Under the GDPR
              </h2>
              <p className="text-gray-600 mb-4">
                You have the following rights under GDPR:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Access – to request a copy of your personal data</li>
                <li>Rectification – to correct inaccuracies in your data</li>
                <li>
                  Erasure – to request deletion of your data ("right to be
                  forgotten")
                </li>
                <li>Restriction – to limit how your data is processed</li>
                <li>
                  Objection – to processing based on legitimate interests or for
                  marketing
                </li>
                <li>
                  Portability – to receive your data in a structured,
                  machine-readable format
                </li>
                <li>
                  Withdraw consent – at any time, where processing is based on
                  consent
                </li>
              </ul>
              <p className="text-gray-600 mt-4">
                To exercise your rights, email us at: katelin@aithatworks.io.
                You also have the right to lodge a complaint with the Data
                Protection Commission (DPC) in Ireland.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                11. Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-600 mb-4">
                Our website uses cookies to enhance user experience and collect
                analytical data. You can manage your cookie preferences in your
                browser settings or through our cookie consent tool.
              </p>
              <p className="text-gray-600 mb-4">We use:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Essential cookies – for site functionality</li>
                <li>
                  Analytics cookies – to understand how our website is used
                </li>
                <li>
                  Marketing cookies – to deliver relevant content and ads (only
                  if consented)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                12. Security of Your Data
              </h2>
              <p className="text-gray-600 mb-4">
                We take appropriate technical and organisational measures to
                protect your data against unauthorised access, alteration, or
                loss, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>SSL encryption</li>
                <li>Firewalls and secure servers</li>
                <li>Access controls and staff training</li>
                <li>Regular data backups and audits</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                13. Business Transfers
              </h2>
              <p className="text-gray-600">
                If AI That Works Ltd undergoes a merger, acquisition, or asset
                sale, your personal data may be transferred to a successor
                entity. You will be notified and given options if such changes
                occur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                14. Changes to This Policy
              </h2>
              <p className="text-gray-600">
                We may update this policy from time to time in line with legal
                or operational changes. Updates will be posted on this page with
                a revised "Effective Date". Your continued use of our website
                after any changes indicates your agreement to the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">15. Contact Us</h2>
              <p className="text-gray-600">
                If you have questions about this policy or your data rights,
                contact:
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

export default PrivacyPolicy;
