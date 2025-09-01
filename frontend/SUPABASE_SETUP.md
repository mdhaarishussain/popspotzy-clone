# Supabase Setup Instructions

## Frontend Environment Variables

You need to create a `.env.local` file in the `popspotzy-frontend` directory with your Supabase credentials.

### Step 1: Get your Supabase credentials

1. Go to your Supabase project dashboard
2. Navigate to **Settings** → **API**
3. Copy the following values:
   - **Project URL** (starts with `https://`)
   - **anon public** key (the public/anon key, NOT the service_role key)

### Step 2: Create .env.local file

Create a file called `.env.local` in the `popspotzy-frontend` directory:

```env
# Frontend Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.your-anon-key...
```

**Important:** 
- Use the **anon/public** key for the frontend (NOT the service_role key)
- The service_role key should only be used in the backend
- Make sure the URLs match exactly (no trailing slashes)

### Step 3: Restart your development server

After creating the `.env.local` file, restart your Next.js development server:

```bash
npm run dev
```

## Features Now Available

✅ **Sign Up**: Creates new users with email confirmation
✅ **Sign In**: Authenticates existing users  
✅ **Dashboard**: Protected route that requires authentication
✅ **Navigation**: Shows different options based on auth state
✅ **Sign Out**: Properly logs out users

## Authentication Flow

1. **New users**: Sign up → Email confirmation → Sign in → Dashboard
2. **Existing users**: Sign in → Dashboard
3. **Protected routes**: Automatically redirect to sign-in if not authenticated
4. **Navigation**: Shows welcome message and sign-out when logged in

The authentication system is now fully integrated with your Supabase backend!

