import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useTranslation } from 'react-i18next'

export function RightRail() {
  const { t } = useTranslation()
  return (
    <aside className="space-y-4">
      <Card className="shadow-soft">
        <CardContent className="pt-6">
          <Button variant="accent" size="lg" className="w-full" asChild>
            <a href="/create" aria-label={t('actions.createListing')}>{t('actions.createListing')}</a>
          </Button>
        </CardContent>
      </Card>

      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle>Boost Credits</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div>
            <div className="text-sm text-muted-foreground">Current</div>
            <div className="text-2xl font-semibold">12</div>
          </div>
          <Button variant="accent">{t('actions.buyCredits')}</Button>
        </CardContent>
      </Card>

      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle>Tips for Selling Knowledge</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-2">
          <p>Use a clear cover image and concise title (less than 60 chars).</p>
          <p>Show what buyers get: bullets work best.</p>
          <p>Add social proof: reviews and sales.</p>
        </CardContent>
      </Card>
    </aside>
  )
}
