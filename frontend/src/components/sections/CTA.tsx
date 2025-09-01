"use client";

import { motion } from 'framer-motion';
import GradientButton from '../ui/GradientButton';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-10 right-10 w-72 h-72 md:bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <motion.h1 
            className="text-4xl md:text-5xl mb-6 gradient-text tracking-widest"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Ready to Revolutionize Your Marketing?
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-lg text-gray-500 mb-10 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Join thousands of brands using Popspotzy to create stunning campaigns in seconds
          </motion.p>
          
          <motion.div 
            className="flex justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link href="/signup">
              <GradientButton className="text-lg px-18 py-3 shadow-lg transform hover:scale-105 transition-all duration-300">
                Start Free Trial
              </GradientButton>
            </Link>
          </motion.div>
          
          <motion.p 
            className=" text-gray-600 text-sm -mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            No credit card required. Cancel anytime.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}