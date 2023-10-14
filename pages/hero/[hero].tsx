import Container from "../../components/container";
import Layout from "../../components/layout";
import { useRouter } from "next/router"
import PostTitle from "../../components/post-title";
import Image from "next/image"
import { useEffect } from "react";
import { GetServerSideProps } from "next";

export default function HeroPage({ hero }) {
    const router = useRouter()

    async function submitForm(event) {
        event.preventDefault();
    }

    useEffect(() => {
        console.log(hero)
    }, [hero])

    return (
        <Layout>
            <div className="min-h-screen">
                <div className="max-w-[80rem] lg:max-w-[100rem] mx-auto md:py-3">
                    <Container>
                        {router.isFallback ?
                            <PostTitle>Loading…</PostTitle>
                            : (
                                <>
                                    <div>
                                        <div className="flex flex-col flex items-center">
                                            <div className="flex flex-col md:flex-row items-start md:items-end text-3xl md:text-6xl font-bold text-center p-5 md:p-10">
                                                <span>Wir setzen die</span>
                                                <span className="text-4xl md:text-7xl md:px-3 leading-10"> Webapp </span>
                                                für
                                                <span className="text-4xl md:text-7xl md:px-3">Deine Idee</span>
                                                um !
                                            </div>
                                            <div className="flex flex-col md:flex-row items-start md:items-end text-3xl md:text-6xl font-bold text-center p-1 md:p-3">
                                                … und das kostenlos :-)
                                            </div>

                                            <div className="text-2xl text-center p-5 flex flex-col md:flex-row order-1">
                                                <p className="p-3">💡 Erzähl uns, worum es bei <span className="font-bold">Deiner Idee</span> geht</p>
                                                <p className="p-3">💻 Erklär uns, wie eine Webapp dich bei <span className="font-bold">Deinem Vorhaben</span> unterstützen wird</p>
                                                <p className="p-3">🦄 Sag uns, warum Deine Idee das Potential hat, das <span className="font-bold">nächste Unicorn</span> hervorzubringen</p>
                                            </div>
                                            <div className="p-5 md:p-10 flex justify-center">
                                                <Image className="rounded-[1rem] shadow-medium" alt="" width="700" height="300" src="https://nft-miner.com/wp-content/uploads/2023/10/person-points-camera-scaled.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col max-w-4xl mx-auto border border-black rounded-md text-xl p-3 mt-5 md:mt-[5rem]">
                                        <div className="py-3">
                                            <p className="font-bold">❓ Wer sind wir?</p>
                                            <p className="pl-8">Ein Team <span className="font-semibold">leidenschaftlicher Softwareentwickler</span>, die gerne Software entwickeln. <span className="font-semibold">Aus München.</span></p>
                                        </div>
                                        <div className="py-3">
                                            <p className="font-bold">❓ Was machen wir?</p>
                                            <p className="pl-8">Wir entwickeln <span className="font-semibold">moderne Webapplikationen</span> end-to-end, von Front- über Backend, von der Konzeption über Deployment bis zum Betrieb, von der Idee hin zum Unicorn. <span className="font-semibold">Also alles.</span></p>
                                        </div>
                                        <div className="py-3">
                                            <p className="font-bold">❓ Welche Technologien verwenden wir?</p>
                                            <p className="pl-8">React JS / Next.js, Spring Boot, No- und Low-Code, Datenbanken aller Art. <span className="font-semibold">Geiles Zeug.</span></p>
                                        </div>
                                    </div>
                                    <div className="mx-auto max-w-4xl text-2xl md:text-4xl font-semibold text-center mt-[3rem] md:mt-[4rem]">
                                        <div>Klingt gut? Finden wir auch!</div>
                                    </div>
                                    <div className="mx-auto max-w-4xl text-xl md:text-2xl text-center">
                                        <div>Bewirb Dich direkt hier mit Deiner Idee:</div>
                                    </div>
                                    <div className="flex justify-center mt-2 md:mt-[3rem]">
                                        <form onSubmit={submitForm}>
                                            <div className="grid md:grid-cols-2 items-center">
                                                <div className="form-label">Dein Name:</div>
                                                <div className="p-1">
                                                    <input name="name" className="form-input p-2" type="text" placeholder="Vollständiger Name" />
                                                </div>
                                                <div className="form-label">Deine Email Addresse:</div>
                                                <div className="p-1">
                                                    <input name="name" className="form-input p-2" type="text" placeholder="Deine beste Mail Addresse" />
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
        </Layout>
    )
}


export const getServerSideProps: GetServerSideProps = async ({
    params,
}) => {
    const hero = params?.hero as string

    return {
        props: {
            hero
        }
    }
}