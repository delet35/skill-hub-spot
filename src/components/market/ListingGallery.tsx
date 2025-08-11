type Props = { images: string[] }

export function ListingGallery({ images }: Props) {
  const main = images[0]
  return (
    <section aria-label="Gallery" className="space-y-2">
      <div className="aspect-[3/2] w-full overflow-hidden rounded-lg bg-muted">
        <img src={main} alt="Listing main image" className="h-full w-full object-cover" />
      </div>
      {images.length > 1 && (
        <div className="grid grid-cols-5 gap-2">
          {images.slice(1, 6).map((src, i) => (
            <img key={i} src={src} alt={`Thumbnail ${i + 1}`} className="aspect-[3/2] object-cover rounded" />
          ))}
        </div>
      )}
    </section>
  )
}
