'use client'
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { FiPlus, FiTarget, FiDollarSign, FiUsers } from "react-icons/fi";
import CampaignForm, { CampaignData } from "@/components/campaign/CampaignForm";
import Analytics from "@/components/dashboard/Analytics";
import AIChat from "@/components/dashboard/AIChat";
import Agencies from "@/components/dashboard/Agencies";
import GradientButton from "@/components/ui/GradientButton";

interface Campaign {
  id: string;
  budget: string;
  industry: string;
  goals: string[];
  social_platforms: string[];
  target_audience: string;
  company_name: string;
  suggestions: string[];
}

function Dashboard() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [showCampaignForm, setShowCampaignForm] = useState(false);
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [activeCampaign, setActiveCampaign] = useState<Campaign | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/signin');
      return;
    }
    
    if (user) {
      fetchCampaigns();
    }
  }, [user, authLoading, router]);

  const fetchCampaigns = async () => {
    if (!user) return;
    
    try {
      const response = await fetch(`/api/campaigns/user/${user.id}`);
      const data = await response.json();
      setCampaigns(data);
      if (data.length > 0) {
        setActiveCampaign(data[0]);
      }
    } catch (error) {
      console.error('Failed to fetch campaigns:', error);
    }
  };

  const handleCreateCampaign = async (campaignData: CampaignData) => {
    setLoading(true);
    try {
      const response = await fetch('/api/campaigns', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user?.id,
          campaignData
        })
      });

      const data = await response.json();
      setCampaigns(prev => [data.campaign, ...prev]);
      setActiveCampaign(data.campaign);
      setShowCampaignForm(false);
    } catch (error) {
      console.error('Failed to create campaign:', error);
    } finally {
      setLoading(false);
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect to signin
  }

  return (
    <div className="min-h-screen bg-gray-50">
          {/* Header */}
          <div className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-6 py-4">
              <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-900">Marketing Dashboard</h1>
                <GradientButton onClick={() => setShowCampaignForm(true)}>
                  <FiPlus className="mr-2" />
                  Add Campaign
                </GradientButton>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 py-8">
            {showCampaignForm ? (
              <div className="mb-8">
                <CampaignForm onSubmit={handleCreateCampaign} loading={loading} />
                <div className="text-center mt-4">
                  <button
                    onClick={() => setShowCampaignForm(false)}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : activeCampaign ? (
              <>
                {/* Campaign Info Bar */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl p-6 shadow-lg mb-8"
                >
                  <h2 className="text-2xl font-bold mb-4">{activeCampaign.company_name} Campaign</h2>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="flex items-center space-x-3">
                      <FiDollarSign className="text-green-600" size={24} />
                      <div>
                        <p className="text-sm text-gray-600">Budget</p>
                        <p className="font-semibold">{activeCampaign.budget}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FiTarget className="text-blue-600" size={24} />
                      <div>
                        <p className="text-sm text-gray-600">Industry</p>
                        <p className="font-semibold">{activeCampaign.industry}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FiUsers className="text-purple-600" size={24} />
                      <div>
                        <p className="text-sm text-gray-600">Platforms</p>
                        <p className="font-semibold">{activeCampaign.social_platforms.join(', ')}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">G</span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Goals</p>
                        <p className="font-semibold">{activeCampaign.goals.join(', ')}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left Column - Suggestions & Analytics */}
                  <div className="lg:col-span-2 space-y-8">
                    {/* AI Suggestions */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white rounded-2xl p-6 shadow-lg"
                    >
                      <h3 className="text-2xl font-bold mb-6">AI Marketing Suggestions</h3>
                      <div className="space-y-4">
                        {activeCampaign.suggestions.map((suggestion, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border-l-4 border-purple-500"
                          >
                            <p className="text-gray-800">{suggestion}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Analytics */}
                    <Analytics />
                  </div>

                  {/* Right Column - Agencies & Chat */}
                  <div className="space-y-8">
                    <Agencies budget={activeCampaign.budget} industry={activeCampaign.industry} />
                    <AIChat campaignContext={activeCampaign} />
                  </div>
                </div>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to PopSpotzy!</h2>
                <p className="text-xl text-gray-600 mb-8">Create your first marketing campaign to get started</p>
                <GradientButton onClick={() => setShowCampaignForm(true)}>
                  <FiPlus className="mr-2" />
                  Create Your First Campaign
                </GradientButton>
              </motion.div>
            )}
          </div>
    </div>
  );
}

export default Dashboard;
