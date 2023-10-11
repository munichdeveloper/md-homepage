import CoverImage from './cover-image'
import Date from './date'
import PostTitle from './post-title'

export default function PostHeader({
  title,
  coverImage,
  date,
}) {
  return (
    <>
      <div className="mb-6 text-lg mx-auto max-w-4xl">
        <Date dateString={date} />
      </div>
      <PostTitle>{title}</PostTitle>

      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} coverImage={coverImage} />
      </div>

    </>
  )
}
