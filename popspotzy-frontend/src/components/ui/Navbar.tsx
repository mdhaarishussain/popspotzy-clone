"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3">
        <div className=" flex items-center space-x-2">
          <Link href="/"><Image src="/logo.png" alt="Popspotzy Logo" width={120} height={20} /></Link>
        </div>
        
        <div className="hidden md:flex space-x-10">
          {['Features', 'How It Works', 'Pricing'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-gray-600 hover:text-black hover:font-semibold transition-colors text-sm"
            >
              {item}
            </Link>
          ))}
        </div>
        
        <div className="flex space-x-5">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-1.5 bg-gradient-to-r cursor-pointer from-pink-600 to-blue-500 text-white rounded-4xl font-medium shadow-md hover:shadow-lg transition-shadow text-sm"
          >
            Get Started
          </motion.button>
        </div>
      </div>
  );
}