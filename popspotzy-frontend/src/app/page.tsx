import Navbar from '@/components/ui/Navbar';
import Hero from '@/components/sections/Hero';
import FeaturesSection from '@/components/sections/FeaturesSection';
import HowItWorks from '@/components/sections/HowItWorks';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/ui/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FeaturesSection />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
}