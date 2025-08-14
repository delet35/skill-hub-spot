import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Search, MessageSquare, Rocket, User2, Grid2X2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { messageThreads } from '@/mocks/data'

export function AppBar() {
  const { t } = useTranslation()
  const unread = messageThreads.filter(t => t.unread).length

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    cn(
      'px-3 py-2 rounded-md text-sm font-medium focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none',
      isActive ? 'bg-secondary text-primary' : 'hover:bg-secondary'
    )

  return (
    <header className="sticky top-0 z-50 p-6">
      <nav className="glass-nav container mx-auto flex items-center justify-between px-6 py-4"
        aria-label="Main navigation">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-sm font-bold text-primary-foreground">KM</span>
            </div>
          </div>
        </div>

        <div className="flex-1 max-w-lg mx-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="search"
              placeholder={t('search.placeholder')}
              className="w-full pl-12 pr-6 py-3 glass-surface rounded-3xl border-0 focus:ring-2 focus:ring-primary text-sm"
              aria-label={t('search.label')}
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <NavLink to="/browse" className="glass-chip px-3 py-1.5 text-sm">Browse</NavLink>
          <NavLink to="/profile/listings" className={linkCls}>{t('nav.myListings')}</NavLink>
          <NavLink to="/profile/listings?tab=active" className={linkCls}>Active</NavLink>
          <NavLink to="/messages" className={cn(linkCls, 'relative')}>
            {t('nav.messages')}
            {unread > 0 && (
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-destructive text-destructive-foreground rounded-full text-xs flex items-center justify-center">
                {unread > 9 ? '9+' : unread}
              </span>
            )}
          </NavLink>
          <NavLink to="/boost" className={linkCls}>{t('nav.boostCredits')}</NavLink>
          <NavLink to="/login" className="glass-chip px-3 py-1.5 text-sm">{t('auth.login')}</NavLink>
        </div>
      </nav>
    </header>
  )
}
