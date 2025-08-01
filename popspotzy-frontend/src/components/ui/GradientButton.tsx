"use client";

import { motion } from 'framer-motion';

interface GradientButtonProps {
  children: React.ReactNode;
  className?: string;
}

const GradientButton = ({ children, className = '' }: GradientButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`relative px-5 py-3 rounded-4xl cursor-pointer font-medium text-white overflow-hidden group ${className}`}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-blue-700 via-pink-600 to-purple-600 group-hover:from-purple-700 group-hover:to-blue-600 transition-all duration-300"></span>
      <span className="absolute right-0 -mt-12 transition-all duration-500 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
    </motion.button>
  );
};

export default GradientButton;