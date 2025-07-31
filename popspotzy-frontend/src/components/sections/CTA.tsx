"use client";

import { motion } from 'framer-motion';
import GradientButton from '../ui/GradientButton';

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl font-bold mb-8">Ready to Revolutionize Your Marketing?</h2>
          <p className="text-2xl text-gray-700 mb-12">
            Join thousands of brands using Popspotzy to create stunning campaigns in seconds
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-8">
            <GradientButton className="text-xl px-14 py-6">
              Start Free Trial
            </GradientButton>
            <button className="px-14 py-6 border-2 border-purple-600 text-purple-600 rounded-xl font-medium hover:bg-purple-50 transition-colors text-xl">
              Schedule a Demo
            </button>
          </div>
          
          <p className="mt-12 text-gray-600 text-lg">
            No credit card required. Cancel anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}