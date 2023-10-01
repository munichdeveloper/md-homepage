import Head from "next/head";
import Container from "../components/container";
import Feature from "../components/feature";
import Intro from "../components/intro";
import Layout from "../components/layout";

export default function LandingPage() {
    return (
        <Layout>
            <Container>
                <Head>
                    <title>munich-developer | Quelltext aus München</title>
                </Head>
                <Intro />
                <div className="max-w-5xl mx-auto">
                    <Feature
                        title="Landing Page"
                        text="Landing Page mit Hero section, Email / Newsletter Subscription"
                        imgSrc="https://nft-miner.com/wp-content/uploads/2023/10/OKP5E50.jpg" />
                    <Feature
                        title="Blog mit NextJS + Wordpress Backend"
                        text="Blog umgesetzt mit NextJS Frontend und einem Wordpress Backend"
                        rtl={true}
                        imgSrc="https://nft-miner.com/wp-content/uploads/2023/10/6597472-scaled.jpg" />
                    <Feature
                        title="Portfolio Website"
                        text="Portfolio Seite für z.B. Bewerbungen"
                        imgSrc="https://nft-miner.com/wp-content/uploads/2023/10/20945195.jpg"
                    />
                    <Feature
                        title="No- / Low-Code Migration"
                        text="Daten in oder aus einer No- / Low-Code Anwendung migrieren"
                        rtl={true}
                        imgSrc="https://nft-miner.com/wp-content/uploads/2023/10/5995339-scaled.jpg"
                    />
                    <Feature
                        title="No- / Low-Code Consulting"
                        text="Beratung zu möglichen Einsatzszenarien von No- und / oder Low-Code"
                        imgSrc="https://nft-miner.com/wp-content/uploads/2023/10/4380747.jpg"
                    />
                </div>
            </Container>
        </Layout>
    )
}