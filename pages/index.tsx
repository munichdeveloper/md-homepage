import { withTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from "next/link";
import Container from "../components/container";
import Entry from "../components/entry";
import Feature from "../components/feature";
import Headline from "../components/headline";
import Layout from "../components/layout";
import TopBar from "../components/top-bar";

function Home({ t }) {

  return (
    <Layout>
      <div className="min-h-screen">
        <TopBar />
        <div className="max-w-[80rem] lg:max-w-[100rem] mx-auto md:py-3" >
          <Entry />
          <div className="md:px-20">
            <div className="center font-bold text-2xl md:text-5xl md:pt-10">... und hierbei unterstütze ich gerne!</div>
            <div className="center pb-10 md:pb-12">
              <Link href="#features">
                <i className="arrow down p-[20px] md:p-[2rem]"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div id="features">
        <Headline id="nolowcode" title={t('no_and_low_code')} subtitle="Software Komponenten und Funktionalitäten aus dem No- und Low-Code Bereich,
                    z.B.: Softr, Bubble, Airtable, Make (Integromat), Zapier usw." />
        <Container>
          <div className="max-w-5xl mx-auto">
            <Feature
              link="/feature/nolowcode"
              title="Entwicklung einer No- / Low-Code Webanwendung"
              text="Webapp Entwicklung unter Einsatz von No- bzw. Low-Code Plattformen"
              orderFirst={false}
              imgSrc="https://nft-miner.com/wp-content/uploads/2023/10/4421964.jpg    "
            />
            <Feature
              link="/feature/nolowcodemig"
              title="No- / Low-Code Migration"
              text="Daten in oder aus einer No- / Low-Code Anwendung migrieren"
              orderFirst={true}
              imgSrc="https://nft-miner.com/wp-content/uploads/2023/10/5995339-scaled.jpg"
            />
            <Feature
              link="/feature/nolowcodeconsulting"
              title="No- / Low-Code Consulting"
              text="Beratung zu möglichen Einsatzszenarien von No- und / oder Low-Code"
              imgSrc="https://nft-miner.com/wp-content/uploads/2023/10/4380747.jpg"
              orderFirst={false}
            />
          </div>
        </Container>

        <Headline id="ki" title="Künstliche Intelligenz & ChatGPT" subtitle="Effizienzsteigerung im Unternehmen mit KI" />
        <Container>
          <div className="max-w-5xl mx-auto">
            <Feature
              link="/feature/ki"
              title="Einfache Kommunikation zwischen Mensch und Maschine"
              text="Schnittstellen im Handumdrehen für Menschen zugänglich machen"
              imgSrc="https://nft-miner.com/wp-content/uploads/2023/10/36674.jpg"
              orderFirst={true}
            />
          </div>
        </Container>

        <Headline id="startup" title="Startup" subtitle="Softwarekomponenten für Startups und KMUs" />
        <Container>
          <div className="max-w-5xl mx-auto">
            <Feature
              link="/feature/landingpage"
              title="Landing Page"
              text="Landing Page mit Hero section, Email / Newsletter Subscription"
              imgSrc="https://nft-miner.com/wp-content/uploads/2023/10/OKP5E50.jpg"
              orderFirst={false}
            />
            <Feature
              link="/feature/reactdesign"
              title="React Design & Layout"
              text="Ein React Design und das Layout erstellen aus Vorlage, z.B. Figma"
              imgSrc="https://nft-miner.com/wp-content/uploads/2023/10/8090.jpg"
              orderFirst={true}
            />
            <Feature
              link="/feature/nextjsblog"
              title="Blog mit NextJS + Wordpress Backend"
              text="Blog umgesetzt mit NextJS Frontend und einem Wordpress Backend"
              orderFirst={true}
              imgSrc="https://nft-miner.com/wp-content/uploads/2023/10/6597472-scaled.jpg"
            />
            <Feature
              link="/feature/auth"
              title="Authentifizierung"
              text="Authentifizierung mit React / NextJS und Spring Boot über z.B. Magic Links"
              orderFirst={false}
              imgSrc="https://nft-miner.com/wp-content/uploads/2023/10/5101874.jpg"
            />
          </div>
        </Container>

        <Headline title="Creatives" id="creatives" subtitle="Softwarekomponenten für Kreative und Selbstständige" />
        <Container>
          <div className="max-w-5xl mx-auto">
            <Feature
              link="/feature/portfoliopage"
              title="Portfolio Website"
              text="Portfolio Seite für z.B. Bewerbungen"
              imgSrc="https://nft-miner.com/wp-content/uploads/2023/10/20945195.jpg"
              orderFirst={false}
            />
          </div>
          <div className="max-w-5xl mx-auto">
            <Feature
              link="/feature/crm"
              title="Leightweight CRM"
              text="Schnelle und einfache CRM Lösungen für den schmalen Taler"
              imgSrc="https://nft-miner.com/wp-content/uploads/2023/10/20945195.jpg"
              orderFirst={true}
            />
          </div>
        </Container>

        <Headline id="scraping" title="Webscraping" subtitle="Daten direkt von Websites auslesen und gewinnbringend im eigenen Unternehmen nutzen" />
        <Container>
          <div className="max-w-5xl mx-auto">
            <Feature
              link="/feature/scraping_data_mining"
              title="Webscraping & Data-Mining"
              text="Webscraper auf Basis von Selenium oder No-Code, z.B. Bardeen AI "
              imgSrc="https://nft-miner.com/wp-content/uploads/2023/10/2150405630.jpg"
              orderFirst={false}
            />
          </div>
        </Container>

        <Headline id="other" title="Sonstiges" subtitle="Software-Abo, Hosting, Monitoring, usw." />
        <Container>
          <div className="max-w-5xl mx-auto">
            <Feature
              link="/feature/softwaredevelopment_subscription"
              title="Softwareentwicklung Abo"
              text="Monatliche / Jährlich laufende Abos mit abgestimmten Meilensteinen und Lieferungen. Individuelle Vereinbarungen."
              imgSrc="https://nft-miner.com/wp-content/uploads/2023/10/Wavy_Tech-25_Single-04-3.jpg"
              orderFirst={true}
            />
            <Feature
              link="/feature/hosting_monitoring"
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

export const getStaticProps = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'de', [
      'common'
    ])),
  },
})

export default withTranslation('common')(Home)