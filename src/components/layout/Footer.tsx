import { LanguageSwitcher } from './LanguageSwitcher'
import { Github, Linkedin, Twitter } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="mt-10 border-t bg-card">
      <div className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="font-display text-lg mb-2">Knowledge Marketplace</div>
          <p className="text-sm text-muted-foreground">{t('footer.contact')}</p>
          <div className="flex items-center gap-3 mt-4 text-muted-foreground">
            <Twitter className="h-5 w-5" />
            <Linkedin className="h-5 w-5" />
            <Github className="h-5 w-5" />
          </div>
          <div className="mt-4"><LanguageSwitcher /></div>
        </div>
        <div>
          <div className="font-medium mb-2">{t('footer.about')}</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:underline">Our story</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Press</a></li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-2">{t('footer.customer')}</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Report an issue</a></li>
            <li><a href="#" className="hover:underline">Safety & Trust</a></li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-2">{t('footer.info')}</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:underline">Terms</a></li>
            <li><a href="#" className="hover:underline">Privacy</a></li>
            <li><a href="#" className="hover:underline">Cookies</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} KM. All rights reserved.</div>
    </footer>
  )
}
