import type Post from '../interfaces/post'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'

export default async function Page() {
  const allPosts = await getData();
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <Layout>
      <Head>
        <title>kenta7777-blog</title>
      </Head>
      <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            date={heroPost.date}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  )
}

async function getData() {
  const allItems = getAllPosts([
    'title',
    'date',
    'slug',
    'excerpt',
  ])

  return convertToPosts(allItems)
}

const convertToPosts = (allItems) => {
  const posts: Post[] = []
  allItems.map((item) =>{
    const post: Post = {
      slug: item['slug'],
      title: item['title'],
      date: item['date'],
      excerpt: item['excerpt'],
      content: item['content'],
    }
    posts.push(post)
  })

  return posts
}
