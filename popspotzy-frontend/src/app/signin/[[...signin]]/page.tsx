'use client';
import React from 'react';
import { Box } from '@mui/material';
import { SignIn, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

function Signin() {
  const router = useRouter();
  const { isSignedIn, user } = useUser();

  // Determine redirect URL based on onboarding status
  const getRedirectUrl = () => {
    if (isSignedIn) {
      // Check if onboarding is complete (using Clerk's publicMetadata)
      const onboardingComplete = user?.publicMetadata?.onboardingComplete === true;
      
      return onboardingComplete 
        ? '/dashboard' 
        : '/dashboard/gettingstarted';
    }
    // Default redirect if not signed in
    return '/dashboard/gettingstarted';
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{ textAlign: 'center' }}
      className="w-screen h-screen"
    >
      <SignIn 
        fallbackRedirectUrl={getRedirectUrl()}
        afterSignInUrl={getRedirectUrl()}
        afterSignUpUrl={'/dashboard/gettingstarted'}
      />
    </Box>
  );
}

export default Signin;