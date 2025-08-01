"use client";

import { motion } from 'framer-motion';
import GradientButton from '@/components/ui/GradientButton';

export default function Hero() {
  return (
    <div className="relative pt-40 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              <span className="gradient-text block mb-4">AI-Powered</span>
              Marketing Strategies
              <span className="block mt-4">in Seconds</span>
            </h1>
            
            <p className="text-2xl text-gray-600 max-w-xl mb-12">
              Transform a single prompt into complete, industry-aware marketing campaigns with visuals, content calendars, and vendor bookings.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-6">
              <GradientButton className="text-lg px-10 py-5">
                Start Free Trial
              </GradientButton>
              
              <button className="px-10 py-5 border-2 border-purple-600 text-purple-600 rounded-xl font-medium hover:bg-purple-50 transition-colors text-lg">
                See Demo
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" />
            <div className="absolute top-10 -left-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
            <div className="absolute bottom-0 right-10 w-80 h-80 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000" />
            
            <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-dashed border-gray-200 rounded-2xl w-full h-96" />
              <div className="mt-6">
                <h3 className="font-bold text-2xl mb-3">Generated Strategy</h3>
                <p className="text-gray-600 text-lg">
                  &quot;Gen Z Makeup Line in UAE&quot; → Full campaign with visuals, calendar, and vendor suggestions
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}