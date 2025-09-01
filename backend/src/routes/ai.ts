import express from 'express';
import { AIService } from '../services/aiService';

const router = express.Router();

router.post('/chat', async (req, res) => {
  try {
    const { message, context } = req.body;
    
    const response = await AIService.chatResponse(message, context);
    
    res.json({ response });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get AI response' });
  }
});

export default router;
