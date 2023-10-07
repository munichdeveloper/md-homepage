export default function PostTitle({ children }) {
  return (
    <h1
      className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tighter leading-tight md:leading-none max-w-2xl"
      dangerouslySetInnerHTML={{ __html: children }} />
  )
}
