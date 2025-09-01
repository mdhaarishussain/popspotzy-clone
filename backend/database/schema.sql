-- Create campaigns table
CREATE TABLE campaigns (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT NOT NULL,
  budget TEXT NOT NULL,
  industry TEXT NOT NULL,
  goals TEXT[] NOT NULL,
  social_platforms TEXT[] NOT NULL,
  target_audience TEXT NOT NULL,
  company_name TEXT NOT NULL,
  suggestions TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create analytics table for mock data
CREATE TABLE analytics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  campaign_id UUID REFERENCES campaigns(id) ON DELETE CASCADE,
  metric_name TEXT NOT NULL,
  metric_value NUMERIC NOT NULL,
  date DATE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create chat_history table
CREATE TABLE chat_history (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT NOT NULL,
  message TEXT NOT NULL,
  response TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert sample analytics data
INSERT INTO analytics (campaign_id, metric_name, metric_value, date) VALUES
  (NULL, 'engagement_rate', 4.2, CURRENT_DATE - INTERVAL '7 days'),
  (NULL, 'engagement_rate', 4.8, CURRENT_DATE - INTERVAL '6 days'),
  (NULL, 'engagement_rate', 5.1, CURRENT_DATE - INTERVAL '5 days'),
  (NULL, 'roi', 2.3, CURRENT_DATE - INTERVAL '7 days'),
  (NULL, 'roi', 2.7, CURRENT_DATE - INTERVAL '6 days'),
  (NULL, 'roi', 3.1, CURRENT_DATE - INTERVAL '5 days');
