"use client";

import { motion } from 'framer-motion';
import { FiChevronRight, FiSettings, FiZap, FiEdit, FiBarChart } from 'react-icons/fi';

const steps = [
  {
    title: "Setup Your Brand",
    description: "Tell us about your brand, industry, and goals",
    icon: <FiSettings className="text-purple-600" size={28} />
  },
  {
    title: "Generate Strategy",
    description: "Create campaigns from a simple prompt",
    icon: <FiZap className="text-blue-500" size={28} />
  },
  {
    title: "Customize & Enhance",
    description: "Tweak the AI suggestions to perfection",
    icon: <FiEdit className="text-pink-500" size={28} />
  },
  {
    title: "Track & Optimize",
    description: "Monitor performance and refine campaigns",
    icon: <FiBarChart className="text-green-500" size={28} />
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">How Popspotzy Works</h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Transform your marketing in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-xl border border-gray-200 flex items-center justify-center shadow-md z-10">
                {step.icon}
              </div>
              
              <div className="pt-20 pb-10 px-8 bg-white rounded-2xl border border-gray-100 shadow-sm h-full">
                <div className="flex justify-center mb-2">
                  <div className="bg-gray-100 text-gray-800 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">{step.title}</h3>
                <p className="text-gray-600 text-lg text-center">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/3 right-0 transform translate-x-1/2">
                  <FiChevronRight className="text-gray-400" size={36} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}