import type { Listing, Seller } from '@/types'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

type Props = {
  listing: Listing
  seller?: Seller
}

export function ListingCard({ listing, seller }: Props) {
  const priceText = listing.price === 0 || listing.price === 'free' ? 'Free' : `${listing.currency} ${listing.price}`
  const cover = listing.coverImages[0]

  return (
    <a href={`/listing/${listing.id}`} aria-label={listing.title} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl group">
      <div className="glass-card overflow-hidden micro-transition group-hover:translate-y-[-4px] group-hover:shadow-medium">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <img src={cover} alt={listing.title} className="h-full w-full object-cover micro-transition group-hover:scale-[1.02]" loading="lazy" />
          <span className="absolute top-3 left-3 glass-chip text-xs px-2 py-1 bg-primary/90 text-primary-foreground font-medium">
            {priceText}
          </span>
        </div>
        <div className="p-4">
          <div className="mb-2">
            <h3 className="font-medium leading-snug line-clamp-2 group-hover:text-primary micro-transition">{listing.title}</h3>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
            {seller && (
              <span className="inline-flex items-center gap-1">
                <img src={seller.avatarUrl} alt={seller.displayName} className="h-4 w-4 rounded-full" loading="lazy" />
                {seller.displayName}
              </span>
            )}
            <span className="ml-auto inline-flex items-center gap-1">
              <Star className="h-3 w-3 text-primary fill-current" /> 
              {listing.rating.toFixed(1)} · {listing.sales}
            </span>
          </div>
          <div className="flex flex-wrap gap-1">
            {listing.tags.slice(0, 2).map((t) => (
              <span key={t} className="glass-chip text-[10px] px-2 py-0.5 text-muted-foreground">{t}</span>
            ))}
            {listing.tags.length > 2 && (
              <span className="glass-chip text-[10px] px-2 py-0.5 text-muted-foreground">+{listing.tags.length - 2}</span>
            )}
          </div>
        </div>
      </div>
    </a>
  )
}
