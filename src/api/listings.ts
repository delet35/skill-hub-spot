import { http } from './http';
import { Listing, Paginated } from '../types/marketplace';

export type ListQuery = {
  page?: number;
  pageSize?: number;
  sort?: 'relevance' | 'newest' | 'priceAsc' | 'priceDesc';
  categoryId?: string;
  format?: string;
  priceBucket?: 'free' | 'lt25' | '25to99' | '100to299' | '300plus';
  level?: string;
  q?: string;
};

export async function fetchListings(q: ListQuery = {}): Promise<Paginated<Listing>> {
  const res = await http.get('/listings', { params: q });
  return res.data;
}

export async function fetchListing(id: string): Promise<Listing> {
  const res = await http.get(`/listings/${id}`);
  return res.data;
}

export async function uploadImages(files: File[]): Promise<string[]> {
  const form = new FormData();
  files.forEach((f) => form.append('files', f));
  const res = await http.post('/uploads', form, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return res.data.urls as string[];
}

export type CreateListingDto = Omit<Listing, 'id' | 'sellerId' | 'createdAt' | 'updatedAt' | 'rating' | 'sales'>;

export async function createListing(dto: CreateListingDto): Promise<Listing> {
  const res = await http.post('/listings', dto);
  return res.data;
}
