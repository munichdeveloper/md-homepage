import Image from 'next/image';
import { useRouter } from "next/router";
import Container from "../components/container";
import Layout from "../components/layout";
import PostTitle from "../components/post-title";
import TopBar from "../components/top-bar";

export default function CampaignConfirmation() {
    const router = useRouter()

    return (
        <Layout>
            <TopBar />
            <Container>
                {router.isFallback ? (
                    <PostTitle>Loading…</PostTitle>
                ) : (
                    <>
                        <article>
                            <div className="mb-[5rem] md:mb-[10rem]">

                                <section className="flex items-center flex-col">
                                    <h1 className="text-2xl md:text-5xl font-bold md:pb-10 text-center">Vielen Dank für Dein Interesse!</h1>
                                    <div className="p-5 md:p-8">
                                        <div className="flex justify-center font-bold">
                                            Wir melden uns bald bei Dir, versprochen! Du erhälst auch noch eine E-Mail, um deine Addresse zu bestätigen.
                                        </div>
                                    </div>
                                    <div className="p-5 md:p-10 flex flex-col justify-center items-center">
                                        <Image
                                            width={700}
                                            height={300}
                                            alt="Image by benzoix"
                                            src="https://nft-miner.com/wp-content/uploads/2023/09/well-done-handsome-bearded-man-showing-thumb-up-praising-good-work-recommend-excellent-product-like-scaled.jpg"
                                            className="rounded-[999rem]"
                                        />
                                        <div className="text-sm"><a target="_blank" href="https://de.freepik.com/fotos-kostenlos/gut-gemachter-gutaussehender-baertiger-mann-der-den-daumen-nach-oben-zeigt-und-gute-arbeit-lobt-empfiehlt-ein-ausgezeichnetes-produkt-wie_54678200.htm#&position=2&from_view=search&track=ais">Bild von benzoix</a> auf Freepik</div>
                                    </div>
                                    <div className="text-center text-sm mt-5">
                                        <div>
                                            Solltest du keine Mail erhalten, schau bitte in Deinem Spam Ordner nach.
                                        </div>
                                        <div>
                                            Falls Du dann immer noch keine Mail von uns findest, schreib uns gerne an:
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