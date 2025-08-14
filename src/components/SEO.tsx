import { useEffect } from 'react'

type SEOProps = {
  title: string
  description?: string
  canonical?: string
  jsonLd?: Record<string, unknown>
}

export function SEO({ title, description, canonical = '/', jsonLd }: SEOProps) {
  useEffect(() => {
    document.title = title

    const ensureMeta = (name: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute('name', name)
        document.head.appendChild(el)
      }
      return el
    }

    if (description) {
      const descEl = ensureMeta('description')
      descEl.setAttribute('content', description)
    }

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = canonical

    // JSON-LD structured data
    let ld = document.getElementById('ld-json') as HTMLScriptElement | null
    if (jsonLd) {
      if (!ld) {
        ld = document.createElement('script')
        ld.id = 'ld-json'
        ld.type = 'application/ld+json'
        document.head.appendChild(ld)
      }
      ld.text = JSON.stringify(jsonLd)
    } else if (ld) {
      ld.remove()
    }
  }, [title, description, canonical, jsonLd])
  return null
}
