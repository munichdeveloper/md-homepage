export default function Tags({ tags }) {
  return (
    <div className="max-w-4xl">
      <p className="mt-3 text-lg font-bold">
        {tags.map((tag, index) => (
          <span key={index} className="inline-flex items-center rounded-[20px] bg-[#f2ff0030] text-[1.1rem] p-1 px-2 font-semibold text-yellow-800 ring-1 ring-inset ring-yellow-600/20 mr-1 mb-1">
            {tag.name}
          </span>
        ))}
      </p>
    </div>
  )
}
