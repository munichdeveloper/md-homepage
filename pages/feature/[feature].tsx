import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import Container from "../../components/container"
import Layout from "../../components/layout"
import PostCard from "../../components/post-card"
import PostTitle from "../../components/post-title"
import TopBar from "../../components/top-bar"
import features from "../../features.json"

export default function FeaturePage({ dePosts, enPosts }) {
    const router = useRouter()

    return (
        <Layout>
            <TopBar />
            <Container>
                {router.isFallback ?
                    <PostTitle>Loading…</PostTitle>
                    : (
                        <>
                            <div className="flex justify-center p-5">
                                <PostTitle>Artikel auf Englisch</PostTitle>
                            </div>
                            <article>
                                {enPosts && enPosts.length && enPosts.map(post =>
                                    <PostCard link={post.url} key={post.id} post={post} image={post.image} />
                                )}
                            </article>
                        </>
                    )
                }
            </Container>
        </Layout >
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
    const enPosts = resp.map(post => ({
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
            enPosts
        }
    }
}