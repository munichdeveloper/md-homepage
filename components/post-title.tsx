export default function PostTitle({ children }) {
  return (
    <h1
      className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight md:leading-none mb-12 mx-auto max-w-4xl"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}