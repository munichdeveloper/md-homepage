export default function Tags({ tags }) {
  return (
    <div className="max-w-2xl mx-auto">
      <p className="mt-3 text-lg font-bold">
        {tags.map((tag, index) => (
          <span key={index} className="inline-flex items-center rounded-[20px] bg-[#f2ff0035] px-2 py-1 text-sm font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20 mr-3 mb-2">
            #{tag}
          </span>
        ))}
      </p>
    </div>
  )
}
