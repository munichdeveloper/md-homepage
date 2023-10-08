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
                            {posts && posts.length > 0 &&
                                <article>
                                    {posts.map(({ node }) =>
                                        <div key={node.id}>
                                            <PostCard post={node} image={node.featuredImage.node.sourceUrl} />
                                        </div>
                                    )}
                                </article>
                            }
                            {
                                (!posts || posts.length <= 0) &&
                                <div className="text-center font-bold">
                                    <div className="p-1">Noch keine Beiträge in dieser Kategorie vorhanden.</div>
                                    <div className="p-1">Abonniere den Newsletter, um gleich benachrichtigt zu werden, sobald es was neues gibt!</div>
                                    <div className="center pb-10 md:pb-12">
                                        <i className="arrow down p-[20px] md:p-[2rem]"></i>
                                    </div>
                                </div>
                            }
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