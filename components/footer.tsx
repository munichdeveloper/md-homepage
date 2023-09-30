import Link from 'next/link'
import Container from './container'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-10 md:py-14 grid grid-cols-1 md:grid-cols-4">
          <div>
            <div className="font-bold mb-1 mt-7">Rechtliches</div>
            <div><Link href="/legal-notice">Impressum</Link></div>
            <div>Datenschutzerklärung</div>
            <div>Cookie-Einstellungen</div>
          </div>
          <div>
            <div className="font-bold mb-1 mt-7">Kontakt</div>
            <div>info@munich-developer.de</div>
            <div>(DE) +49 176 / 55 14 42 07</div>
          </div>
          <div>
            <div className="font-bold mb-1 mt-7">Über mich</div>
            <div>Wer ist munich developer?</div>
          </div>
          <div>
            <div className="font-bold mb-1 mt-7">Social Media</div>
            <div>YouTube</div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
