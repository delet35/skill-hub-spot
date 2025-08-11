import type { Listing, Seller, MessageThread } from '@/types';

export const sellers: Seller[] = [
  {
    id: 's1',
    displayName: 'Avi Cohen',
    avatarUrl: 'https://i.pravatar.cc/150?img=12',
    memberSince: '2021-05-01',
  },
  {
    id: 's2',
    displayName: 'Noa Levi',
    avatarUrl: 'https://i.pravatar.cc/150?img=25',
    memberSince: '2022-02-15',
  },
];

export const listings: Listing[] = [
  {
    id: 'l1',
    title: '1:1 Coaching: Break into Product Management with a 90-day plan',
    price: 99,
    currency: 'USD',
    categoryId: 'product',
    subcategoryId: 'product_management',
    format: 'coaching',
    deliveryMethod: 'video_call',
    level: 'intermediate',
    languages: ['en', 'he'],
    tags: ['career', 'roadmap', 'interview'],
    coverImages: ['https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop'],
    shortDesc: 'Personalized coaching to transition into PM roles.',
    longDesc: 'Get a tailored 90-day plan, resume review, and interview prep. Weekly calls + async feedback. Includes templates and a workbook.',
    rating: 4.8,
    sales: 214,
    sellerId: 's1',
    status: 'active',
    boosted: true,
    createdAt: '2024-10-10',
    updatedAt: '2025-01-15',
  },
  {
    id: 'l2',
    title: 'Ultimate SEO Audit Template (with step-by-step checklist)',
    price: 29,
    currency: 'USD',
    categoryId: 'marketing',
    subcategoryId: 'seo',
    format: 'template',
    deliveryMethod: 'download',
    level: 'beginner',
    languages: ['en'],
    tags: ['seo', 'template', 'audit'],
    coverImages: ['https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop'],
    shortDesc: 'Battle-tested SEO audit template for fast wins.',
    longDesc: 'Includes rubrics, quick wins, and client-ready doc. Bonus: Loom walkthrough.',
    rating: 4.6,
    sales: 513,
    sellerId: 's2',
    status: 'active',
    boosted: false,
    createdAt: '2024-11-20',
    updatedAt: '2025-02-02',
  },
  {
    id: 'l3',
    title: 'Excel for FP&A — from zero to hero (video course)',
    price: 0,
    currency: 'USD',
    categoryId: 'finance',
    subcategoryId: 'fpna',
    format: 'course',
    deliveryMethod: 'link',
    level: 'beginner',
    languages: ['en'],
    tags: ['excel', 'fp&a', 'finance'],
    coverImages: ['https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop'],
    shortDesc: 'Start with the fundamentals and build real FP&A models.',
    longDesc: 'Free starter course covering functions, pivot tables, and scenario modeling. Includes downloadable files.',
    rating: 4.4,
    sales: 1200,
    sellerId: 's1',
    status: 'active',
    boosted: false,
    createdAt: '2024-09-01',
    updatedAt: '2025-01-01',
  },
];

export const messageThreads: MessageThread[] = [
  {
    id: 't1',
    listingId: 'l1',
    buyerId: 'u1',
    sellerId: 's1',
    unread: true,
    messages: [
      {
        id: 'm1',
        threadId: 't1',
        fromUserId: 'u1',
        sentAt: new Date().toISOString(),
        text: 'Hi! Is this coaching suitable for people with non-tech background?'
      }
    ]
  }
];
