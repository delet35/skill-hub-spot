export type Currency = 'USD' | 'EUR' | 'ILS' | 'GBP';
export type ListingFormat = 'Coaching_1on1' | 'Guide_PDF' | 'Template_Asset' | 'Live_Workshop' | 'Video_Course';
export type DeliveryMethod = 'Download' | 'Video_Call' | 'Chat' | 'External_Link';
export type Level = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Seller {
  id: string;
  displayName: string;
  avatarUrl?: string;
  memberSince: string; // ISO
}

export interface Listing {
  id: string;
  title: string;
  price: number;           // 0 = Free
  currency: Currency;
  categoryId: string;
  subcategoryId?: string;
  format: ListingFormat;
  deliveryMethod: DeliveryMethod;
  level: Level;
  languages: string[];
  tags: string[];
  coverImages: string[];   // image URLs
  shortDesc: string;
  longDesc: string;
  rating?: number;
  sales?: number;
  sellerId: string;
  boosted?: boolean;
  createdAt: string; // ISO
  updatedAt: string; // ISO
}

export interface Paginated<T> {
  items: T[];
  page: number;
  pageSize: number;
  total: number;
}
