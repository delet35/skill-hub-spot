import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useTranslation } from 'react-i18next'

export function RightRail() {
  const { t } = useTranslation()
  const [showTips, setShowTips] = useState(false)

  return (
    <aside className="space-y-4">
      <div className="glass-card p-6">
        <Button variant="default" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium" asChild>
          <a href="/create" aria-label={t('actions.createListing')}>{t('actions.createListing')}</a>
        </Button>
      </div>

      <div className="glass-card p-6">
        <h3 className="font-display font-semibold mb-3">Boost Credits</h3>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-muted-foreground">Current</div>
            <div className="text-2xl font-semibold">12</div>
          </div>
          <button className="glass-chip px-3 py-2 text-sm text-primary hover:bg-primary/10 micro-transition">
            {t('actions.buyCredits')}
          </button>
        </div>
      </div>

      <div className="glass-card p-6">
        <button 
          onClick={() => setShowTips(!showTips)}
          className="w-full flex items-center justify-between text-left"
        >
          <h3 className="font-display font-semibold">Tips for Selling Knowledge</h3>
          <span className="text-muted-foreground">{showTips ? '−' : '+'}</span>
        </button>
        
        {showTips && (
          <div className="mt-3 text-sm text-muted-foreground space-y-2">
            <p>Use a clear cover image and concise title (less than 60 chars).</p>
            <p>Show what buyers get: bullets work best.</p>
            <p>Add social proof: reviews and sales.</p>
          </div>
        )}
      </div>
    </aside>
  )
}
