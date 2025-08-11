import { AppBar } from '@/components/layout/AppBar'
import { Footer } from '@/components/layout/Footer'
import { MessageInbox } from '@/components/messages/MessageInbox'
import { SEO } from '@/components/SEO'

export default function Messages() {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="Messages — Knowledge Marketplace" description="Your inbox and conversations." canonical="/messages" />
      <AppBar />
      <main className="container mx-auto mt-6">
        <MessageInbox />
      </main>
      <Footer />
    </div>
  )
}
