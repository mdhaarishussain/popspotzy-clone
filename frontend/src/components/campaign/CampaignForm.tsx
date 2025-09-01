'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import GradientButton from '../ui/GradientButton';

interface CampaignFormProps {
  onSubmit: (data: CampaignData) => void;
  loading?: boolean;
}

export interface CampaignData {
  budget: string;
  industry: string;
  goals: string[];
  socialPlatforms: string[];
  targetAudience: string;
  companyName: string;
}

const budgetOptions = ['$1,000-$5,000', '$5,000-$15,000', '$15,000-$50,000', '$50,000+'];
const industryOptions = ['Technology', 'Healthcare', 'Finance', 'Retail', 'Education', 'Other'];
const goalOptions = ['Brand Awareness', 'Lead Generation', 'Sales', 'Engagement', 'Traffic'];
const platformOptions = ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'TikTok', 'YouTube'];

export default function CampaignForm({ onSubmit, loading }: CampaignFormProps) {
  const [formData, setFormData] = useState<CampaignData>({
    budget: '',
    industry: '',
    goals: [],
    socialPlatforms: [],
    targetAudience: '',
    companyName: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const toggleArrayField = (field: 'goals' | 'socialPlatforms', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-lg"
    >
      <h2 className="text-3xl font-bold text-center mb-8">Create Your Campaign</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Company Name</label>
          <input
            type="text"
            value={formData.companyName}
            onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Budget Range</label>
          <select
            value={formData.budget}
            onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
            required
          >
            <option value="">Select budget</option>
            {budgetOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Industry</label>
          <select
            value={formData.industry}
            onChange={(e) => setFormData(prev => ({ ...prev, industry: e.target.value }))}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
            required
          >
            <option value="">Select industry</option>
            {industryOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Marketing Goals</label>
          <div className="grid grid-cols-2 gap-2">
            {goalOptions.map(goal => (
              <label key={goal} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.goals.includes(goal)}
                  onChange={() => toggleArrayField('goals', goal)}
                  className="rounded"
                />
                <span className="text-sm">{goal}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Social Media Platforms</label>
          <div className="grid grid-cols-2 gap-2">
            {platformOptions.map(platform => (
              <label key={platform} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.socialPlatforms.includes(platform)}
                  onChange={() => toggleArrayField('socialPlatforms', platform)}
                  className="rounded"
                />
                <span className="text-sm">{platform}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Target Audience</label>
          <textarea
            value={formData.targetAudience}
            onChange={(e) => setFormData(prev => ({ ...prev, targetAudience: e.target.value }))}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
            rows={3}
            placeholder="Describe your target audience..."
            required
          />
        </div>

        <GradientButton className="w-full" disabled={loading}>
          {loading ? 'Creating Campaign...' : 'Create Campaign'}
        </GradientButton>
      </form>
    </motion.div>
  );
}
