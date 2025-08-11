import { useTranslation } from 'react-i18next'

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation()
  const toggle = () => {
    const next = i18n.language.startsWith('he') ? 'en' : 'he'
    i18n.changeLanguage(next)
  }
  return (
    <button onClick={toggle} className="text-sm underline-offset-4 hover:underline">
      {t('footer.language')}: {i18n.language.startsWith('he') ? 'HE' : 'EN'}
    </button>
  )
}
