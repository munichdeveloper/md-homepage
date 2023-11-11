import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import { useRouter } from "next/router";
import Container from "../components/container";
import Layout from "../components/layout";
import PostTitle from "../components/post-title";
import TopBar from "../components/top-bar";

export default function CampaignConfirmation() {
    const router = useRouter()
    const { t } = useTranslation(['campaign-confirmation'])
    const { t: footerTranslations } = useTranslation('footer') // omg...funkt nicht, wenn es im vorigen als Array mit drin ist..

    return (
        <Layout t={footerTranslations}>
            <TopBar />
            <Container>
                {router.isFallback ? (
                    <PostTitle>Loading…</PostTitle>
                ) : (
                    <>
                        <article>
                            <div className="mb-[5rem] md:mb-[10rem]">

                                <section className="flex items-center flex-col">
                                    <h1 className="text-2xl md:text-5xl font-bold md:pb-10 text-center">{t('thanks_for_your_interest')}</h1>
                                    <div className="p-5 md:p-8">
                                        <div className="flex flex-col justify-center text-center font-bold md:text-xl">
                                            <span>{t('we_will_contact_you')}</span>
                                            <span>{t('you_will_get_mail_for_confirm')}</span>
                                        </div>
                                    </div>
                                    <div className="p-5 md:p-10 flex flex-col justify-center items-center">
                                        <Image
                                            width={700}
                                            height={300}
                                            alt="Image by benzoix"
                                            src="https://wordpress.munich-developer.de/wp-content/uploads/2023/09/well-done-handsome-bearded-man-showing-thumb-up-praising-good-work-recommend-excellent-product-like-scaled.jpg"
                                            className="rounded-[999rem]"
                                        />
                                        <div className="text-sm text-[#00000070]"><a target="_blank" href="https://de.freepik.com/fotos-kostenlos/gut-gemachter-gutaussehender-baertiger-mann-der-den-daumen-nach-oben-zeigt-und-gute-arbeit-lobt-empfiehlt-ein-ausgezeichnetes-produkt-wie_54678200.htm#&position=2&from_view=search&track=ais">Image by benzoix</a> on Freepik</div>
                                    </div>
                                    <div className="text-center text-sm mt-5">
                                        <div>
                                            {t('in_case_no_mail')}
                                        </div>
                                        <div>
                                            {t('in_case_still_no_mail')}
                                        </div>
                                        <div className="font-bold">
                                            info@munich-developer.de
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </article>
                    </>
                )}
            </Container>
        </Layout>
    )
}

export const getStaticProps = async ({
    locale,
}) => ({
    props: {
        ...(await serverSideTranslations(locale ?? 'de', [
            'campaign-confirmation', 'footer', 'common'
        ])),
    },
})