"use client";

import { motion } from 'framer-motion';
import GradientButton from '@/components/ui/GradientButton';

export default function Hero() {
  return (
    <div className="overflow-hidden justify-center items-center flex text-center bg-slate-100 w-full h-5/12 pt-24 md:pb-10">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="opacity-100 transform-none justify-center items-center flex flex-col">
            <h1 className="text-4xl md:text-5xl mb-8 tracking-widest">
              Transform Your Brand Marketing with AI
            </h1>
            
            <p className="text-sm md:text-lg text-gray-400 max-w-3xl mb-14">
              Connect with curated agencies, analyze and grow your brand with bespoke marketing, and create unforgettable experiences that drive real results.
            </p>

            <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-6 justify-center items-center">
              <GradientButton className="text-md px-5 py-2">
                Analyze Your Brand &nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sparkles w-5 h-5"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
              </GradientButton>
              
              <button className="px-5 py-2 border-2 border-slate-200 text-black rounded-4xl font-medium hover:bg-pink-500 hover:text-white cursor-pointer transition-colors text-md">
                Book Demo
              </button>
            </div>
            </div>
          </motion.div>
          
        </div>
  );
}