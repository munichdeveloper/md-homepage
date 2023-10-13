import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import Image from 'next/image'
import Container from "../../components/container"
import Layout from "../../components/layout"
import PostCard from "../../components/post-card"
import PostTitle from "../../components/post-title"
import TopBar from "../../components/top-bar"
import features from "../../features.json"

export default function FeaturePage({ header, headerImage, subtitle, dePosts, enPosts }) {
    const router = useRouter()

    return (
        <Layout>
            <TopBar />
            <Container>
                {router.isFallback ?
                    <PostTitle>Loading…</PostTitle>
                    : (
                        <>
                            <div className="feature-header-wrapper">
                                <div className="feature-image">
                                    <Image className='rounded-[20px]'
                                        width={500} height={400}
                                        src={headerImage} alt={""} />
                                </div>
                                <div className="feature-text">
                                    {header}
                                    <div className="feature-text-subtitle">{subtitle}</div>
                                </div>

                            </div>
                            {enPosts && enPosts.length > 0 && <>
                                <div className="flex p-1 md:pt-5">
                                    <div className="text-[1.2rem] font-semibold">Artikel auf Englisch:</div>
                                </div>
                                <article>
                                    {enPosts.map(post =>
                                        <PostCard link={post.url} key={post.id} post={post} image={post.image} />
                                    )}
                                </article>
                            </>}
                        </>
                    )
                }
            </Container>
        </Layout >
    )
}

export const getServerSideProps: GetServerSideProps = async ({
    params,
}) => {
    const requestOptions = {
        method: 'GET',
        headers: { 'accept': 'application/vnd.forem.api-v1+json' }
    };

    const feature = params?.feature as string
    const prom = features[feature]
        .external_resources["dev.to"]
        ?.map(async url => await fetch(url, requestOptions)
            .then(response => response.json()))

    const resp = prom ? await Promise.all(prom) : []
    const enPosts = resp ? resp.map(post => ({
        id: post.id,
        title: post.title,
        content: post.description,
        url: post.url,
        image: post.cover_image,
        date: post.published_at,
        tags: {
            nodes: post.tags.map(tag => ({ name: tag }))
        }
    })) : []

    return {
        props: {
            enPosts,
            header: features[feature]['header_text'],
            subtitle: features[feature]['subtitle'],
            headerImage: features[feature]['header_image']
        }
    }
}