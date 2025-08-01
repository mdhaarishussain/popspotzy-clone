import FeatureCard from '../ui/FeatureCard';
import { FiZap, FiUser, FiMail, FiImage, FiShoppingBag, FiBarChart, FiUsers, FiCreditCard, FiTarget, FiMapPin } from 'react-icons/fi';

export default function FeaturesSection() {
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
    <section id="features" className="bg-slate-100 px-10">
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
  );
}