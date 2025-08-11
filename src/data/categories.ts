export type CategoryNode = { id: string; name: string; children?: CategoryNode[] }

const categories: CategoryNode[] = [
  {
    id: 'finance',
    name: 'Finance & Investing',
    children: [
      { id: 'personal_finance', name: 'Personal Finance' },
      { id: 'budgeting', name: 'Budgeting' },
      { id: 'accounting', name: 'Accounting' },
      { id: 'auditing', name: 'Auditing' },
      { id: 'tax', name: 'Tax' },
      { id: 'ifrs_gaap', name: 'IFRS/GAAP' },
      { id: 'valuation', name: 'Valuation' },
      { id: 'fpna', name: 'FP&A' },
      { id: 'financial_modeling', name: 'Financial Modeling' },
      { id: 'equity', name: 'Equity Analysis' },
      { id: 'bonds', name: 'Bonds' },
      { id: 'derivatives', name: 'Derivatives' },
      { id: 'crypto', name: 'Crypto' },
      { id: 'portfolio', name: 'Portfolio Strategy' },
    ]
  },
  {
    id: 'business',
    name: 'Business & Strategy',
    children: [
      { id: 'entrepreneurship', name: 'Entrepreneurship' },
      { id: 'strategy', name: 'Strategy' },
      { id: 'unit_economics', name: 'Unit Economics' },
      { id: 'pricing', name: 'Pricing' },
      { id: 'negotiation', name: 'Negotiation' },
      { id: 'operations', name: 'Operations' },
      { id: 'procurement', name: 'Procurement' },
      { id: 'supply_chain', name: 'Supply Chain' },
      { id: 'project_mgmt', name: 'Project Management' },
      { id: 'okrs', name: 'OKRs' },
      { id: 'risk', name: 'Risk' },
      { id: 'governance', name: 'Governance' },
    ]
  },
  {
    id: 'marketing',
    name: 'Marketing & Growth',
    children: [
      { id: 'digital_marketing', name: 'Digital Marketing' },
      { id: 'seo', name: 'SEO' },
      { id: 'sem', name: 'SEM' },
      { id: 'analytics', name: 'Analytics' },
      { id: 'content', name: 'Content' },
      { id: 'social', name: 'Social' },
      { id: 'email', name: 'Email' },
      { id: 'brand', name: 'Brand' },
      { id: 'pr', name: 'PR' },
      { id: 'cro', name: 'CRO' },
      { id: 'community', name: 'Community' },
      { id: 'influencer', name: 'Influencer' },
    ]
  },
  {
    id: 'sales_cs',
    name: 'Sales & CS',
    children: [
      { id: 'b2b_sales', name: 'B2B Sales' },
      { id: 'sdr', name: 'SDR' },
      { id: 'playbooks', name: 'Playbooks' },
      { id: 'objections', name: 'Objections' },
      { id: 'account_mgmt', name: 'Account Management' },
      { id: 'renewals', name: 'Renewals' },
      { id: 'cs_ops', name: 'CS Ops' },
    ]
  },
  {
    id: 'product',
    name: 'Product & Design',
    children: [
      { id: 'product_management', name: 'Product Management' },
      { id: 'discovery', name: 'Discovery' },
      { id: 'roadmaps', name: 'Roadmaps' },
      { id: 'ux', name: 'UX' },
      { id: 'ui', name: 'UI' },
      { id: 'prototyping', name: 'Prototyping' },
      { id: 'design_systems', name: 'Design Systems' },
      { id: 'accessibility', name: 'Accessibility' },
    ]
  },
  {
    id: 'engineering',
    name: 'Engineering & Data',
    children: [
      { id: 'web_dev', name: 'Web Dev' },
      { id: 'mobile', name: 'Mobile' },
      { id: 'devops', name: 'DevOps' },
      { id: 'cloud', name: 'Cloud' },
      { id: 'security', name: 'Security' },
      { id: 'data_analysis', name: 'Data Analysis' },
      { id: 'sql', name: 'SQL' },
      { id: 'nosql', name: 'NoSQL' },
      { id: 'power_bi', name: 'Power BI' },
      { id: 'excel_expert', name: 'Excel Expert' },
      { id: 'python', name: 'Python' },
      { id: 'r_lang', name: 'R' },
      { id: 'ai_ml', name: 'AI/ML' },
      { id: 'prompt_engineering', name: 'Prompt Engineering' },
      { id: 'llm_apps', name: 'LLM Apps' },
      { id: 'mlops', name: 'MLOps' },
    ]
  },
  {
    id: 'education',
    name: 'Education & Languages',
    children: [
      { id: 'tutoring', name: 'Tutoring' },
      { id: 'test_prep', name: 'Test Prep' },
      { id: 'english', name: 'English' },
      { id: 'hebrew', name: 'Hebrew' },
      { id: 'arabic', name: 'Arabic' },
      { id: 'spanish', name: 'Spanish' },
      { id: 'french', name: 'French' },
      { id: 'german', name: 'German' },
      { id: 'mandarin', name: 'Mandarin' },
      { id: 'language_exchange', name: 'Language Exchange' },
    ]
  },
  {
    id: 'health',
    name: 'Health & Wellness',
    children: [
      { id: 'training_plans', name: 'Training Plans' },
      { id: 'running', name: 'Running' },
      { id: 'strength', name: 'Strength' },
      { id: 'nutrition', name: 'Nutrition' },
      { id: 'yoga', name: 'Yoga' },
      { id: 'meditation', name: 'Meditation' },
      { id: 'sleep', name: 'Sleep' },
      { id: 'mental_health', name: 'Mental Health Coaching' },
    ]
  },
  {
    id: 'cooking',
    name: 'Cooking & Food',
    children: [
      { id: 'recipes', name: 'Recipes' },
      { id: 'meal_prep', name: 'Meal Prep' },
      { id: 'vegan', name: 'Vegan' },
      { id: 'baking', name: 'Baking' },
      { id: 'pastry', name: 'Pastry' },
      { id: 'bbq', name: 'BBQ' },
      { id: 'coffee', name: 'Coffee' },
      { id: 'wine', name: 'Wine' },
      { id: 'food_photography', name: 'Food Photography' },
    ]
  },
  {
    id: 'photo_video',
    name: 'Photography & Video',
    children: [
      { id: 'camera_basics', name: 'Camera Basics' },
      { id: 'composition', name: 'Composition' },
      { id: 'editing', name: 'Editing' },
      { id: 'color_grading', name: 'Color Grading' },
      { id: 'lightroom', name: 'Lightroom' },
      { id: 'photoshop', name: 'Photoshop' },
      { id: 'video_editing', name: 'Video Editing' },
      { id: 'drone', name: 'Drone' },
      { id: 'locations', name: 'Locations & Vantage Points' },
    ]
  },
  {
    id: 'travel',
    name: 'Travel & Places',
    children: [
      { id: 'hidden_gems', name: 'Hidden Gems' },
      { id: 'scenic', name: 'Scenic Viewpoints' },
      { id: 'urban_walks', name: 'Urban Walks' },
      { id: 'hikes', name: 'Hikes' },
      { id: 'trip_plans', name: 'Trip Plans' },
      { id: 'photowalks', name: 'Photowalks' },
    ]
  },
  {
    id: 'arts',
    name: 'Arts & Crafts',
    children: [
      { id: 'drawing', name: 'Drawing' },
      { id: 'painting', name: 'Painting' },
      { id: 'music', name: 'Music' },
      { id: 'instruments', name: 'Instruments' },
      { id: 'printing3d', name: '3D Printing' },
      { id: 'diy', name: 'DIY' },
      { id: 'woodworking', name: 'Woodworking' },
    ]
  },
  {
    id: 'home_garden_auto',
    name: 'Home, Garden & Auto',
    children: [
      { id: 'home_improvement', name: 'Home Improvement' },
      { id: 'smart_home', name: 'Smart Home' },
      { id: 'gardening', name: 'Gardening' },
      { id: 'car_care', name: 'Car Care' },
      { id: 'motorcycle', name: 'Motorcycle Care' },
    ]
  },
  {
    id: 'legal',
    name: 'Legal & Compliance (education only)',
    children: [
      { id: 'contracts', name: 'Contracts' },
      { id: 'privacy', name: 'Privacy' },
      { id: 'compliance', name: 'Compliance Programs' },
      { id: 'labor', name: 'Labor Basics' },
    ]
  },
  {
    id: 'career_life',
    name: 'Career & Life',
    children: [
      { id: 'resume', name: 'Resume' },
      { id: 'interview', name: 'Interview Prep' },
      { id: 'public_speaking', name: 'Public Speaking' },
      { id: 'productivity', name: 'Productivity' },
      { id: 'notion_obsidian', name: 'Notion/Obsidian' },
      { id: 'time_mgmt', name: 'Time Management' },
      { id: 'parenting', name: 'Parenting' },
      { id: 'relationships', name: 'Relationships' },
    ]
  },
  {
    id: 'real_estate',
    name: 'Real Estate',
    children: [
      { id: 'buy_sell', name: 'Buy/Sell' },
      { id: 'rentals', name: 'Rentals' },
      { id: 'analysis', name: 'Analysis' },
      { id: 'property_mgmt', name: 'Property Management' },
      { id: 'short_term', name: 'Short-term Rentals' },
    ]
  },
  {
    id: 'nonprofit',
    name: 'Nonprofit & Public',
    children: [
      { id: 'fundraising', name: 'Fundraising' },
      { id: 'grant_writing', name: 'Grant Writing' },
      { id: 'program_design', name: 'Program Design' },
      { id: 'policy', name: 'Policy' },
    ]
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    children: [
      { id: 'shopify', name: 'Shopify' },
      { id: 'etsy', name: 'Etsy' },
      { id: 'amazon_fba', name: 'Amazon FBA' },
      { id: 'marketplace_ops', name: 'Marketplace Ops' },
      { id: 'product_sourcing', name: 'Product Sourcing' },
    ]
  },
  {
    id: 'gaming',
    name: 'Gaming & Streaming',
    children: [
      { id: 'game_coaching', name: 'Game Coaching' },
      { id: 'esports', name: 'eSports' },
      { id: 'streaming_setup', name: 'Streaming Setup' },
      { id: 'content_growth', name: 'Content Growth' },
      { id: 'monetization', name: 'Monetization' },
    ]
  },
]

export default categories
