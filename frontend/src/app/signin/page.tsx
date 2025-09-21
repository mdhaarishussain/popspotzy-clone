'use client';
import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import GradientButton from '@/components/ui/GradientButton';
import { signIn } from '@/lib/supabase';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { signInWithGoogle } from '@/lib/supabase';


function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const { user } = useAuth();

  // Redirect if already signed in
  React.useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user, router]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return; // Prevent double submission
    
    setLoading(true);
    setError('');

    try {
      const { data, error } = await signIn(email, password);
      
      if (error) {
        setError(error.message);
      } else if (data.user) {
        // Successful sign in - redirect will be handled by useEffect above
        router.push('/dashboard');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  }, [email, password, loading, router]);

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword(prev => !prev);
  }, []);

  // Don't render if user is already signed in
  if (user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to your PopSpotzy account</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
              placeholder="Enter your email"
              required
              autoComplete="email"
              disabled={loading}
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                disabled={loading}
                placeholder="Enter your password"
                required
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>
          </div>
          
          <GradientButton 
  className="w-full py-3 text-center" 
  disabled={loading}
>
  {loading ? 'Signing In...' : 'Sign In'}
</GradientButton>

{/* Divider */}
<div className="flex items-center my-6">
  <div className="flex-grow border-t border-gray-300"></div>
  <span className="mx-4 text-gray-500 text-sm">or</span>
  <div className="flex-grow border-t border-gray-300"></div>
</div>

{/* Google OAuth Button */}
<button
  type="button"
  onClick={() => signInWithGoogle()}
  className="w-full flex items-center justify-center gap-2 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors"
>
  {/* Google Logo SVG */}
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20" height="20">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.2 3.6l6.85-6.85C36.13 2.42 30.55 0 24 0 14.62 0 6.44 5.64 2.48 13.79l7.98 6.19C12.19 14.53 17.62 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.1 24.5c0-1.67-.15-3.29-.42-4.85H24v9.19h12.5c-.54 2.89-2.14 5.34-4.55 6.99l7.02 5.46c4.11-3.78 6.13-9.35 6.13-15.79z"/>
    <path fill="#FBBC05" d="M10.46 28.38a14.49 14.49 0 0 1-.76-4.38c0-1.52.27-2.99.76-4.38l-7.98-6.19A23.952 23.952 0 0 0 0 24c0 3.91.94 7.61 2.48 10.9l7.98-6.19z"/>
    <path fill="#34A853" d="M24 48c6.55 0 12.13-2.16 16.17-5.86l-7.02-5.46c-1.96 1.33-4.44 2.12-7.15 2.12-6.38 0-11.81-5.03-13.54-11.9l-7.98 6.19C6.44 42.36 14.62 48 24 48z"/>
  </svg>
  Continue with Google
</button>

<div className="text-center mt-4">
  <p className="text-gray-600">
    Don't have an account?{' '}
    <Link href="/signup" className="text-purple-600 hover:text-purple-700 font-medium">
      Sign up
    </Link>
  </p>
</div>

        </form>
      </div>
    </div>
  );
}

export default Signin;
