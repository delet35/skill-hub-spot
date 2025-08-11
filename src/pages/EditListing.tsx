import { useParams } from 'react-router-dom'
import CreateListing from './CreateListing'

// For the MVP, reuse Create with prefill (future: fetch and set default values)
export default function EditListing() {
  const { id } = useParams()
  return <CreateListing />
}
