"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/contexts/AuthContext';
import ClientOnly from './ClientOnly';

export default function Navbar() {
  const { user, loading, signOut } = useAuth();

  return (
    <div className="max-w-7xl mx-auto flex justify-between items-center py-3">
      <div className="flex items-center space-x-2">
        <Link href="/"><Image src="/logo.png" alt="Popspotzy Logo" width={120} height={20} /></Link>
      </div>
      
      <div className="hidden md:flex space-x-10">
        <ClientOnly
          fallback={
            <>
              {['Features', 'How It Works', 'Pricing'].map((item) => (
                <Link 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-600 hover:text-black hover:font-semibold transition-colors text-sm"
                >
                  {item}
                </Link>
              ))}
            </>
          }
        >
          {!user ? (
            <>
              {['Features', 'How It Works', 'Pricing'].map((item) => (
                <Link 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-600 hover:text-black hover:font-semibold transition-colors text-sm"
                >
                  {item}
                </Link>
              ))}
            </>
          ) : (
            <>
              <Link 
                href="/dashboard"
                className="text-gray-600 hover:text-black hover:font-semibold transition-colors text-sm"
              >
                Dashboard
              </Link>
              <Link 
                href="/dashboard/gettingstarted"
                className="text-gray-600 hover:text-black hover:font-semibold transition-colors text-sm"
              >
                Getting Started
              </Link>
            </>
          )}
        </ClientOnly>
      </div>
      
      <div className="flex space-x-5 items-center">
        <ClientOnly
          fallback={
            <>
              <Link href="/signin">
                <button className="px-4 py-1.5 text-gray-600 hover:text-black transition-colors text-sm">
                  Sign In
                </button>
              </Link>
              <Link href="/signup">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-1.5 bg-gradient-to-r cursor-pointer from-pink-600 to-blue-500 text-white rounded-4xl font-medium shadow-md hover:shadow-lg transition-shadow text-sm"
                >
                  Get Started
                </motion.button>
              </Link>
            </>
          }
        >
          {loading ? (
            <div className="w-8 h-8 animate-pulse bg-gray-200 rounded-full"></div>
          ) : user ? (
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Welcome, {user.user_metadata?.full_name || user.email}
              </span>
              <button
                onClick={signOut}
                className="px-4 py-1.5 text-gray-600 hover:text-black transition-colors text-sm"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <>
              <Link href="/signin">
                <button className="px-4 py-1.5 text-gray-600 hover:text-black transition-colors text-sm">
                  Sign In
                </button>
              </Link>
              <Link href="/signup">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-1.5 bg-gradient-to-r cursor-pointer from-pink-600 to-blue-500 text-white rounded-4xl font-medium shadow-md hover:shadow-lg transition-shadow text-sm"
                >
                  Get Started
                </motion.button>
              </Link>
            </>
          )}
        </ClientOnly>
      </div>
    </div>
  );
}