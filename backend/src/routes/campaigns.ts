import express from 'express';
import { supabase } from '../config/supabase';
import { AIService } from '../services/aiService';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { userId, campaignData } = req.body;
    
    const suggestions = await AIService.generateSuggestions(campaignData);
    
    const { data, error } = await supabase
      .from('campaigns')
      .insert({
        user_id: userId,
        budget: campaignData.budget,
        industry: campaignData.industry,
        goals: campaignData.goals,
        social_platforms: campaignData.socialPlatforms,
        target_audience: campaignData.targetAudience,
        company_name: campaignData.companyName,
        suggestions,
        created_at: new Date().toISOString()
      })
      .select()
      .single();

    if (error) throw error;

    res.json({ campaign: data, suggestions });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create campaign' });
  }
});

router.get('/user/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    
    const { data, error } = await supabase
      .from('campaigns')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) throw error;

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch campaigns' });
  }
});

export default router;
