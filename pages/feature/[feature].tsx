import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import Container from "../../components/container"
import CoverImage from "../../components/cover-image"
import Date from '../../components/date'
import Layout from "../../components/layout"
import PostTitle from "../../components/post-title"
import TopBar from "../../components/top-bar"
import features from "./features.json"
import Tags from "../../components/tags"
import Link from "next/link"

export default function FeaturePage({ posts }) {
    const router = useRouter()
    const title = ""
    const imageUrl = "";

    return (
        <Layout>
            <TopBar />
            <Container>
                {router.isFallback ? (
                    <PostTitle>Loading…</PostTitle>
                ) : (
                    <>
                        <article>
                            {posts.map(post => (
                                <Link key={post.id} href={post.url} target="_blank">
                                    <div className="flex flex-col md:flex-row bg-accent-1 rounded-[0.2rem] p-5">
                                        <div className="md:max-w-[30%] md:mr-5 flex items-center">
                                            <CoverImage title={title} coverImage={post.image} />
                                        </div>
                                        <div className="flex-grow flex flex-col">
                                            <div className="text-lg py-5 md:py-0">
                                                <Date dateString={post.date} />
                                            </div>
                                            <div>
                                                <PostTitle>{post.title}</PostTitle>
                                                <Tags tags={post.tags} />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </article>
                    </>
                )}
            </Container>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async ({
    params,
}) => {
    const requestOptions = {
        method: 'GET',
        headers: { 'accept': 'application/vnd.forem.api-v1+json' }
    };

    const feature = params?.feature as string
    const prom = features[feature]
        .external_resources["dev.to"]
        .map(async url => await fetch(url, requestOptions)
            .then(response => response.json()))

    const resp = await Promise.all(prom)
    const posts = resp.map(post => ({
        id: post.id,
        title: post.title,
        content: post.description,
        url: post.url,
        image: post.cover_image,
        date: post.published_at,
        tags: post.tags
    }))

    return {
        props: {
            posts
        }
    }
}