import Head from "next/head";
import Container from "../components/container";
import Header from "../components/header";
import Layout from "../components/layout";
import PostTitle from "../components/post-title";
import { useRouter } from "next/router";

export default function LegalNotice() {
    const router = useRouter()

    return (
        <Layout>
            <Container>
                <Header />
                {router.isFallback ? (
                    <PostTitle>Loading…</PostTitle>
                ) : (
                    <>
                        <article>
                            <Head>
                                <title>
                                    munich developer | Quelltext aus München
                                </title>
                            </Head>
                            Folgt in Kürze!
                        </article>
                    </>
                )}
            </Container>
        </Layout>
    )
}