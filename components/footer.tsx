import Link from 'next/link'
import Container from './container'

function Footer({ t }) {
  return (
    <footer className="bg-accent-1 border-t border-accent-2 pb-5 md:pb-10">
      <Container>
        <div className="grid gap-x-2 rid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

          <div className='p-3 md:p-5'>
            <div className="footer-block-title">{t('about_header')}</div>
            <div><Link href="/about-us">{t('about_munich_dev')}</Link></div>
          </div>
          <div className='p-3 md:p-5'>
            <div className="footer-block-title">{t('contact_header')}</div>
            <div><Link href="/contact">{t('contact_form')}</Link></div>
            <div>info@munich-developer.de</div>
            <div>(DE) +49 176 / 55 14 42 07</div>
          </div>
          <div className='p-3 md:p-5'>
            <div className="footer-block-title">{t('legal_header')}</div>
            <div><Link href="/legal-notice">{t('legal_notice')}</Link></div>
            <div>{t('privacy_protection')}</div>
            <div>{t('cookie_settings')}</div>
          </div>
          <div className='p-3 md:p-5'>
            <div className="footer-block-title">{t('links_header')}</div>
            <div><Link href="/">{t('home')}</Link></div>
            <div><Link href="/blog">{t('blog')}</Link></div>
            <div><Link href="/hero/wir-erstellen-deine-webapp-kostenlos">{t('we_build_your_unicorn')}</Link></div>
          </div>
          <div className='p-3 md:p-5'>
            <div className="footer-block-title">{t('social_media_header')}</div>
            <div>YouTube</div>
          </div>

        </div>
      </Container>
    </footer>
  )
}

export default Footer