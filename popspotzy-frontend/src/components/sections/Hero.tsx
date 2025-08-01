"use client";

import { motion } from 'framer-motion';
import GradientButton from '@/components/ui/GradientButton';
import { FiBarChart, FiUsers, FiTarget, FiMapPin } from 'react-icons/fi';
import FeatureCard from '@/components/ui/FeatureCard';

export default function Hero() {
  const features = [
      {
        title: "Brand Analysis",
        description: "AI-powered insights into your brand identity, audience, and market positioning",
        icon: <FiTarget size={28} />
      },
      {
        title: "Agency Marketplace",
        description: "Connect with vetted experiential agencies that match your brand and budget",
        icon: <FiUsers size={28} />
      },
      {
        title: "Campaign Management",
        description: "Plan, execute, and monitor your campaigns from one centralized dashboard",
        icon: <FiBarChart size={28} />
      },
      {
        title: "Location Intelligence",
        description: "AI-driven location recommendations for maximum impact and engagement",
        icon: <FiMapPin size={28} />
      }
    ];
    
  return (
    <div className="overflow-hidden justify-center items-center flex flex-col text-center bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 w-full pt-24">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="opacity-100 transform-none justify-center items-center flex flex-col md:pb-10">
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


          <section id="features" className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 px-10">
                <div className="max-w-full mx-auto ">
                  {/* <div className="text-center mb-20">
                    <h2 className="text-5xl font-bold mb-6">Powerful Features</h2>
                    <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
                      Everything you need to create, execute, and track marketing campaigns
                    </p>
                  </div> */}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 font-light">
                    {features.map((feature, index) => (
                      <FeatureCard 
                        key={feature.title}
                        title={feature.title}
                        description={feature.description}
                        icon={feature.icon}
                        delay={index * 0.1}
                      />
                    ))}
                  </div>
                </div>
              </section>
          
        </div>
  );
}