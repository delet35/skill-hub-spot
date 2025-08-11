import { AppBar } from '@/components/layout/AppBar'
import { SidebarCategories } from '@/components/layout/SidebarCategories'
import { RightRail } from '@/components/layout/RightRail'
import { Footer } from '@/components/layout/Footer'
import { FiltersBar } from '@/components/market/FiltersBar'
import { ListingGrid } from '@/components/market/ListingGrid'
import { SEO } from '@/components/SEO'
import { useState } from 'react'

const Index = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | undefined>(undefined)
  return (
    <div className="min-h-screen bg-background">
      <SEO title="Knowledge Marketplace — Sell Knowledge & Experience" description="Discover and sell coaching, guides, templates, and courses." canonical="/" />
      <AppBar />
      <main className="container mx-auto grid gap-4 mt-6 lg:grid-cols-[280px_1fr_320px]">
        <aside><SidebarCategories selectedCategoryId={selectedCategoryId} onSelectCategory={setSelectedCategoryId} /></aside>
        <section>
          <FiltersBar selectedCategoryId={selectedCategoryId} />
          <ListingGrid />
        </section>
        <aside><RightRail /></aside>
      </main>
      <Footer />
    </div>
  )
}

export default Index
