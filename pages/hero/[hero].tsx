import axios from "axios";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import Container from "../../components/container";
import Layout from "../../components/layout";
import PostTitle from "../../components/post-title";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Trans, useTranslation, withTranslation } from "next-i18next";

function HeroPage({ hero, t }) {
    const router = useRouter()
    const { t: footerTranslations } = useTranslation('footer') // omg...funkt nicht, wenn es im vorigen als Array mit drin ist..

    async function submitForm(event) {
        event.preventDefault();
        const values = event.target;

        const email = values.email.value;
        var bodyFormData = new FormData();
        bodyFormData.append('fields[email]', email);

        const resp = await axios(
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                method: 'post',
                url: 'https://assets.mailerlite.com/jsonp/471723/forms/100780932077717361/subscribe',
                data: bodyFormData
            }
        );

        const respAirtable = await axios({
            method: 'post',
            headers: { Authorization: 'Bearer patfJeBOJOVq0LW1d.4ae418ebe66e2d0211d154a040673d082b4c1908cf18e3bfc32704250a778688' },
            url: 'https://api.airtable.com/v0/app4l0JNBgjCRqwCf/Table%201',
            data: {
                records: [
                    {
                        fields: {
                            Name: values.name.value,
                            Email: values.email.value,
                            idea_description: values.idea.value,
                            features_description: values.app_description.value,
                            questions: values.questions.value,
                            campaign: hero
                        }
                    }
                ]
            }
        });

        if (respAirtable.status == 200) {
            router.push('/campaign-confirmation');
        }
    }

    return (
        <Layout t={footerTranslations}>
            <div className="min-h-screen">
                <div className="max-w-[80rem] lg:max-w-[100rem] mx-auto md:py-3">
                    <Container>
                        {router.isFallback ?
                            <PostTitle>Loading…</PostTitle>
                            : (
                                <>
                                    <div>
                                        <div className="flex flex-col flex items-center">
                                            <h1 className="flex flex-col md:flex-row items-start md:items-end text-3xl md:text-6xl font-bold text-center p-5 md:p-10">
                                                <Trans t={t}
                                                    i18nKey="headline"
                                                    components={[<span key={1}></span>,
                                                    <span key={2} className="text-4xl md:text-7xl md:px-3 leading-10"></span>,
                                                    <span key={3} className="text-4xl md:text-7xl md:px-3"></span>]}>
                                                    {t('headline')}
                                                </Trans>
                                            </h1>
                                            <div className="flex flex-col md:flex-row items-start md:items-end text-3xl md:text-6xl font-bold text-center p-1 md:p-3">
                                                {t('for_free')} :-)
                                            </div>

                                            <div className="text-2xl text-center p-5 flex flex-col md:flex-row order-1">
                                                <p className="p-3">
                                                    <Trans t={t}
                                                        i18nKey="paragraph1"
                                                        components={[<span key={4} className='font-bold'></span>]}>
                                                        {t('paragraph1')}
                                                    </Trans>
                                                </p>
                                                <p className="p-3">
                                                    <Trans t={t}
                                                        i18nKey="paragraph2"
                                                        components={[<span key={5} className='font-bold'></span>]}>
                                                        {t('paragraph2')}
                                                    </Trans>
                                                </p>
                                                <p className="p-3">
                                                    <Trans t={t}
                                                        i18nKey="paragraph3"
                                                        components={[<span key={6} className='font-bold'></span>]}>
                                                        {t('paragraph3')}
                                                    </Trans>
                                                </p>
                                            </div>
                                            <div className="p-5 md:p-10 flex flex-col justify-center">
                                                <div><Image className="rounded-[1rem] shadow-medium" alt="" width="700" height="300" src="https://nft-miner.com/wp-content/uploads/2023/10/person-points-camera-scaled.jpg" /></div>
                                                <div className="text-sm text-[#00000070]"><a target="_blank" href="https://www.freepik.com/free-photo/person-points-camera_7608056.htm">Image by KamranAydinov</a> on Freepik</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col max-w-4xl mx-auto border border-black rounded-md text-xl p-3 mt-5 md:mt-[5rem]">
                                        <div className="py-3">
                                            <p className="font-bold">❓ {t('who_are_we')}</p>
                                            <p className="pl-8">
                                                <Trans t={t}
                                                    i18nKey="who_are_we_response"
                                                    components={[<span key={7} className="font-semibold"></span>]}>
                                                    {t('who_are_we_response')}
                                                </Trans>
                                            </p>
                                        </div>
                                        <div className="py-3">
                                            <p className="font-bold">❓ {t('what_are_we_doing')}</p>
                                            <p className="pl-8">
                                                <Trans t={t}
                                                    i18nKey="what_are_we_doing_response"
                                                    components={[<span key={8} className="font-semibold"></span>]}>
                                                    {t('what_are_we_doing_response')}
                                                </Trans>
                                            </p>
                                        </div>
                                        <div className="py-3">
                                            <p className="font-bold">❓ {t('what_technologies')}</p>
                                            <p className="pl-8">
                                                <Trans t={t}
                                                    i18nKey="what_technologies_response"
                                                    components={[<span key={9} className="font-semibold"></span>]}>
                                                    {t('what_technologies_response')}
                                                </Trans>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mx-auto max-w-4xl text-2xl md:text-4xl font-semibold text-center mt-[3rem] md:mt-[4rem]">
                                        <div>{t('sounds_good')}</div>
                                    </div>
                                    <div className="mx-auto max-w-4xl text-xl md:text-2xl text-center">
                                        <div>{t('apply_here')}</div>
                                    </div>
                                    <div className="flex justify-center mt-2 md:mt-[3rem]">
                                        <form onSubmit={submitForm}>
                                            <div className="grid md:grid-cols-3 items-center">
                                                <div className="form-label">{t('name_label')}</div>
                                                <div className="p-1 col-span-2">
                                                    <input required name="name" className="form-input p-2" type="text" placeholder={t('name_placeholder')} />
                                                </div>
                                                <div className="form-label">{t('mail_label')}</div>
                                                <div className="p-1 col-span-2">
                                                    <input name="email" className="form-input p-2 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500" type="email" placeholder={t('mail_placeholder')}
                                                        required
                                                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                                    />
                                                </div>
                                                <div className="form-label">{t('idea_label')}</div>
                                                <div className="p-1 col-span-2">
                                                    <textarea required name="idea" className="form-input p-2" rows={10}
                                                        placeholder={t('idea_placeholder')} />
                                                </div>
                                                <div className="form-label">{t('app_desc_label')}</div>
                                                <div className="p-1 col-span-2">
                                                    <textarea required name="app_description" className="form-input p-2" rows={10}
                                                        placeholder={t('app_desc_placeholder')} />
                                                </div>
                                                <div className="form-label">{t('questions_label')}</div>
                                                <div className="p-1 col-span-2">
                                                    <textarea required name="questions" className="form-input p-2" rows={10}
                                                        placeholder={t('questions_placeholder')} />
                                                </div>
                                            </div>
                                            <div className="text-center pt-5 md:pt-10">
                                                <div>
                                                    <Trans t={t}
                                                        i18nKey="note1"
                                                        components={[<strong key={10}></strong>]}>
                                                        {t('note1')}
                                                    </Trans>
                                                </div>
                                                <div>
                                                    <Trans t={t}
                                                        i18nKey="note2"
                                                        components={[<strong key={11}></strong>]}>
                                                        {t('note2')}
                                                    </Trans>
                                                </div>
                                                <div>
                                                    <Trans t={t}
                                                        i18nKey="note3"
                                                        components={[<strong key={12}></strong>]}>
                                                        {t('note3')}
                                                    </Trans>
                                                </div>
                                                <div>
                                                    <Trans t={t}
                                                        i18nKey="note4"
                                                        components={[<strong key={13}></strong>]}>
                                                        {t('note4')}
                                                    </Trans>
                                                </div>
                                            </div>
                                            <div className="flex flex-col justify-center items-center pt-5 md:pt-10">
                                                <div>
                                                    <button
                                                        className="border border-black border-2 border-dotted m-3 md:m-10 rounded-[2rem] p-3 bg-[#76D0D280] hover:scale-110 duration-300 hover:border-solid" type="submit">
                                                        <span className="font-semibold text-xl">{t('i_understand')} :-)</span>
                                                    </button>
                                                </div>
                                                <div className="text-center text-2xl font-bold pt-10 md:pt-[6rem]">
                                                    {t('good_luck')} :-)
                                                </div>
                                                <div className="flex flex-col">
                                                    <div><Image className="rounded-[2rem] shadow-medium" alt="" width="500" height="300" src="https://nft-miner.com/wp-content/uploads/2023/10/amazed-man-showing-thumbsup-approve-praise-something-awesome-cool-thing-standing-light-blue-scaled.jpg" /></div>
                                                    <div className="text-sm text-[#00000070]"><a target="_blank" href="https://www.freepik.com/free-photo/amazed-man-showing-thumbsup-approve-praise-something-awesome-cool-thing-standing-light-blue_54678251.htm#page=7&query=good%20luck&position=45&from_view=search&track=ais">Image by benzoix</a> on Freepik</div>
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                </>
                            )
                        }
                    </Container>
                </div>
            </div>
        </Layout >
    )
}


export const getServerSideProps: GetServerSideProps = async ({
    params, locale
}) => {
    const hero = params?.hero as string

    return {
        props: {
            hero,
            ...(await serverSideTranslations(locale ?? 'de', [
                'hero', 'footer'
            ]))
        }
    }
}

export default withTranslation(['hero', 'footer'])(HeroPage)