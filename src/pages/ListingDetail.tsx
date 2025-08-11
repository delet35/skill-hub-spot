import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { AppBar } from '@/components/layout/AppBar'
import { Footer } from '@/components/layout/Footer'
import { ListingGallery } from '@/components/market/ListingGallery'
import { SellerPanel } from '@/components/market/SellerPanel'
import { SEO } from '@/components/SEO'
import { Card, CardContent } from '@/components/ui/card'
import ReactMarkdown from 'react-markdown'

async function fetchListing(id: string) {
  const res = await fetch(`/api/listings/${id}`)
  if (!res.ok) throw new Error('Not found')
  return res.json() as Promise<{ listing: any; seller: any }>
}

export default function ListingDetail() {
  const { id = '' } = useParams()
  const { data } = useQuery({ queryKey: ['listing', id], queryFn: () => fetchListing(id), enabled: !!id })

  if (!data) return null
  const { listing, seller } = data

  return (
    <div className="min-h-screen bg-background">
      <SEO title={`${listing.title} — Knowledge Marketplace`} description={listing.shortDesc} canonical={`/listing/${listing.id}`} />
      <AppBar />
      <main className="container mx-auto grid grid-cols-12 gap-6 mt-6">
        <div className="col-span-12 lg:col-span-8">
          <ListingGallery images={listing.coverImages} />

          <section className="mt-6">
            <Card className="shadow-soft">
              <CardContent className="prose max-w-none p-6">
                <ReactMarkdown>{listing.longDesc}</ReactMarkdown>
              </CardContent>
            </Card>
          </section>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <SellerPanel listing={listing} seller={seller} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
