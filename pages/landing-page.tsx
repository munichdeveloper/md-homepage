import Link from "next/link";
import Container from "../components/container";
import Entry from "../components/entry";
import Feature from "../components/feature";
import Headline from "../components/headline";
import TopBar from "../components/top-bar";
import Layout from "../components/layout";

export default function LandingPage() {
    return (
        <Layout>
            <div className="min-h-screen">
                <TopBar />
                <div className="max-w-[80rem] lg:max-w-[100rem] mx-auto md:py-3" >
                    <Entry />
                    <div className="md:px-20">
                        <div className="center font-bold text-2xl md:text-5xl md:pt-10">... und hierbei unterstütze ich Dich gerne!</div>
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
                            title="Entwicklung einer No- / Low-Code Webanwendung"
                            text="Webapp Entwicklung unter Einsatz von No- bzw. Low-Code Plattformen"
                            orderFirst={false}
                            imgSrc="https://nft-miner.com/wp-content/uploads/2023/10/4421964.jpg    "
                        />
                        <Feature
                            title="No- / Low-Code Migration"
                            text="Daten in oder aus einer No- / Low-Code Anwendung migrieren"
                            orderFirst={true}
                            imgSrc="https://nft-miner.com/wp-content/uploads/2023/10/5995339-scaled.jpg"
                        />
                        <Feature
                            title="No- / Low-Code Consulting"
                            text="Beratung zu möglichen Einsatzszenarien von No- und / oder Low-Code"
                            imgSrc="https://nft-miner.com/wp-content/uploads/2023/10/4380747.jpg"
                            orderFirst={false} />
                    </div>
                </Container>

                {/* <Headline title="Künstliche Intelligenz & ChatGPT" subtitle="Effizienzsteigerung im Unternehmen mit KI" />
                <Container>
                    <div className="max-w-5xl mx-auto">
                      
                    </div>
                </Container> */}

                <Headline title="Startup" subtitle="Softwarekomponenten für Startups und KMUs" />
                <Container>
                    <div className="max-w-5xl mx-auto">
                        <Feature
                            title="Landing Page"
                            text="Landing Page mit Hero section, Email / Newsletter Subscription"
                            imgSrc="https://nft-miner.com/wp-content/uploads/2023/10/OKP5E50.jpg"
                            orderFirst={false} />
                        <Feature
                            title="Blog mit NextJS + Wordpress Backend"
                            text="Blog umgesetzt mit NextJS Frontend und einem Wordpress Backend"
                            orderFirst={true}
                            imgSrc="https://nft-miner.com/wp-content/uploads/2023/10/6597472-scaled.jpg" />
                        <Feature
                            title="Authentifizierung"
                            text="Authentifizierung mit React / NextJS und Spring Boot über z.B. Magic Links"
                            orderFirst={false}
                            imgSrc="https://nft-miner.com/wp-content/uploads/2023/10/5101874.jpg" />
                    </div>
                </Container>

                <Headline title="Creatives" subtitle="Softwarekomponenten für Kreative und Selbstständige" />
                <Container>
                    <div className="max-w-5xl mx-auto">
                        <Feature
                            title="Portfolio Website"
                            text="Portfolio Seite für z.B. Bewerbungen"
                            imgSrc="https://nft-miner.com/wp-content/uploads/2023/10/20945195.jpg"
                            orderFirst={false} />
                    </div>
                    <div className="max-w-5xl mx-auto">
                        <Feature
                            title="Leightweight CRM"
                            text="Schnelle und einfache CRM Lösungen für den schmalen Taler"
                            imgSrc="https://nft-miner.com/wp-content/uploads/2023/10/20945195.jpg"
                            orderFirst={true} />
                    </div>
                </Container>

                <Headline title="Webscraping" subtitle="Daten direkt von Websites auslesen und gewinnbringend im eigenen Unternehmen nutzen" />
                <Container>
                    <div className="max-w-5xl mx-auto">
                        <Feature
                            title="Webscraper Softwarepaket"
                            text="Webscraper auf Basis von Selenium oder No-Code, z.B. Bardeen AI "
                            imgSrc="https://nft-miner.com/wp-content/uploads/2023/10/20945195.jpg"
                            orderFirst={false} />
                    </div>
                </Container>

                <Headline title="Sonstiges" subtitle="Software-Abo, Hosting, Monitoring, usw." />
                <Container>
                    <div className="max-w-5xl mx-auto">
                        <Feature
                            title="Softwareentwicklung Abo"
                            text="Monatliche / Jährlich laufende Abos mit abgestimmten Meilensteinen und Lieferungen. Individuelle Vereinbarungen."
                            imgSrc="https://nft-miner.com/wp-content/uploads/2023/10/Wavy_Tech-25_Single-04-3.jpg"
                            orderFirst={true}
                        />
                        <Feature
                            title="Hosting & Monitoring"
                            text="Individuelle Lösungen und Angebote um ihre Apps durch uns hosten und monitoren zu lassen"
                            imgSrc="https://nft-miner.com/wp-content/uploads/2023/10/Wavy_Tech-25_Single-04-3.jpg"
                            orderFirst={false}
                        />
                    </div>
                </Container>

            </div>
        </Layout>
    )
}