import { GetServerSideProps } from 'next'
import { getAllPostsForHome } from '../lib/api'
import LandingPage from './landing-page'

export default function Index({ allPosts: { edges } }) {
  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1)

  return (
    <LandingPage />
  )
}

export const getServerSideProps: GetServerSideProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview)

  return {
    props: { allPosts, preview }
  }
}
