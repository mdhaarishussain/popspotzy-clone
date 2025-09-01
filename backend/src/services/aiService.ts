import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

export interface CampaignData {
  budget: string;
  industry: string;
  goals: string[];
  socialPlatforms: string[];
  targetAudience: string;
  companyName: string;
}

export class AIService {
  static async generateSuggestions(campaignData: CampaignData): Promise<string[]> {
    const prompt = `Generate 5 specific marketing suggestions for a ${campaignData.industry} company with a ${campaignData.budget} budget. Goals: ${campaignData.goals.join(', ')}. Platforms: ${campaignData.socialPlatforms.join(', ')}. Target: ${campaignData.targetAudience}. Return as JSON array of strings.`;

    const completion = await groq.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'llama3-8b-8192',
      temperature: 0.7,
      max_tokens: 1000
    });

    try {
      return JSON.parse(completion.choices[0]?.message?.content || '[]');
    } catch {
      return [
        `Focus on ${campaignData.socialPlatforms[0]} advertising with ${campaignData.budget} budget`,
        `Target ${campaignData.targetAudience} with engaging content`,
        `Implement ${campaignData.goals[0]} strategy across platforms`
      ];
    }
  }

  static async chatResponse(message: string, context: any): Promise<string> {
    const prompt = `As a marketing advisor, respond to: "${message}". Context: ${JSON.stringify(context)}`;

    const completion = await groq.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'llama3-8b-8192',
      temperature: 0.7,
      max_tokens: 500
    });

    return completion.choices[0]?.message?.content || 'I can help you with your marketing strategy. What would you like to know?';
  }
}
