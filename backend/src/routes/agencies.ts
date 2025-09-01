import express from 'express';

const router = express.Router();

const mockAgencies = [
  { id: 1, name: 'Digital Growth Co', cost: '$5,000-$15,000', location: 'New York', specialties: ['Social Media', 'PPC'] },
  { id: 2, name: 'Creative Marketing Hub', cost: '$3,000-$10,000', location: 'California', specialties: ['Content', 'Branding'] },
  { id: 3, name: 'Performance Plus', cost: '$8,000-$25,000', location: 'Texas', specialties: ['Analytics', 'SEO'] },
  { id: 4, name: 'Brand Builders', cost: '$2,000-$8,000', location: 'Florida', specialties: ['Design', 'Strategy'] }
];

router.get('/', async (req, res) => {
  try {
    const { budget, industry } = req.query;
    
    let filteredAgencies = mockAgencies;
    
    if (budget) {
      const budgetNum = parseInt(budget as string);
      filteredAgencies = mockAgencies.filter(agency => {
        const minCost = parseInt(agency.cost.split('-')[0].replace(/[^0-9]/g, ''));
        return minCost <= budgetNum;
      });
    }
    
    res.json(filteredAgencies);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch agencies' });
  }
});

export default router;
