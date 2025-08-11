export type CategoryNode = { id: string; name: string; children?: CategoryNode[] }

const categories: CategoryNode[] = [
  {
    id: 'finance',
    name: 'Finance & Investing',
    children: [
      { id: 'personal_finance', name: 'Personal Finance' },
      { id: 'fpna', name: 'FP&A' },
      { id: 'equity', name: 'Equity Analysis' },
      { id: 'crypto', name: 'Crypto' }
    ]
  },
  {
    id: 'business',
    name: 'Business & Strategy',
    children: [
      { id: 'entrepreneurship', name: 'Entrepreneurship' },
      { id: 'pricing', name: 'Pricing' },
      { id: 'negotiation', name: 'Negotiation' },
      { id: 'project_mgmt', name: 'Project Management' }
    ]
  },
  {
    id: 'marketing',
    name: 'Marketing & Growth',
    children: [
      { id: 'seo', name: 'SEO' },
      { id: 'content', name: 'Content' },
      { id: 'social', name: 'Social Media' }
    ]
  },
  {
    id: 'product',
    name: 'Product & Design',
    children: [
      { id: 'product_management', name: 'Product Management' },
      { id: 'ux', name: 'UX/UI' },
      { id: 'design_systems', name: 'Design Systems' }
    ]
  },
  {
    id: 'engineering',
    name: 'Engineering & Data',
    children: [
      { id: 'web_dev', name: 'Web Dev' },
      { id: 'cloud', name: 'Cloud' },
      { id: 'ai_ml', name: 'AI/ML' }
    ]
  }
]

export default categories
