import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import categories from '@/data/categories'
import { cn } from '@/lib/utils'
import { useTranslation } from 'react-i18next'

export type SidebarCategoriesProps = {
  selectedCategoryId?: string
  onSelectCategory?: (id: string) => void
}

export function SidebarCategories({ selectedCategoryId, onSelectCategory }: SidebarCategoriesProps) {
  const [showOverlay, setShowOverlay] = useState(false)

  return (
    <>
      {/* Collapsed icon rail */}
      <div className="sticky top-24 h-[calc(100vh-8rem)] w-16">
        <div className="glass-card h-full flex flex-col items-center py-4 space-y-3">
          {/* Browse pill */}
          <button
            onClick={() => setShowOverlay(true)}
            className="glass-chip px-3 py-2 text-xs font-medium text-primary hover:bg-primary/10 micro-transition"
            aria-label="Browse categories"
          >
            Browse
          </button>
          
          {/* Quick category icons */}
          <div className="space-y-2 opacity-60">
            {categories.slice(0, 6).map((category) => (
              <button
                key={category.id}
                onClick={() => onSelectCategory?.(category.id)}
                className="w-8 h-8 rounded-lg hover:bg-muted/50 flex items-center justify-center text-xs micro-transition"
                title={category.name}
                aria-label={category.name}
              >
                {category.name.slice(0, 2)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Full-screen Explore overlay */}
      {showOverlay && (
        <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm">
          <div className="glass-card max-w-6xl mx-auto mt-12 mb-12 h-[calc(100vh-6rem)] rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-divider">
              <h2 className="text-2xl font-display font-semibold">Browse Categories</h2>
              <button 
                onClick={() => setShowOverlay(false)}
                className="p-2 hover:bg-muted rounded-lg micro-transition"
                aria-label="Close browse overlay"
              >
                ✕
              </button>
            </div>
            
            <div className="grid grid-cols-3 h-[calc(100%-5rem)]">
              {/* Top-level categories */}
              <div className="border-r border-divider p-4 overflow-y-auto">
                <h3 className="font-medium text-sm text-muted-foreground mb-3 uppercase tracking-wide">Categories</h3>
                <nav className="space-y-1">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => onSelectCategory?.(category.id)}
                      className={cn(
                        'w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-muted micro-transition',
                        selectedCategoryId === category.id && 'bg-accent text-accent-foreground'
                      )}
                    >
                      {category.name}
                    </button>
                  ))}
                </nav>
              </div>
              
              {/* Subcategories */}
              <div className="border-r border-divider p-4 overflow-y-auto">
                <h3 className="font-medium text-sm text-muted-foreground mb-3 uppercase tracking-wide">Subcategories</h3>
                <div className="space-y-1">
                  {selectedCategoryId && categories.find(c => c.id === selectedCategoryId)?.children?.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => {
                        onSelectCategory?.(sub.id)
                        setShowOverlay(false)
                      }}
                      className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-muted micro-transition"
                    >
                      {sub.name}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Featured listings */}
              <div className="p-4 overflow-y-auto">
                <h3 className="font-medium text-sm text-muted-foreground mb-3 uppercase tracking-wide">Featured</h3>
                <div className="text-sm text-muted-foreground">Featured listings for this category will appear here.</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
