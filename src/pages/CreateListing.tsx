import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { AppBar } from '@/components/layout/AppBar'
import { Footer } from '@/components/layout/Footer'
import { SEO } from '@/components/SEO'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { ListingCard } from '@/components/market/ListingCard'
import type { Listing } from '@/types'
import ImageGalleryInput from '@/components/forms/ImageGalleryInput'

const schema = z.object({
  title: z.string().min(5),
  price: z.string().regex(/^\d+$|^free$/i, 'Enter number or "free"'),
  currency: z.enum(['USD', 'EUR', 'ILS']),
  format: z.enum(['coaching', 'guide', 'template', 'workshop', 'course']),
  deliveryMethod: z.enum(['download', 'video_call', 'chat', 'link']),
  shortDesc: z.string().min(10),
  cover: z.string().url(),
})

type FormValues = z.infer<typeof schema>

export default function CreateListing() {
  const [images, setImages] = useState<string[]>([])
  const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm<FormValues>({
    mode: 'onChange',
    resolver: zodResolver(schema),
    defaultValues: {
      title: '',
      price: 'free',
      currency: 'USD',
      format: 'coaching',
      deliveryMethod: 'video_call',
      shortDesc: '',
      cover: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop'
    }
  })

  const preview: Listing = useMemo(() => ({
    id: 'preview',
    title: watch('title') || 'Your amazing listing title goes here',
    price: /free/i.test(watch('price')) ? 0 : Number(watch('price') || 0),
    currency: watch('currency'),
    categoryId: 'product',
    format: watch('format'),
    deliveryMethod: watch('deliveryMethod'),
    level: 'beginner',
    languages: ['en'],
    tags: ['preview', 'live'],
    coverImages: images.length ? images : [watch('cover')],
    shortDesc: watch('shortDesc') || 'Short description will appear here.',
    longDesc: '',
    rating: 4.7,
    sales: 0,
    sellerId: 's1',
    status: 'draft',
    boosted: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }), [watch])

  const onSubmit = (values: FormValues) => {
    // placeholder publish flow
    alert('Draft saved! (stub)')
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Create Listing — Knowledge Marketplace" description="Create a new listing with live preview." canonical="/create" />
      <AppBar />
      <main className="container mx-auto grid grid-cols-12 gap-6 mt-6">
        <form className="col-span-12 lg:col-span-7 space-y-4" onSubmit={handleSubmit(onSubmit)} aria-label="Create listing form">
          <Card className="shadow-soft">
            <CardHeader><CardTitle>Basics</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input id="title" {...register('title')} aria-invalid={!!errors.title} />
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <Label htmlFor="price">Price</Label>
                  <Input id="price" placeholder="free or number" {...register('price')} aria-invalid={!!errors.price} />
                </div>
                <div>
                  <Label>Currency</Label>
                  <Select defaultValue="USD" onValueChange={(v) => (document.getElementById('currency') as HTMLInputElement).value = v}>
                    <SelectTrigger id="currency"><SelectValue /></SelectTrigger>
                    <SelectContent className="bg-card">
                      <SelectItem value="USD">USD</SelectItem>
                      <SelectItem value="EUR">EUR</SelectItem>
                      <SelectItem value="ILS">ILS</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Format</Label>
                  <Select defaultValue="coaching" onValueChange={(v) => (document.getElementById('format') as HTMLInputElement).value = v}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent className="bg-card">
                      <SelectItem value="coaching">1:1 Coaching</SelectItem>
                      <SelectItem value="guide">Guide/PDF</SelectItem>
                      <SelectItem value="template">Template/Asset</SelectItem>
                      <SelectItem value="workshop">Live Workshop</SelectItem>
                      <SelectItem value="course">Video Course</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label>Delivery Method</Label>
                <Select defaultValue="video_call" onValueChange={(v) => (document.getElementById('deliveryMethod') as HTMLInputElement).value = v}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent className="bg-card">
                    <SelectItem value="download">Download</SelectItem>
                    <SelectItem value="video_call">1:1 Video Call</SelectItem>
                    <SelectItem value="chat">Chat Mentoring</SelectItem>
                    <SelectItem value="link">Link</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="shortDesc">Short Description</Label>
                <Textarea id="shortDesc" rows={3} {...register('shortDesc')} />
              </div>
              <div>
                <Label>Images</Label>
                <ImageGalleryInput value={images} onChange={setImages} />
                <div className="mt-2">
                  <Label htmlFor="cover">Or add a cover image URL</Label>
                  <Input id="cover" {...register('cover')} />
                </div>
              </div>
              {/* hidden inputs to sync selects */}
              <input type="hidden" id="currency" {...register('currency')} />
              <input type="hidden" id="format" {...register('format')} />
              <input type="hidden" id="deliveryMethod" {...register('deliveryMethod')} />
            </CardContent>
          </Card>
          <div className="flex items-center gap-3">
            <Button type="button" variant="outline">Save Draft</Button>
            <Button type="submit" variant="accent" disabled={!isValid}>Publish</Button>
          </div>
        </form>

        <aside className="col-span-12 lg:col-span-5 space-y-3">
          <Card className="shadow-soft">
            <CardHeader><CardTitle>Live Preview</CardTitle></CardHeader>
            <CardContent>
              <ListingCard listing={preview} />
            </CardContent>
          </Card>
        </aside>
      </main>
      <Footer />
    </div>
  )
}
