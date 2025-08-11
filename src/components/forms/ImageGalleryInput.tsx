import { useEffect, useMemo, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { X, GripVertical, Link as LinkIcon, UploadCloud } from 'lucide-react'
import { cn } from '@/lib/utils'

export type GalleryImage = {
  id: string
  src: string
  kind: 'url' | 'file'
  file?: File
}

type Props = {
  value?: string[]
  onChange?: (urls: string[]) => void
  max?: number
}

export default function ImageGalleryInput({ value = [], onChange, max = 10 }: Props) {
  const [items, setItems] = useState<GalleryImage[]>([])
  const [url, setUrl] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    // initialize from value
    if (value.length) {
      setItems(value.map((src, i) => ({ id: `${i}-${src}`, src, kind: 'url' })))
    }
  }, [])

  useEffect(() => {
    onChange?.(items.map(i => i.src))
  }, [items, onChange])

  const addFiles = (files: FileList | null) => {
    if (!files) return
    const next = Array.from(files).slice(0, Math.max(0, max - items.length))
    const mapped = next.map((f) => ({ id: `${Date.now()}-${f.name}` , src: URL.createObjectURL(f), kind: 'file' as const, file: f }))
    setItems((prev) => [...prev, ...mapped])
  }

  const addUrl = async () => {
    try {
      const u = new URL(url)
      // simple preload validation
      await new Promise((res, rej) => {
        const img = new Image()
        img.onload = () => res(true)
        img.onerror = () => rej('invalid')
        img.src = u.toString()
      })
      setItems((prev) => [...prev, { id: `${Date.now()}`, src: u.toString(), kind: 'url' }])
      setUrl('')
    } catch {
      alert('Please enter a valid image URL')
    }
  }

  const onDragStart = (e: React.DragEvent, index: number) => {
    e.dataTransfer.setData('text/plain', String(index))
  }

  const onDrop = (e: React.DragEvent, index: number) => {
    const from = Number(e.dataTransfer.getData('text/plain'))
    if (Number.isNaN(from)) return
    setItems((prev) => {
      const copy = [...prev]
      const [moved] = copy.splice(from, 1)
      copy.splice(index, 0, moved)
      return copy
    })
  }

  const onDragOver = (e: React.DragEvent) => e.preventDefault()

  const removeAt = (i: number) => setItems((prev) => prev.filter((_, idx) => idx !== i))

  return (
    <div>
      <div
        className="border border-dashed rounded-md p-4 bg-card/50"
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault() }}
        onDrop={(e) => {
          e.preventDefault()
          addFiles(e.dataTransfer.files)
        }}
        role="button"
        tabIndex={0}
      >
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <UploadCloud className="h-4 w-4" />
          <span>Drag & drop images or click to upload (JPG, PNG, WEBP)</span>
        </div>
        <input
          ref={inputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          multiple
          className="hidden"
          onChange={(e) => addFiles(e.target.files)}
        />
      </div>

      <div className="flex items-center gap-2 mt-3">
        <div className="relative flex-1">
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Add image by URL"
            className="w-full h-9 rounded-md border bg-background px-3 text-sm"
          />
        </div>
        <Button type="button" variant="secondary" onClick={addUrl} aria-label="Add image from URL">
          <LinkIcon className="h-4 w-4" />
          <span className="sr-only">Add</span>
        </Button>
      </div>

      {items.length > 0 && (
        <ul className="mt-3 grid grid-cols-3 sm:grid-cols-4 gap-2">
          {items.map((it, i) => (
            <li key={it.id}
              className="relative group"
              draggable
              onDragStart={(e) => onDragStart(e, i)}
              onDrop={(e) => onDrop(e, i)}
              onDragOver={onDragOver}
            >
              <div className="aspect-square overflow-hidden rounded-md bg-muted">
                <img src={it.src} alt={`Image ${i+1}`} className="w-full h-full object-cover" />
              </div>
              <button
                type="button"
                onClick={() => removeAt(i)}
                className="absolute top-1 right-1 h-6 w-6 grid place-items-center rounded-full bg-card/80 border"
                aria-label={`Remove image ${i+1}`}
              >
                <X className="h-3.5 w-3.5" />
              </button>
              <div className="absolute bottom-1 left-1 inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded bg-card/80 border">
                <GripVertical className="h-3 w-3" /> drag
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
