export default function BookPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = params
  return <div>book/[id] page입니다.</div>
}