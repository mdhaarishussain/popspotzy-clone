'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiDollarSign, FiStar } from 'react-icons/fi';

interface Agency {
  id: number;
  name: string;
  cost: string;
  location: string;
  specialties: string[];
}

interface AgenciesProps {
  budget?: string;
  industry?: string;
}

export default function Agencies({ budget, industry }: AgenciesProps) {
  const [agencies, setAgencies] = useState<Agency[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAgencies();
  }, [budget, industry]);

  const fetchAgencies = async () => {
    try {
      const params = new URLSearchParams();
      if (budget) params.append('budget', budget.split('-')[0].replace(/[^0-9]/g, ''));
      if (industry) params.append('industry', industry);

      const response = await fetch(`/api/agencies?${params}`);
      const data = await response.json();
      setAgencies(data);
    } catch (error) {
      // Fallback to mock data
      setAgencies([
        { id: 1, name: 'Digital Growth Co', cost: '$5,000-$15,000', location: 'New York', specialties: ['Social Media', 'PPC'] },
        { id: 2, name: 'Creative Marketing Hub', cost: '$3,000-$10,000', location: 'California', specialties: ['Content', 'Branding'] },
        { id: 3, name: 'Performance Plus', cost: '$8,000-$25,000', location: 'Texas', specialties: ['Analytics', 'SEO'] }
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-2xl font-bold mb-6">Recommended Agencies</h3>
        <div className="space-y-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="animate-pulse bg-gray-200 h-24 rounded-lg"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl p-6 shadow-lg"
    >
      <h3 className="text-2xl font-bold mb-6">Recommended Agencies</h3>
      
      <div className="space-y-4">
        {agencies.map((agency, index) => (
          <motion.div
            key={agency.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-3">
              <h4 className="text-lg font-semibold">{agency.name}</h4>
              <div className="flex items-center space-x-1 text-yellow-500">
                <FiStar size={16} />
                <span className="text-sm text-gray-600">4.8</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
              <div className="flex items-center space-x-1">
                <FiDollarSign size={14} />
                <span>{agency.cost}</span>
              </div>
              <div className="flex items-center space-x-1">
                <FiMapPin size={14} />
                <span>{agency.location}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-3">
              {agency.specialties.map(specialty => (
                <span
                  key={specialty}
                  className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
                >
                  {specialty}
                </span>
              ))}
            </div>
            
            <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Contact Agency
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
