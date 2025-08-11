import { http, HttpResponse } from 'msw'
import { listings, sellers, messageThreads } from './data'

export const handlers = [
  http.get('/api/listings', () => {
    return HttpResponse.json(listings)
  }),

  http.get('/api/listings/:id', ({ params }) => {
    const listing = listings.find(l => l.id === params.id)
    if (!listing) return HttpResponse.json({ message: 'Not found' }, { status: 404 })
    const seller = sellers.find(s => s.id === listing.sellerId)
    return HttpResponse.json({ listing, seller })
  }),

  http.get('/api/message-threads', () => {
    return HttpResponse.json(messageThreads)
  }),

  http.post('/api/messages', async ({ request }) => {
    const body = await request.json()
    return HttpResponse.json({ ok: true, received: body }, { status: 201 })
  })
]
