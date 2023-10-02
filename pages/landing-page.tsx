import Link from "next/link";
import Container from "../components/container";
import Feature from "../components/feature";
import Headline from "../components/headline";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Profile from "../components/profile";

export default function LandingPage() {
    return (
        <Layout>
            <div className="min-h-screen">
                <Intro />
                <div className="max-w-[55rem] mx-auto md:py-10" >
                    <Profile />
                    <div className="md:p-20">
                        <div className="center font-bold text-2xl md:text-5xl md:pt-10">... und hierbei unterstütze ich Sie gerne!</div>
                        <div className="center pb-10 md:pb-12">
                            <Link href="#features">
                                <i className="arrow down p-[20px] md:p-[2rem]"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div id="features">
                <Headline title="No- und Low-Code" subtitle="Software Komponenten und Funktionalitäten aus dem No- und Low-Code Bereich,
                    z.B.: Softr, Bubble, Airtable, Make (Integromat), Zapier usw." />
                <Container>
                    <div className="max-w-5xl mx-auto">
                        <Feature
                            title="No- / Low-Code Migration"
                            text="Daten in oder aus einer No- / Low-Code Anwendung migrieren"
                            rtl={true}
                            imgSrc="https://nft-miner.com/wp-content/uploads/2023/10/5995339-scaled.jpg"
                        />
                        <Feature
                            title="No- / Low-Code Consulting"
                            text="Beratung zu möglichen Einsatzszenarien von No- und / oder Low-Code"
                            imgSrc="https://nft-miner.com/wp-content/uploads/2023/10/4380747.jpg" rtl={false} />
                    </div>
                </Container>

                <Headline title="Startup" subtitle="Softwarekomponenten für Startups und KMUs" />
                <Container>
                    <div className="max-w-5xl mx-auto">
                        <Feature
                            title="Landing Page"
                            text="Landing Page mit Hero section, Email / Newsletter Subscription"
                            imgSrc="https://nft-miner.com/wp-content/uploads/2023/10/OKP5E50.jpg" rtl={false} />
                        <Feature
                            title="Blog mit NextJS + Wordpress Backend"
                            text="Blog umgesetzt mit NextJS Frontend und einem Wordpress Backend"
                            rtl={true}
                            imgSrc="https://nft-miner.com/wp-content/uploads/2023/10/6597472-scaled.jpg" />
                    </div>
                </Container>

                <Headline title="Creatives" subtitle="Softwarekomponenten für Kreative und Selbstständige" />
                <Container>
                    <div className="max-w-5xl mx-auto">
                        <Feature
                            title="Portfolio Website"
                            text="Portfolio Seite für z.B. Bewerbungen"
                            imgSrc="https://nft-miner.com/wp-content/uploads/2023/10/20945195.jpg" rtl={false} />
                    </div>
                </Container>

            </div>
        </Layout>
    )
}