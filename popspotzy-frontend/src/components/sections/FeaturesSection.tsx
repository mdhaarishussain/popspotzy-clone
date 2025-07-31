import FeatureCard from '../ui/FeatureCard';
import { FiZap, FiUser, FiMail, FiImage, FiShoppingBag, FiBarChart, FiUsers, FiCreditCard } from 'react-icons/fi';

export default function FeaturesSection() {
  const features = [
    {
      title: "Prompt-Based Generator",
      description: "Generate complete strategies from a single AI prompt",
      icon: <FiZap size={28} />
    },
    {
      title: "Brand Profile Setup",
      description: "Optimize AI with your brand details and goals",
      icon: <FiUser size={28} />
    },
    {
      title: "Lead Generation",
      description: "Create clickbait emails and collect subscriber data",
      icon: <FiMail size={28} />
    },
    {
      title: "Content Toolkit",
      description: "Generate captions, hashtags, and visual mockups",
      icon: <FiImage size={28} />
    },
    {
      title: "Vendor Marketplace",
      description: "Book pop-ups, roadshows, and activations",
      icon: <FiShoppingBag size={28} />
    },
    {
      title: "Campaign Dashboard",
      description: "Track KPIs and manage all campaigns",
      icon: <FiBarChart size={28} />
    },
    {
      title: "Role-Based Access",
      description: "Separate dashboards for brands, vendors, and teams",
      icon: <FiUsers size={28} />
    },
    {
      title: "Credit System",
      description: "Buy credits for AI features and bookings",
      icon: <FiCreditCard size={28} />
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">Powerful Features</h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to create, execute, and track marketing campaigns
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
  );
}