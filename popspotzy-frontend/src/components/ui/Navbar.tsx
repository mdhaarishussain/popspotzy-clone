"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white bg-opacity-95 backdrop-blur-md z-50 py-5 px-6 border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg" />
          <span className="text-2xl font-bold">Popspotzy</span>
        </div>
        
        <div className="hidden md:flex space-x-10">
          {['Features', 'How It Works', 'Pricing'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-gray-600 hover:text-purple-600 transition-colors text-lg"
            >
              {item}
            </Link>
          ))}
        </div>
        
        <div className="flex space-x-5">
          <button className="px-6 py-2.5 text-gray-600 font-medium text-lg">Sign In</button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-shadow text-lg"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}