"use client";

import { motion } from 'framer-motion';

export default function FeatureCard({
  title,
  description,
  icon,
  delay = 0
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-pink-500 shadow-sm hover:shadow-lg transition-all duration-300 h-full"
    >
      <div className="w-16 h-16 rounded-xl bg-pink-100 text-pink-400 flex items-center justify-center mb-5 scale-80">
        {icon}
      </div>
      <h3 className="text-xl text-black font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
  );
}