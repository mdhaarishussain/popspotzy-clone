import { clerkMiddleware } from '@clerk/nextjs/server'

export default clerkMiddleware(
  {
    afterAuth(auth, req) {
      // Handle signed-in users
      if (auth.userId) {
        // Check onboarding status
        const onboardingComplete = auth.sessionClaims?.publicMetadata?.onboardingComplete === true;
        
        const url = new URL(req.nextUrl.origin);
        url.pathname = onboardingComplete ? '/dashboard' : '/dashboard/gettingstarted';
        return Response.redirect(url);
      }
      
      // Handle non-signed-in users
      const signInUrl = new URL('/sign-in', req.url);
      return Response.redirect(signInUrl);
    }
  },
  {
    publicRoutes: ['/', '/sign-in(.*)']
  }
)

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}