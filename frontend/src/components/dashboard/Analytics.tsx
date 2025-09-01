'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { motion } from 'framer-motion';

const engagementData = [
  { name: 'Mon', value: 4.2 },
  { name: 'Tue', value: 4.8 },
  { name: 'Wed', value: 5.1 },
  { name: 'Thu', value: 4.9 },
  { name: 'Fri', value: 5.3 },
  { name: 'Sat', value: 5.8 },
  { name: 'Sun', value: 6.1 }
];

const roiData = [
  { name: 'Week 1', roi: 2.3 },
  { name: 'Week 2', roi: 2.7 },
  { name: 'Week 3', roi: 3.1 },
  { name: 'Week 4', roi: 3.4 }
];

const platformData = [
  { name: 'Facebook', value: 35, color: '#3b82f6' },
  { name: 'Instagram', value: 28, color: '#ec4899' },
  { name: 'Twitter', value: 20, color: '#06b6d4' },
  { name: 'LinkedIn', value: 17, color: '#8b5cf6' }
];

export default function Analytics() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl p-6 shadow-lg"
    >
      <h3 className="text-2xl font-bold mb-6">Campaign Analytics</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-xl">
          <h4 className="text-lg font-semibold mb-4">Engagement Rate</h4>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={engagementData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#8b5cf6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-gray-50 p-4 rounded-xl">
          <h4 className="text-lg font-semibold mb-4">ROI Trends</h4>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={roiData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="roi" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-gray-50 p-4 rounded-xl">
          <h4 className="text-lg font-semibold mb-4">Platform Distribution</h4>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={platformData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {platformData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-gray-50 p-4 rounded-xl">
          <h4 className="text-lg font-semibold mb-4">Key Metrics</h4>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Total Reach</span>
              <span className="font-bold">125,430</span>
            </div>
            <div className="flex justify-between">
              <span>Conversion Rate</span>
              <span className="font-bold">3.2%</span>
            </div>
            <div className="flex justify-between">
              <span>Cost per Click</span>
              <span className="font-bold">$1.24</span>
            </div>
            <div className="flex justify-between">
              <span>Budget Used</span>
              <span className="font-bold">68%</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
