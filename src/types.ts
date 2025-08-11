export type Currency = 'USD' | 'EUR' | 'ILS';
export type ListingFormat = 'coaching' | 'guide' | 'template' | 'workshop' | 'course';
export type DeliveryMethod = 'download' | 'video_call' | 'chat' | 'link';
export type Level = 'beginner' | 'intermediate' | 'advanced';

export interface Seller {
  id: string;
  displayName: string;
  avatarUrl: string;
  memberSince: string; // ISO date
}

export interface Listing {
  id: string;
  title: string;
  price: number | 'free';
  currency: Currency;
  categoryId: string;
  subcategoryId?: string;
  format: ListingFormat;
  deliveryMethod: DeliveryMethod;
  level: Level;
  languages: string[];
  tags: string[];
  coverImages: string[];
  shortDesc: string;
  longDesc: string;
  rating: number; // 0-5
  sales: number;
  sellerId: string;
  status: 'active' | 'draft' | 'inactive';
  boosted: boolean;
  createdAt: string; // ISO date
  updatedAt: string; // ISO date
}

export interface Message {
  id: string;
  threadId: string;
  fromUserId: string;
  sentAt: string; // ISO date
  text: string;
}

export interface MessageThread {
  id: string;
  listingId: string;
  buyerId: string;
  sellerId: string;
  messages: Message[];
  unread?: boolean;
}
