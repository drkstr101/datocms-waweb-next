/** @format */

import Head from "next/head"
import { renderMetaTags, useQuerySubscription } from "react-datocms"
import Container from "@components/container"
import Header from "@components/header"
import Layout from "@components/layout"
import MoreStories from "@components/more-stories"
import PostBody from "@components/post-body"
import PostHeader from "@components/post-header"
import SectionSeparator from "@components/section-separator"
import { request } from "@lib/datocms"
import { postsBySlug } from "@lib/queries"

export async function getStaticPaths() {
  const data = await request({ query: `{ allPosts { slug } }` })

  return {
    paths: data.allPosts.map((post) => `/case-studies/${post.slug}`),
    fallback: false,
  }
}

export async function getStaticProps({ params, preview = false }) {
  const graphqlRequest = {
    query: postsBySlug,
    preview,
    variables: {
      slug: params.slug,
    },
  }

  return {
    props: {
      subscription: preview
        ? {
            ...graphqlRequest,
            initialData: await request(graphqlRequest),
            token: process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
          }
        : {
            enabled: false,
            initialData: await request(graphqlRequest),
          },
    },
  }
}

export default function Post({ subscription, preview }) {
  const {
    data: { site, post, morePosts },
  } = useQuerySubscription(subscription)

  const metaTags = post.seo.concat(site.favicon)

  return (
    <Layout preview={preview}>
      <Head>{renderMetaTags(metaTags)}</Head>
      <Container>
        <Header />
        <article>
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={post.content} />
        </article>
        <SectionSeparator />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  )
}
