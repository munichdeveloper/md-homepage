import Head from "next/head";
import Container from "../components/container";
import Layout from "../components/layout";
import Intro from "../components/intro";

export default function LandingPage() {
    return (
        <Layout>
            <Container>
                <Head>
                    <title>munich-developer | Quelltext aus München</title>
                </Head>
                <Intro />
            </Container>
        </Layout>
    )
}