import { useState } from 'react'
import { AppBar } from '@/components/layout/AppBar'
import { Footer } from '@/components/layout/Footer'
import { SEO } from '@/components/SEO'
import categories from '@/data/categories'
import { cn } from '@/lib/utils'

export default function Browse() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>()
  const [searchQuery, setSearchQuery] = useState('')

  const selectedCategory = categories.find(c => c.id === selectedCategoryId)
  
  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const filteredSubcategories = selectedCategory?.children?.filter(sub =>
    sub.name.toLowerCase().includes(searchQuery.toLowerCase())
  ) || []

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-1)' }}>
      <SEO title="Browse Categories — Knowledge Marketplace" description="Explore all knowledge categories and subcategories." canonical="/browse" />
      <AppBar />
      
      <main className="container mx-auto mt-6 mb-12">
        <div className="glass-card max-w-6xl mx-auto h-[calc(100vh-12rem)] rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b" style={{ borderColor: 'var(--divider)' }}>
            <h1 className="text-3xl font-display font-semibold">Browse Categories</h1>
            <div className="flex items-center gap-4">
              <input
                type="search"
                placeholder="Search categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="glass-surface px-4 py-2 rounded-lg border-0 focus:ring-2 focus:ring-primary w-64"
              />
              <a href="/" className="glass-chip px-4 py-2 text-sm hover:bg-muted micro-transition">
                Back to Feed
              </a>
            </div>
          </div>
          
          {/* Three-pane layout */}
          <div className="grid grid-cols-3 h-[calc(100%-5rem)]">
            {/* Top-level categories */}
            <div className="border-r p-6 overflow-y-auto" style={{ borderColor: 'var(--divider)' }}>
              <h2 className="font-medium text-sm text-muted-foreground mb-4 uppercase tracking-wide">
                Categories ({filteredCategories.length})
              </h2>
              <nav className="space-y-2">
                {filteredCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategoryId(category.id)}
                    className={cn(
                      'w-full text-left px-4 py-3 text-sm rounded-lg micro-transition',
                      selectedCategoryId === category.id 
                        ? 'bg-primary text-primary-foreground' 
                        : 'hover:bg-muted'
                    )}
                  >
                    <div className="font-medium">{category.name}</div>
                    <div className="text-xs opacity-60 mt-1">
                      {category.children?.length || 0} subcategories
                    </div>
                  </button>
                ))}
              </nav>
            </div>
            
            {/* Subcategories */}
            <div className="border-r p-6 overflow-y-auto" style={{ borderColor: 'var(--divider)' }}>
              <h2 className="font-medium text-sm text-muted-foreground mb-4 uppercase tracking-wide">
                {selectedCategory ? `${selectedCategory.name} (${filteredSubcategories.length})` : 'Select a category'}
              </h2>
              <div className="space-y-1">
                {filteredSubcategories.map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => {
                      // Navigate to main feed with this subcategory selected
                      window.location.href = `/?category=${sub.id}`
                    }}
                    className="w-full text-left px-4 py-2 text-sm rounded-lg hover:bg-muted micro-transition"
                  >
                    {sub.name}
                  </button>
                ))}
                
                {selectedCategory && filteredSubcategories.length === 0 && (
                  <div className="text-sm text-muted-foreground px-4 py-8 text-center">
                    {searchQuery ? 'No subcategories match your search.' : 'No subcategories available.'}
                  </div>
                )}
              </div>
            </div>
            
            {/* Featured listings */}
            <div className="p-6 overflow-y-auto">
              <h2 className="font-medium text-sm text-muted-foreground mb-4 uppercase tracking-wide">
                Featured Listings
              </h2>
              
              {selectedCategory ? (
                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground">
                    Featured listings for <strong>{selectedCategory.name}</strong> will appear here.
                  </div>
                  
                  {/* Placeholder for featured listings */}
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="glass-surface p-3 rounded-lg">
                        <div className="h-3 bg-muted rounded mb-2"></div>
                        <div className="h-2 bg-muted rounded w-3/4"></div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-sm text-muted-foreground">
                  Select a category to see featured listings.
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}