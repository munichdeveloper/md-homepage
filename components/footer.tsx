import Link from 'next/link'
import Container from './container'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2 pb-5 md:pb-10">
      <Container>
        <div className="grid gap-x-2 rid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <div>
            <div className="footer-block-title">Links</div>
            <div><Link href="/blog">Blog</Link></div>
          </div>
          <div>
            <div className="footer-block-title">Kontakt</div>
            <div>info@munich-developer.de</div>
            <div>(DE) +49 176 / 55 14 42 07</div>
          </div>
          <div>
            <div className="footer-block-title">Über munich-developer.de</div>
            <div>Wer oder was ist munich developer?</div>
          </div>
          <div>
            <div className="footer-block-title">Social Media</div>
            <div>YouTube</div>
          </div>
          <div>
            <div className="footer-block-title">Rechtliches</div>
            <div><Link href="/legal-notice">Impressum</Link></div>
            <div>Datenschutzerklärung</div>
            <div>Cookie-Einstellungen</div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
