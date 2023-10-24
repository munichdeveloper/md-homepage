import axios from "axios";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from "next/router";
import Container from "../components/container";
import Layout from "../components/layout";
import TopBar from "../components/top-bar";

export default function Contact() {
    const router = useRouter()
    const { t } = useTranslation('contact')
    const { t: footerTranslations } = useTranslation('footer') // omg...funkt nicht, wenn es im vorigen als Array mit drin ist..

    async function submitForm(event) {
        event.preventDefault();
        const values = event.target;

        const name = values.name.value;
        const mail = values.email.value;
        const about = values.about.value;

        var bodyFormData = new FormData();
        bodyFormData.append('fields[email]', mail);

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
            headers: { Authorization: 'Bearer patGoVoCF4avfE8hl.a8641060a03c66127d8adf8c5337327fbe2df615d8e9dfabbd5303028bdefe4c' },
            url: 'https://api.airtable.com/v0/appDYIp8oOK5Kq9mG/Table%201',
            data: {
                records: [
                    {
                        fields: {
                            name, mail, about
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
            <TopBar />
            <Container>
                <div className="text-center p-5 pb-10">
                    <p className="text-2xl md:text-4xl font-semibold">{t('header')}</p>
                    <p className="text-xl md:text-2xl">{t('subline')}</p>
                </div>
                <form onSubmit={submitForm}>
                    <div className="grid md:grid-cols-3 items-center">
                        <div className="form-label">{t('name')}</div>
                        <div className="p-1 col-span-2">
                            <input required name="name" className="form-input p-2" type="text" placeholder={t('name_placeholder')} />
                        </div>

                        <div className="form-label">{t('email')}</div>
                        <div className="p-1 col-span-2">
                            <input name="email" className="form-input p-2 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500" type="email" placeholder={t('email_placeholder')}
                                required
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            />
                        </div>

                        <div className="form-label">{t('message')}</div>
                        <div className="p-1 col-span-2">
                            <textarea required name="about" className="form-input p-2" rows={10}
                                placeholder={t('message_placeholder')} />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center pt-5 md:pt-10">
                        <div>
                            <button
                                className="border border-black border-2 border-dotted m-3 md:m-10 rounded-[2rem] p-3 bg-[#76D0D280] hover:scale-110 duration-300 hover:border-solid" type="submit">
                                <span className="font-semibold text-xl">{t('submit')}</span>
                            </button>
                        </div>

                    </div>
                </form>
            </Container>
        </Layout>
    )
}

export const getStaticProps = async ({
    locale,
}) => ({
    props: {
        ...(await serverSideTranslations(locale ?? 'de', [
            'contact', 'footer', 'common'
        ])),
    },
})