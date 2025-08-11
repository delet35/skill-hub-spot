import type { Listing, Seller } from '@/types'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

type Props = { listing: Listing; seller: Seller }

export function SellerPanel({ listing, seller }: Props) {
  const priceText = listing.price === 0 || listing.price === 'free' ? 'Free' : `${listing.currency} ${listing.price}`

  return (
    <aside className="sticky top-[5rem] space-y-3" aria-label="Seller panel">
      <Card className="shadow-soft">
        <CardContent className="p-4 space-y-3">
          <div className="flex items-start justify-between">
            <h1 className="font-display text-xl leading-tight">{listing.title}</h1>
            <span className="text-sm px-2 py-0.5 rounded-full bg-accent text-accent-foreground">{priceText}</span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <img src={seller.avatarUrl} alt={seller.displayName} className="h-8 w-8 rounded-full" />
            <div>
              <div className="font-medium">{seller.displayName}</div>
              <div className="text-muted-foreground">Since {new Date(seller.memberSince).getFullYear()}</div>
            </div>
          </div>

          <div className="flex gap-2">
            <Button variant="accent" className="flex-1" asChild>
              <a href="/messages">Message Seller</a>
            </Button>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="secondary" className="flex-1" disabled>
                    Buy Now
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Backend coming soon</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <Button variant="outline" aria-label="Save">Save</Button>
          </div>
        </CardContent>
      </Card>
    </aside>
  )
}
