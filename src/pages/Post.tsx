import { useParams } from 'react-router-dom'
export default function Post() {
  const { id } = useParams()
  return <article><h1>Post: {id}</h1><p>Detail artikel contoh.</p></article>
}
