import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Search, MessageSquare, Rocket, User2, Grid2X2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

export function AppBar() {
  const { t } = useTranslation()

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    cn(
      'px-3 py-2 rounded-md text-sm font-medium focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none',
      isActive ? 'bg-secondary text-primary' : 'hover:bg-secondary'
    )

  return (
    <header className="sticky top-0 z-40 bg-card/90 backdrop-blur border-b shadow-soft">
      <nav aria-label="Main navigation" className="container mx-auto flex items-center gap-4 py-3">
        <NavLink to="/" className="flex items-center gap-2 select-none" aria-label={t('brand.name')}>
          <div className="h-9 w-9 rounded-md bg-accent text-accent-foreground grid place-items-center font-display text-base">{t('brand.monogram')}</div>
          <span className="hidden sm:block font-display text-lg">{t('brand.name')}</span>
        </NavLink>

        <div className="flex-1 max-w-2xl mx-auto hidden md:flex items-center gap-2">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden />
            <Input
              aria-label={t('search.placeholder')}
              placeholder={t('search.placeholder')}
              className="pl-9"
            />
          </div>
          <Button variant="accent" size="default" aria-label="Search">{t('nav.browse')}</Button>
        </div>

        <div className="ml-auto flex items-center gap-1">
          <NavLink to="/" className={linkCls} end><Grid2X2 className="h-4 w-4" />{t('nav.browse')}</NavLink>
          <NavLink to="/profile/listings" className={linkCls}><User2 className="h-4 w-4" />{t('nav.myListings')}</NavLink>
          <NavLink to="/messages" className={linkCls}>
            <span className="relative inline-flex items-center"><MessageSquare className="h-4 w-4" /><span className="ml-1">{t('nav.messages')}</span><span className="absolute -top-1 -right-2 text-[10px] leading-none bg-accent text-accent-foreground rounded-full px-1.5 py-0.5">1</span></span>
          </NavLink>
          <NavLink to="/boost" className={linkCls}><Rocket className="h-4 w-4" />{t('nav.boost')}</NavLink>
          <NavLink to="/login" className={linkCls}>{t('nav.login')}</NavLink>
        </div>
      </nav>
    </header>
  )
}
