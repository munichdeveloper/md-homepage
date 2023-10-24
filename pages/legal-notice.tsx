import { useTranslation } from "next-i18next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Container from "../components/container";
import Header from "../components/header";
import Layout from "../components/layout";
import PostTitle from "../components/post-title";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function LegalNotice() {
    const router = useRouter()
    const { t } = useTranslation('footer') // wtf...warum..

    return (
        <Layout t={t}>
            <Container>
                <Header />
                {router.isFallback ? (
                    <PostTitle>Loading…</PostTitle>
                ) : (
                    <>
                        <article className="p-3">
                            <Head>
                                <title>
                                    munich developer | Quelltext aus München
                                </title>
                            </Head>
                            <h1 className="text-2xl md:text-4xl py-3">Impressum</h1>
                            <p>munich developer - Johannes Hinkov</p>
                            <p>Am Hanselbrunn 25</p>
                            <p>85586 Poing</p>
                        </article>
                        <article className="p-3">
                            Alle auf der Webseite verwendeten Bilder stammen von: <strong><Link target="_blank" href="https://www.freepik.com/">https://www.freepik.com</Link></strong>
                        </article>
                    </>
                )}
            </Container>
        </Layout>
    )
}

export const getStaticProps = async ({
    locale,
}) => ({
    props: {
        ...(await serverSideTranslations(locale ?? 'de', [
            'footer'
        ])),
    },
})