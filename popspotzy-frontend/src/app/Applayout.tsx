"use client";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';


export default function AppLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith('/dashboard');
  const isLogin = pathname.startsWith('/signin');
  const isSignup = pathname.startsWith('/signup');

  if (isDashboard || isLogin || isSignup) {
    return (
      <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
          {children}
      </ClerkProvider>
    );
  }
  else{
    return(
      <body>{children}</body>
    )
  }
}
