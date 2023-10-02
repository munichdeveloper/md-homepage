import Head from 'next/head'
import Script from 'next/script'
import Footer from './footer'
import Meta from './meta'
import SubscribeBox from './subscribe-box'

export default function Layout({ children }) {
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
        <main>{children}</main>
      </div>
      <SubscribeBox />
      <Footer />
    </>
  )
}
