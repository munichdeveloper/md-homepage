import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Container from "../components/container";
import Layout from "../components/layout";
import TopBar from "../components/top-bar";

export default function AboutUs() {
    const { t } = useTranslation('footer') // wtf...warum..

    return (
        <Layout t={t}>
            <TopBar />
            <Container>
                <p className="text-xl md:text-2xl p-3 pb-5">Hi! Ich bin Johannes, Senior Software Entwickler aus München.</p>
                <p className="px-3">Seit mehr als 15 Jahren begleite ich Unternehmen auf dem Weg zur digitalen Transformation.</p>
                <p className="px-3">Ich bin der <strong>Gründer von munich developer</strong>, eine kleine Software Firma mit einem (noch) recht kleinen und oftmals wechselndem Team aus Freelancern, Freunden und Bekannten, die mich zeitweise unterstützen.</p>
                <p className="px-3 pt-5">Anfragen für Zusammenarbeiten gerne über das <u>Kontaktformular</u> oder per E-Mail:
                    <strong> info@munich-developer.de</strong>
                </p>
            </Container>
        </Layout>
    );
}

export const getStaticProps = async ({
    locale,
}) => ({
    props: {
        ...(await serverSideTranslations(locale ?? 'de', [
            'footer'
        ])),
    },
})