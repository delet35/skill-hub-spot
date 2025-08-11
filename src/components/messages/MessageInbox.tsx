import { useQuery } from '@tanstack/react-query'
import type { MessageThread } from '@/types'
import { Card } from '@/components/ui/card'

async function fetchThreads(): Promise<MessageThread[]> {
  const res = await fetch('/api/message-threads')
  if (!res.ok) throw new Error('Failed to load threads')
  return res.json()
}

export function MessageInbox() {
  const { data } = useQuery({ queryKey: ['threads'], queryFn: fetchThreads, initialData: [] })

  return (
    <div className="grid grid-cols-12 gap-4 min-h-[70vh]">
      <aside className="col-span-12 md:col-span-4 border rounded-lg overflow-hidden" aria-label="Threads list">
        {data?.map((t) => (
          <button key={t.id} className="w-full flex items-start gap-2 px-3 py-3 border-b hover:bg-muted/60 text-left">
            <div className="h-10 w-10 rounded bg-secondary" />
            <div className="flex-1">
              <div className="text-sm font-medium">Thread {t.id}</div>
              <div className="text-xs text-muted-foreground line-clamp-1">{t.messages[0]?.text}</div>
            </div>
            {t.unread && <span className="text-[10px] bg-accent text-accent-foreground rounded-full px-1.5 py-0.5">new</span>}
          </button>
        ))}
      </aside>
      <main className="col-span-12 md:col-span-8">
        <Card className="p-4 min-h-[60vh]">Select a thread to start chatting. Attachment placeholder.</Card>
      </main>
    </div>
  )
}
