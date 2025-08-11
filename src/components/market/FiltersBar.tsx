import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'

export function FiltersBar() {
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
          <Badge variant="secondary">Coaching</Badge>
          <Badge variant="secondary">Guide/PDF</Badge>
          <Badge variant="secondary">Template</Badge>
        </div>
      </div>
    </div>
  )
}
