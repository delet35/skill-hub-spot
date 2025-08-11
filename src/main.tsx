import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n'

async function bootstrap() {
  if (import.meta.env.DEV) {
    const { worker } = await import('./mocks/browser')
    await worker.start({ serviceWorker: { url: '/mockServiceWorker.js' } })
  }

  const rootEl = document.getElementById('root')!
  createRoot(rootEl).render(<App />)
}

bootstrap()

