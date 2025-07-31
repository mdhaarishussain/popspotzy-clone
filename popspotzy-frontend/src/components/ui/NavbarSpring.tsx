"use client";

import { useSpring, animated } from '@react-spring/web';
import Link from 'next/link';

export default function NavbarSpring() {
  const navAnimation = useSpring({
    from: { transform: 'translateY(-100px)' },
    to: { transform: 'translateY(0px)' },
    config: { tension: 200, friction: 25 }
  });

  return (
    <animated.nav 
      style={navAnimation}
      className="fixed w-full bg-white bg-opacity-90 backdrop-blur-sm z-50 py-4 px-6 border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-purple-600">
          PopSpotzy
        </Link>
        
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-600 hover:text-purple-600 transition-colors">
            Home
          </Link>
          <Link href="/features" className="text-gray-600 hover:text-purple-600 transition-colors">
            Features
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-purple-600 transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-purple-600 transition-colors">
            Contact
          </Link>
        </div>

        <div className="flex space-x-4">
          <Link href="/login" className="text-gray-600 hover:text-purple-600 transition-colors">
            Login
          </Link>
          <Link 
            href="/signup" 
            className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </animated.nav>
  );
}
