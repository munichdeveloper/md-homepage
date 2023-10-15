import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import Container from "../../components/container";
import Layout from "../../components/layout";
import PostTitle from "../../components/post-title";

export default function HeroPage({ hero }) {
    const router = useRouter()

    async function submitForm(event) {
        event.preventDefault();
        console.log(event.target.name.value)
    }

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
                                            <div className="grid md:grid-cols-3 items-center">
                                                <div className="form-label">Dein Name:</div>
                                                <div className="p-1 col-span-2">
                                                    <input required name="name" className="form-input p-2" type="text" placeholder="Vollständiger Name" />
                                                </div>
                                                <div className="form-label">Deine Email Addresse:</div>
                                                <div className="p-1 col-span-2">
                                                    <input name="email" className="form-input p-2 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500" type="email" placeholder="Deine beste Mail Addresse"
                                                        required
                                                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                                    />
                                                </div>
                                                <div className="form-label">Deine Idee:</div>
                                                <div className="p-1 col-span-2">
                                                    <textarea required name="idea" className="form-input p-2" rows={10}
                                                        placeholder="Worum geht es bei Deiner Idee? Was ist das Besondere daran? Wer sind die Nutzer? Wie funktioniert das Geschäftsmodell? Bitte beschreibe so genau wie möglich: Zielgruppe, demografische Merkmale, TAM, SAM, SOM, Branche, und alles was Du uns sagen kannst ;-)" />
                                                </div>
                                                <div className="form-label">Was soll Deine Webapp können?</div>
                                                <div className="p-1 col-span-2">
                                                    <textarea required name="app_description" className="form-input p-2" rows={10}
                                                        placeholder="Hast du schon eine Idee, wie deine Webapp funktionieren soll? Welche Features sind nötig? Was sollte ein MVP können? Hast du schon Ideen / Vorstellungen für: Tech Stack, Frameworks, sonstige technische Anforderungen / Rahmenbedingungen?" />
                                                </div>
                                                <div className="form-label">Was möchtest Du von uns wissen?</div>
                                                <div className="p-1 col-span-2">
                                                    <textarea required name="idea" className="form-input p-2" rows={10}
                                                        placeholder="Hier ist Platz für Deine Fragen. Alles was Dir gerade so durch den Kopf geht, egal was, wir werden es Dir beantworten :-)" />
                                                </div>
                                            </div>
                                            <div className="text-center pt-5 md:pt-10">
                                                <div>Bitte beachte: Wir können nur <strong>einen einzigen Bewerber</strong> berücksichtigen und werden das Projekt wählen, das aus unserer Sicht das <strong>größte Potential</strong> verspricht UND <strong>am Besten / Genauesten beschrieben</strong> ist.</div>
                                                <div>Und: Wir werden für die Umsetzung Deiner Idee und die Erstellung Deiner Webapp <strong>viel Zeit</strong> investieren.</div>
                                                <div>Im Gegenzug erwarten wir von Dir, uns <strong>so viel wie möglich und so detailiert wie möglich</strong> zu beschreiben, was Du von uns brauchst.</div>
                                                <div>Das ist auch 'ne Menge Arbeit, aber nur so können <strong>wir Dir bestmöglich helfen</strong> und einschätzen, ob wir als Softwareentwickler zu Dir und Deinem Anliegen passen.</div>
                                            </div>
                                            <div className="flex flex-col justify-center items-center pt-5 md:pt-10">
                                                <div>
                                                    <button
                                                        className="border border-black border-2 border-dotted m-3 md:m-10 rounded-[2rem] p-3 bg-[#76D0D280] hover:scale-110 duration-300 hover:border-solid" type="submit">
                                                        <span className="font-semibold text-xl">Jaja, ich versteh schon. Auf geht's :-)</span>
                                                    </button>
                                                </div>
                                                <div className="text-center text-2xl font-bold pt-10 md:pt-[6rem]">
                                                    Viel Glück :-)
                                                </div>
                                                <div>
                                                    <Image className="rounded-[2rem] shadow-medium" alt="" width="500" height="300" src="https://nft-miner.com/wp-content/uploads/2023/10/Design-ohne-Titel-1.jpg" />
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