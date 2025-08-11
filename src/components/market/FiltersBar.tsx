import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import categories from '@/data/categories'

type Props = {
  selectedCategoryId?: string
}

export function FiltersBar({ selectedCategoryId }: Props) {
  const selectedCat = categories.find(c => c.id === selectedCategoryId)
  const subs = selectedCat?.children ?? []

  return (
    <div className="flex flex-wrap items-center gap-3 py-3">
      <span className="text-sm font-medium">Today’s picks</span>
      <div className="ml-auto flex items-center gap-3">
        <Select defaultValue="relevance">
          <SelectTrigger className="w-40"><SelectValue placeholder="Sort by" /></SelectTrigger>
          <SelectContent className="bg-card">
            <SelectItem value="relevance">Relevance</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="plh">Price low→high</SelectItem>
            <SelectItem value="phl">Price high→low</SelectItem>
          </SelectContent>
        </Select>
        <div className="hidden sm:flex items-center gap-2">
          <Badge variant="secondary">1:1</Badge>
          <Badge variant="secondary">Guide/PDF</Badge>
          <Badge variant="secondary">Template</Badge>
          <Badge variant="secondary">Workshop</Badge>
          <Badge variant="secondary">Course</Badge>
        </div>
      </div>
      {subs.length > 0 && (
        <div className="w-full flex flex-wrap items-center gap-2">
          {subs.map((s) => (
            <Badge key={s.id} variant="outline">{s.name}</Badge>
          ))}
        </div>
      )}
    </div>
  )
}
