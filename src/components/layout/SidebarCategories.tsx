import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import categories from '@/data/categories'
import { cn } from '@/lib/utils'
import { useTranslation } from 'react-i18next'

export function SidebarCategories() {
  const [open, setOpen] = useState<Record<string, boolean>>({})
  const { t } = useTranslation()

  const toggle = (id: string) => setOpen((s) => ({ ...s, [id]: !s[id] }))

  return (
    <aside className="sticky top-[4.25rem] h-[calc(100vh-4.25rem)] overflow-auto pr-3" aria-label={t('categories.title')}>
      <h2 className="text-sm font-medium text-muted-foreground mb-2">{t('categories.title')}</h2>
      <ul className="space-y-1">
        {categories.map((cat) => (
          <li key={cat.id}>
            <button
              className="w-full flex items-center justify-between px-2 py-2 rounded-md hover:bg-muted/60"
              onClick={() => toggle(cat.id)}
              aria-expanded={!!open[cat.id]}
            >
              <span className="text-sm font-medium">{cat.name}</span>
              <ChevronDown className={cn('h-4 w-4 transition-transform', open[cat.id] && 'rotate-180')} />
            </button>
            {open[cat.id] && cat.children && (
              <ul className="mt-1 ml-3 space-y-1">
                {cat.children.map((sub) => (
                  <li key={sub.id}>
                    <button className="w-full text-left text-sm px-2 py-1.5 rounded hover:bg-muted/60">
                      {sub.name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  )
}
