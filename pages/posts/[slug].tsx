import { GetStaticPaths, GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Container from '../../components/container'
import Header from '../../components/header'
import Layout from '../../components/layout'
import MoreStories from '../../components/more-stories'
import PostBody from '../../components/post-body'
import PostHeader from '../../components/post-header'
import PostTitle from '../../components/post-title'
import SectionSeparator from '../../components/section-separator'
import Tags from '../../components/tags'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'

export default function Post({ post, posts }) {
  const router = useRouter()
  const { t } = useTranslation('footer')

  const morePosts = posts?.edges

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout t={t}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {`${post.title} | Quelltext aus München`}
                </title>
                <meta
                  property="og:image"
                  content={post.featuredImage?.node.sourceUrl}
                />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.featuredImage?.node?.sourceUrl}
                date={post.date}
              />
              <PostBody content={post.content} />
              <div className='max-w-4xl mx-auto'>
                <footer className='pt-5 md:pt-10'>
                  {post.tags.edges.length > 0 && <Tags tags={post.tags.edges.map(edge => ({ name: edge.node.name }))} />}
                </footer>
              </div>
            </article>

            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData,
  locale
}) => {
  const data = await getPostAndMorePosts(params?.slug, preview, previewData)

  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'de', [
        'footer'
      ])),
      preview,
      post: data.post,
      posts: data.posts,
    },
    revalidate: 10,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true,
  }
}