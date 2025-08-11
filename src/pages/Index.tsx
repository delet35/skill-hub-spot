import { AppBar } from '@/components/layout/AppBar'
import { SidebarCategories } from '@/components/layout/SidebarCategories'
import { RightRail } from '@/components/layout/RightRail'
import { Footer } from '@/components/layout/Footer'
import { FiltersBar } from '@/components/market/FiltersBar'
import { ListingGrid } from '@/components/market/ListingGrid'
import { SEO } from '@/components/SEO'

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="Knowledge Marketplace — Sell Knowledge & Experience" description="Discover and sell coaching, guides, templates, and courses." canonical="/" />
      <AppBar />
      <main className="container mx-auto grid grid-cols-12 gap-6 mt-6">
        <div className="col-span-12 lg:col-span-3"><SidebarCategories /></div>
        <section className="col-span-12 lg:col-span-6">
          <FiltersBar />
          <ListingGrid />
        </section>
        <div className="col-span-12 lg:col-span-3"><RightRail /></div>
      </main>
      <Footer />
    </div>
  )
}

export default Index
