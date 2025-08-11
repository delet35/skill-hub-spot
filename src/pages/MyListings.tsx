import { AppBar } from '@/components/layout/AppBar'
import { Footer } from '@/components/layout/Footer'
import { SEO } from '@/components/SEO'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ListingGrid } from '@/components/market/ListingGrid'

export default function MyListings() {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="My Listings — Knowledge Marketplace" description="Manage your listings." canonical="/profile/listings" />
      <AppBar />
      <main className="container mx-auto mt-6">
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="drafts">Drafts</TabsTrigger>
            <TabsTrigger value="boosted">Boosted</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-4"><ListingGrid /></TabsContent>
          <TabsContent value="active" className="mt-4"><ListingGrid /></TabsContent>
          <TabsContent value="drafts" className="mt-4"><ListingGrid /></TabsContent>
          <TabsContent value="boosted" className="mt-4"><ListingGrid /></TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  )
}
