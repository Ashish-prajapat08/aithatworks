import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatusMessage(""); // Reset message on form submit

    const data = {
      firstName,
      lastName,
      email,
      message,
    };

    try {
      const res = await fetch(
        "https://hook.eu2.make.com/v7jmnnmkm1whn2d1xssptuf6vt2rqsxy",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      if (res.ok) {
        setStatusMessage("Your message has been sent successfully!");
        setIsSuccess(true);
        // Clear form fields on success
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
      } else {
        setStatusMessage(
          "Failed to send your message. Please try again later.",
        );
        setIsSuccess(false);
      }
    } catch (err) {
      console.error("Submit error:", err);
      setStatusMessage("An error occurred. Please try again.");
      setIsSuccess(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#faf9ff] to-white pt-32 pb-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-l from-pink-500/20 to-indigo-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Back Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center text-gray-600 hover:text-[#3843d0] transition-colors group"
          >
            <ArrowLeft className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="inline-flex items-center justify-center p-3 bg-[#3843d0]/10 rounded-2xl mb-8">
              <Mail className="h-8 w-8 text-[#3843d0]" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8">
              {/* text-3xl font-black text-black sm:text-4xl md:text-5xl font-heading */}
              GET IN TOUCH
            </h1>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Email</h2>
                <p className="text-xl text-gray-600">
                  For Bookings and enquiries:{" "}
                  <a
                    href="mailto:katelin@aithatworks.io"
                    className="text-[#3843d0] hover:underline"
                  >
                    katelin@aithatworks.io
                  </a>
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Hours of operation
                </h2>
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-[#3843d0] mt-1" />
                  <p className="text-xl text-gray-600">
                    Monday - Friday
                    <br />
                    9:00 A.M. to 5:00 P.M.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  What happens next?
                </h2>
                <ol className="space-y-4 text-xl text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-4 font-bold">1.</span>
                    We'll review your message within 24 hours
                  </li>
                  <li className="flex items-start">
                    <span className="mr-4 font-bold">2.</span>
                    We'll reach out to schedule a brief call to understand your
                    needs
                  </li>
                  <li className="flex items-start">
                    <span className="mr-4 font-bold">3.</span>
                    We'll provide a tailored proposal for your consideration
                  </li>
                </ol>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-xl border-2 border-black"
          >
            <h2 className="text-3xl font-black text-gray-900 mb-8">
              SEND US A MESSAGE
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {/* First Name */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#3843d0] focus:ring-2 focus:ring-[#3843d0]/20 outline-none transition-colors"
                    required
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#3843d0] focus:ring-2 focus:ring-[#3843d0]/20 outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#3843d0] focus:ring-2 focus:ring-[#3843d0]/20 outline-none transition-colors"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#3843d0] focus:ring-2 focus:ring-[#3843d0]/20 outline-none transition-colors resize-none"
                  required
                />
              </div>

              {/* Status Message */}
              <div className="text-center">
                {statusMessage && (
                  <p
                    className={`mt-4 px-4 py-2 rounded-lg text-white ${
                      isSuccess ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {statusMessage}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-[#3843d0] text-white px-6 py-4 rounded-lg font-semibold hover:bg-[#2d35a8] transition-colors flex items-center justify-center group border-2 border-black"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
