import { useQuery } from '@tanstack/react-query'
import { listings as seedListings, sellers } from '@/mocks/data'
import type { Listing } from '@/types'
import { ListingCard } from './ListingCard'

async function fetchListings(): Promise<Listing[]> {
  const res = await fetch('/api/listings')
  if (!res.ok) throw new Error('Failed to load')
  return res.json()
}

export function ListingGrid() {
  const { data } = useQuery({ queryKey: ['listings'], queryFn: fetchListings, initialData: seedListings })

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data?.map((l) => (
        <ListingCard key={l.id} listing={l} seller={sellers.find(s => s.id === l.sellerId)} />
      ))}
    </div>
  )
}
