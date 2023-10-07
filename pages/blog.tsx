import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import Container from "../components/container";
import Layout from "../components/layout";
import PostCard from "../components/post-card";
import PostTitle from "../components/post-title";
import TopBar from "../components/top-bar";
import { getAllPostsForHome } from "../lib/api";

export default function Blog({ posts }) {
    const router = useRouter()

    return (
        <Layout>
            <TopBar />
            <Container>
                {router.isFallback ?
                    <PostTitle>Loading…</PostTitle>
                    : (
                        <>
                            {posts && posts.length && <article>
                                {posts.map(({ node }) =>
                                    <PostCard key={node.id} post={node} />
                                )}
                            </article>}
                        </>
                    )
                }
            </Container>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async ({
    params,
    preview = false,
    previewData,
}) => {
    const posts = await getAllPostsForHome(preview)
    return {
        props: {
            preview,
            posts: posts.edges
        },
        revalidate: 10,
    }
}