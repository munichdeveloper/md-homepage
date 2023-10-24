import Head from 'next/head'
import Script from 'next/script'
import Footer from './footer'
import Meta from './meta'
import SubscribeBox from './subscribe-box'

export default function Layout({ children, t }) {
  return (
    <>
      <Meta />
      <div>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-13CBN0G7M1" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-13CBN0G7M1');
        `}
        </Script>
        <Head>
          <title>munich-developer | Quelltext aus München</title>
        </Head>
        <meta
          name="description"
          content="munich-developer.de - Dein Softwareentwickler aus München. Wir bauen innovative Lösungen mit Hilfe von No- und Low-Code, Künstlicher Intelligenz und den modernsten Tech-Stacks!"
          key="desc"
        />
        <main>{children}</main>
      </div>
      <SubscribeBox />
      <Footer t={t} />
    </>
  )
}
