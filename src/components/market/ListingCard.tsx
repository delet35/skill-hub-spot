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
    <a href={`/listing/${listing.id}`} aria-label={listing.title} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg">
      <Card className={cn('group overflow-hidden transition-transform duration-200 hover:translate-y-[-2px] hover:shadow-medium')}
        style={{ boxShadow: 'var(--shadow-soft)' }}>
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
          <img src={cover} alt={listing.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" loading="lazy" />
          <span className="absolute top-2 left-2 text-xs px-2 py-0.5 rounded-md bg-accent text-accent-foreground shadow">
            {priceText}
          </span>
        </div>
        <CardContent className="p-3">
          <div className="mb-1">
            <h3 className="font-medium leading-snug line-clamp-2 group-hover:underline decoration-accent/60 underline-offset-4">{listing.title}</h3>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            {seller && (
              <span className="inline-flex items-center gap-1">
                <img src={seller.avatarUrl} alt={seller.displayName} className="h-5 w-5 rounded-full" loading="lazy" />
                {seller.displayName}
              </span>
            )}
            <span className="ml-auto inline-flex items-center gap-1"><Star className="h-3.5 w-3.5 text-accent" /> {listing.rating.toFixed(1)} · {listing.sales}</span>
          </div>
          <div className="mt-2 flex flex-wrap gap-1">
            {listing.tags.slice(0, 3).map((t) => (
              <Badge key={t} variant="secondary" className="text-[10px]">{t}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </a>
  )
}
