import { useTranslation, withTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from "next/link";
import Container from "../components/container";
import Entry from "../components/entry";
import Feature from "../components/feature";
import Headline from "../components/headline";
import Layout from "../components/layout";
import TopBar from "../components/top-bar";

function Home({ t }) {
  const { t: footerTranslations } = useTranslation('footer') // wtf?
  return (
    <Layout t={footerTranslations}>
      <div className="min-h-screen">
        <TopBar />
        <div className="max-w-[80rem] lg:max-w-[100rem] mx-auto md:py-3" >
          <Entry />
          <div className="md:px-20">
            <div className="center font-bold text-2xl md:text-5xl md:pt-10">{t('home.where_i_support')}</div>
            <div className="center pb-10 md:pb-12">
              <Link href="#features">
                <i className="arrow down p-[20px] md:p-[2rem]"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div id="features">
        <Headline id="nolowcode" title={t('home.no_and_low_code.title')} subtitle={t('home.no_and_low_code.subtitle')} />
        <Container>
          <div className="max-w-5xl mx-auto">
            <Feature
              link="/feature/nolowcode"
              title={t('home.no_and_low_code.feature1.title')}
              text={t('home.no_and_low_code.feature1.text')}
              orderFirst={false}
              imgSrc="https://wordpress.munich-developer.de/wp-content/uploads/2023/10/4421964.jpg    "
            />
            <Feature
              link="/feature/nolowcodemig"
              title={t('home.no_and_low_code.feature2.title')}
              text={t('home.no_and_low_code.feature2.text')}
              orderFirst={true}
              imgSrc="https://wordpress.munich-developer.de/wp-content/uploads/2023/10/5995339-scaled.jpg"
            />
            <Feature
              link="/feature/nolowcodeconsulting"
              title={t('home.no_and_low_code.feature3.title')}
              text={t('home.no_and_low_code.feature3.text')}
              imgSrc="https://wordpress.munich-developer.de/wp-content/uploads/2023/10/4380747.jpg"
              orderFirst={false}
            />
          </div>
        </Container>

        <Headline id="ki" title={t('home.ki.title')} subtitle={t('home.ki.subtitle')} />
        <Container>
          <div className="max-w-5xl mx-auto">
            <Feature
              link="/feature/ki"
              title={t('home.ki.feature1.title')}
              text={t('home.ki.feature1.text')}
              imgSrc="https://wordpress.munich-developer.de/wp-content/uploads/2023/10/36674.jpg"
              orderFirst={true}
            />
          </div>
        </Container>

        <Headline id="startup" title={t('home.startup.title')} subtitle={t('home.startup.subtitle')} />
        <Container>
          <div className="max-w-5xl mx-auto">
            <Feature
              link="/feature/landingpage"
              title={t('home.startup.feature1.title')}
              text={t('home.startup.feature1.text')}
              imgSrc="https://wordpress.munich-developer.de/wp-content/uploads/2023/10/OKP5E50.jpg"
              orderFirst={false}
            />
            <Feature
              link="/feature/reactdesign"
              title={t('home.startup.feature2.title')}
              text={t('home.startup.feature2.text')}
              imgSrc="https://wordpress.munich-developer.de/wp-content/uploads/2023/10/8090.jpg"
              orderFirst={true}
            />
            <Feature
              link="/feature/nextjsblog"
              title={t('home.startup.feature3.title')}
              text={t('home.startup.feature3.text')}
              orderFirst={true}
              imgSrc="https://wordpress.munich-developer.de/wp-content/uploads/2023/10/6597472-scaled.jpg"
            />
            <Feature
              link="/feature/auth"
              title={t('home.startup.feature4.title')}
              text={t('home.startup.feature4.text')}
              orderFirst={false}
              imgSrc="https://wordpress.munich-developer.de/wp-content/uploads/2023/10/5101874.jpg"
            />
          </div>
        </Container>

        <Headline title={t('home.creatives.title')} id="creatives" subtitle={t('home.creatives.subtitle')} />
        <Container>
          <div className="max-w-5xl mx-auto">
            <Feature
              link="/feature/portfoliopage"
              title={t('home.creatives.feature1.title')}
              text={t('home.creatives.feature1.text')}
              imgSrc="https://wordpress.munich-developer.de/wp-content/uploads/2023/10/20945195.jpg"
              orderFirst={false}
            />
          </div>
          <div className="max-w-5xl mx-auto">
            <Feature
              link="/feature/crm"
              title={t('home.creatives.feature2.title')}
              text={t('home.creatives.feature2.text')}
              imgSrc="https://wordpress.munich-developer.de/wp-content/uploads/2023/10/20945195.jpg"
              orderFirst={true}
            />
          </div>
        </Container>

        <Headline id="scraping" title={t('home.scraping.title')} subtitle={t('home.scraping.subtitle')} />
        <Container>
          <div className="max-w-5xl mx-auto">
            <Feature
              link="/feature/scraping_data_mining"
              title={t('home.scraping.feature1.title')}
              text={t('home.scraping.feature1.text')}
              imgSrc="https://wordpress.munich-developer.de/wp-content/uploads/2023/10/2150405630.jpg"
              orderFirst={false}
            />
          </div>
        </Container>

        <Headline id="other" title={t('home.other.title')} subtitle={t('home.other.subtitle')} />
        <Container>
          <div className="max-w-5xl mx-auto">
            <Feature
              link="/feature/softwaredevelopment_subscription"
              title={t('home.other.feature1.title')}
              text={t('home.other.feature1.text')}
              imgSrc="https://wordpress.munich-developer.de/wp-content/uploads/2023/10/Wavy_Tech-25_Single-04-3.jpg"
              orderFirst={true}
            />
            <Feature
              link="/feature/hosting_monitoring"
              title={t('home.other.feature2.title')}
              text={t('home.other.feature2.text')}
              imgSrc="https://wordpress.munich-developer.de/wp-content/uploads/2023/10/Wavy_Tech-25_Single-04-3.jpg"
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
      'common', 'entry', 'feature', 'footer'
    ])),
  },
})

export default withTranslation()(Home)