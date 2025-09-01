# PopSpotzy - AI-Driven Marketing Advisor

PopSpotzy is a comprehensive AI-powered marketing strategy platform that helps brands create, execute, and optimize marketing campaigns through intelligent automation and data-driven insights.

## 🚀 Features

- **AI-Powered Campaign Creation**: Generate personalized marketing strategies using advanced AI
- **Interactive Dashboard**: Comprehensive view of campaign performance and metrics
- **Real-time Analytics**: Visual charts and graphs for campaign tracking
- **Agency Matching**: Connect with vetted marketing agencies based on your requirements
- **AI Chat Assistant**: Get instant marketing advice and strategy recommendations
- **Multi-platform Support**: Manage campaigns across Facebook, Instagram, Twitter, LinkedIn, and more

## 🏗️ Architecture

### Frontend (Next.js 15)
- **Framework**: Next.js with TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Clerk
- **Animations**: Framer Motion
- **Charts**: Recharts
- **State Management**: Zustand

### Backend (Node.js/Express)
- **Framework**: Express.js with TypeScript
- **Database**: Supabase (PostgreSQL)
- **AI Integration**: Groq API
- **Security**: Helmet, CORS, Rate Limiting

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account
- Clerk account
- Groq API key

### Backend Setup

1. Navigate to backend directory:
```bash
cd popspotzy-backend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Configure environment variables in `.env`:
```env
PORT=3001
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
GROQ_API_KEY=your_groq_api_key
NODE_ENV=development
```

5. Set up database schema:
```bash
# Run the SQL commands in database/schema.sql in your Supabase SQL editor
```

6. Start development server:
```bash
npm run dev
```

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd popspotzy-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.local.example .env.local
```

4. Configure environment variables in `.env.local`:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/signin
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/signup
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
BACKEND_URL=http://localhost:3001
```

5. Start development server:
```bash
npm run dev
```

## 🔧 Configuration

### Supabase Setup

1. Create a new Supabase project
2. Run the SQL schema from `popspotzy-backend/database/schema.sql`
3. Get your project URL and API keys from the Supabase dashboard

### Clerk Setup

1. Create a Clerk application
2. Configure sign-in/sign-up pages
3. Get your publishable and secret keys

### Groq API Setup

1. Sign up for Groq API access
2. Get your API key from the dashboard

## 📊 Database Schema

### Campaigns Table
- `id`: UUID (Primary Key)
- `user_id`: Text (Clerk User ID)
- `budget`: Text
- `industry`: Text
- `goals`: Text Array
- `social_platforms`: Text Array
- `target_audience`: Text
- `company_name`: Text
- `suggestions`: Text Array
- `created_at`: Timestamp
- `updated_at`: Timestamp

### Analytics Table
- `id`: UUID (Primary Key)
- `campaign_id`: UUID (Foreign Key)
- `metric_name`: Text
- `metric_value`: Numeric
- `date`: Date
- `created_at`: Timestamp

### Chat History Table
- `id`: UUID (Primary Key)
- `user_id`: Text
- `message`: Text
- `response`: Text
- `created_at`: Timestamp

## 🎯 Usage

1. **Sign Up/Sign In**: Create an account or sign in using Clerk authentication
2. **Create Campaign**: Click "Add Campaign" and fill out the form with your business details
3. **View Dashboard**: See AI-generated suggestions, analytics, and recommended agencies
4. **Chat with AI**: Use the chat feature for additional marketing insights
5. **Connect with Agencies**: Browse and contact recommended marketing agencies

## 🚀 Deployment

### Backend Deployment
1. Build the project: `npm run build`
2. Deploy to your preferred platform (Railway, Render, etc.)
3. Set environment variables in your deployment platform

### Frontend Deployment
1. Build the project: `npm run build`
2. Deploy to Vercel, Netlify, or your preferred platform
3. Set environment variables in your deployment platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support, email support@popspotzy.com or create an issue in the GitHub repository.

## 🔮 Roadmap

- [ ] Advanced analytics with custom date ranges
- [ ] Integration with social media APIs
- [ ] Campaign automation features
- [ ] Team collaboration tools
- [ ] Advanced AI model fine-tuning
- [ ] Mobile app development
