"use client";

import { motion } from 'framer-motion';

interface GradientButtonProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const GradientButton = ({ children, className = '', disabled = false, onClick }: GradientButtonProps) => {
  return (
    <motion.button
      whileHover={disabled ? {} : { scale: 1.03 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      onClick={onClick}
      disabled={disabled}
      className={`relative px-5 py-3 rounded-4xl font-medium text-white overflow-hidden group ${
        disabled 
          ? 'cursor-not-allowed opacity-50' 
          : 'cursor-pointer'
      } ${className}`}
    >
      <span className={`absolute inset-0 bg-gradient-to-r from-blue-700 via-pink-600 to-purple-600 ${
        disabled ? '' : 'group-hover:from-purple-700 group-hover:to-blue-600'
      } transition-all duration-300`}></span>
      <span className={`absolute right-0 -mt-12 transition-all duration-500 transform translate-x-12 bg-white opacity-10 rotate-12 ${
        disabled ? '' : 'group-hover:-translate-x-40'
      } ease`}></span>
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
    </motion.button>
  );
};

export default GradientButton;