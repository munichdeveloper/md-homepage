import { useRouter } from "next/router";
import Container from "../components/container";
import TopBar from "../components/top-bar";
import Layout from "../components/layout";
import PostTitle from "../components/post-title";
import Image from 'next/image'

export default function SubscriptionConfirmation() {
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
                                            Ich sende Dir in den nächsten Minuten eine Bestätigungsmail zu.
                                        </div>
                                    </div>
                                    <Image
                                        width={700}
                                        height={300}
                                        alt="Image by benzoix"
                                        src="https://nft-miner.com/wp-content/uploads/2023/09/well-done-handsome-bearded-man-showing-thumb-up-praising-good-work-recommend-excellent-product-like-scaled.jpg"
                                        className="rounded-[999rem]"
                                    />
                                    <div className="text-center text-sm mt-5">
                                        <div>
                                            Solltest du keine Mail erhalten, schau bitte in Deinem Spam Ordner nach.
                                        </div>
                                        <div>
                                            Falls Du dann immer noch keine Mail von mir findest, schreib mich gerne an:
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