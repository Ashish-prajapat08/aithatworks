import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star } from 'lucide-react';

const gpts = [
  {
    title: 'Business Analyst GPT',
    description: 'Your AI-powered business analysis and strategy consultant',
    price: 299,
    rating: 5,
    reviews: 128
  },
  {
    title: 'Marketing Expert GPT',
    description: 'Generate high-converting marketing campaigns and content',
    price: 249,
    rating: 5,
    reviews: 96
  },
  {
    title: 'Code Assistant GPT',
    description: 'Advanced coding help and technical documentation',
    price: 199,
    rating: 5,
    reviews: 156
  }
];

const CustomGPTs = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#faf9ff] border-t-2 border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            READY-TO-USE CUSTOM GPTS
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Specialized AI models designed for specific business needs
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {gpts.map((gpt, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
            >
              <h3 className="text-2xl font-semibold text-gray-900">{gpt.title}</h3>
              <p className="mt-2 text-gray-600">{gpt.description}</p>
              
              <div className="mt-4 flex items-center">
                {[...Array(gpt.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                ))}
                <span className="ml-2 text-gray-600">({gpt.reviews} reviews)</span>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">${gpt.price}</span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors flex items-center"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Purchase
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomGPTs;