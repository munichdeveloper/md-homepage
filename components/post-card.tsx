import Link from "next/link";
import Date from '../components/date';
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import Tags from "./tags";

export default function PostCard({ post }) {
    return (

        <div className="flex flex-col md:flex-row bg-accent-1 rounded-[0.2rem] p-5">
            <div className="md:max-w-[30%] md:mr-5 flex items-center">
                <CoverImage title={""} coverImage={post.image} />
            </div>
            <div className="flex-grow flex flex-col">
                <div className="text-lg py-5 md:py-0">
                    <Date dateString={post.date} />
                </div>
                <div>
                    <PostTitle>{post.title}</PostTitle>
                    {post.tags && <Tags tags={post.tags} />}
                </div>
            </div>
        </div>
    )
}