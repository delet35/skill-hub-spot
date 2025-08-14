import { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import categories from '@/data/categories'

type Props = {
  selectedCategoryId?: string
}

export function FiltersBar({ selectedCategoryId }: Props) {
  const [selectedFormat, setSelectedFormat] = useState<string>()
  const [selectedLevel, setSelectedLevel] = useState<string>()
  const [selectedPrice, setSelectedPrice] = useState<string>()
  const [sortBy, setSortBy] = useState<string>('relevance')
  const [showFiltersModal, setShowFiltersModal] = useState(false)

  // Get category name for chip display
  const getCategoryName = (categoryId: string): string => {
    for (const category of categories) {
      if (category.id === categoryId) return category.name
      if (category.children) {
        const subcategory = category.children.find(sub => sub.id === categoryId)
        if (subcategory) return subcategory.name
      }
    }
    return categoryId
  }

  const activeFilters = [
    selectedCategoryId && { type: 'category', value: getCategoryName(selectedCategoryId), clear: () => {} },
    selectedFormat && { type: 'format', value: selectedFormat, clear: () => setSelectedFormat(undefined) },
    selectedLevel && { type: 'level', value: selectedLevel, clear: () => setSelectedLevel(undefined) },
    selectedPrice && { type: 'price', value: selectedPrice, clear: () => setSelectedPrice(undefined) },
  ].filter(Boolean)

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 flex-wrap">
          {/* Active filter chips */}
          {activeFilters.map((filter, index) => (
            <span key={index} className="glass-chip inline-flex items-center gap-1 px-3 py-1.5 text-xs">
              {filter.value}
              <button 
                onClick={filter.clear}
                className="ml-1 hover:bg-black/10 rounded-full p-0.5 micro-transition"
                aria-label={`Remove ${filter.type} filter`}
              >
                ×
              </button>
            </span>
          ))}

          {/* Filters button */}
          <button
            onClick={() => setShowFiltersModal(true)}
            className="glass-chip px-3 py-1.5 text-xs hover:bg-primary/10 micro-transition"
          >
            Filters
          </button>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Sort:</span>
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="glass-chip px-3 py-1.5 text-xs bg-transparent border-0 focus:ring-2 focus:ring-primary"
          >
            <option value="relevance">Relevance</option>
            <option value="newest">Newest</option>
            <option value="price-low">Price ↑</option>
            <option value="price-high">Price ↓</option>
          </select>

          <button className="glass-chip px-3 py-1.5 text-xs text-primary">Today's picks</button>
        </div>
      </div>

      {/* Filters Modal */}
      {showFiltersModal && (
        <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="glass-card max-w-md w-full p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-lg font-semibold">Filters</h3>
              <button 
                onClick={() => setShowFiltersModal(false)}
                className="p-2 hover:bg-muted rounded-lg micro-transition"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Format</label>
                <select 
                  value={selectedFormat || ''} 
                  onChange={(e) => setSelectedFormat(e.target.value || undefined)}
                  className="w-full glass-surface px-3 py-2 rounded-lg"
                >
                  <option value="">All formats</option>
                  <option value="coaching">1:1 Coaching</option>
                  <option value="guide">Guide/PDF</option>
                  <option value="template">Template</option>
                  <option value="workshop">Workshop</option>
                  <option value="course">Course</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Level</label>
                <select 
                  value={selectedLevel || ''} 
                  onChange={(e) => setSelectedLevel(e.target.value || undefined)}
                  className="w-full glass-surface px-3 py-2 rounded-lg"
                >
                  <option value="">All levels</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Price Range</label>
                <select 
                  value={selectedPrice || ''} 
                  onChange={(e) => setSelectedPrice(e.target.value || undefined)}
                  className="w-full glass-surface px-3 py-2 rounded-lg"
                >
                  <option value="">All prices</option>
                  <option value="free">Free</option>
                  <option value="under-25">Under $25</option>
                  <option value="25-99">$25-99</option>
                  <option value="100-299">$100-299</option>
                  <option value="300-plus">$300+</option>
                </select>
              </div>
            </div>
            
            <div className="flex gap-3 mt-6">
              <button 
                onClick={() => setShowFiltersModal(false)}
                className="flex-1 glass-surface px-4 py-2 rounded-lg micro-transition hover:bg-muted"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}