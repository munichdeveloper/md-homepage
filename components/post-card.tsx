import Link from 'next/link';
import Date from '../components/date';
import CoverImage from "./cover-image";
import Tags from "./tags";

export default function PostCard({ post, image, link }) {
    return (
        <div className="flex flex-col md:flex-row bg-accent-1 rounded-[0.2rem] p-5 mb-5 md:mb-8 shadow-md">
            <div className="md:max-w-[30%] md:mr-5 flex items-center">
                <CoverImage title={""} coverImage={image} slug={link} />
            </div>
            <div className="flex-grow flex flex-col">
                <div className="md:text-lg pb-1 pt-3 md:py-0">
                    <Date dateString={post.date} />
                </div>
                <div className='text-xl md:text-2xl lg:text-3xl font-bold tracking-tighter leading-tight md:leading-none max-w-4xl'>
                    <Link href={link} className="hover:underline"
                        dangerouslySetInnerHTML={{ __html: post.title }}
                    >
                    </Link>
                    <div className='hidden md:block'>{post?.tags?.nodes && <Tags tags={post.tags.nodes} />}</div>
                </div>
            </div>
        </div>
    )
}