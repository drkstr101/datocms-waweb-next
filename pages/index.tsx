/** @format */

import Head from "next/head"
import { renderMetaTags, useQuerySubscription } from "react-datocms"
import Container from "../components/container"
import HeroPost from "../components/hero-post"
import Intro from "../components/intro"
import Layout from "../components/layout"
import CaseStudies from "../components/case-studies"
import { request } from "../lib/datocms"
import { homepage } from "@lib/queries"

export async function getStaticProps({ preview }) {
  const graphqlRequest = {
    query: homepage,
    preview,
    variables: {},
  }

  return {
    props: {
      subscription: preview
        ? {
            ...graphqlRequest,
            initialData: await request(graphqlRequest),
            token: process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
            environment: process.env.NEXT_DATOCMS_ENVIRONMENT || null,
          }
        : {
            enabled: false,
            initialData: await request(graphqlRequest),
          },
    },
  }
}

export default function Index({ subscription }) {
  const {
    data: { allPosts, site, homepage },
  } = useQuerySubscription(subscription)

  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  const metaTags = homepage.seo.concat(site.favicon)

  return (
    <>
      <Layout preview={subscription.preview}>
        <Head>{renderMetaTags(metaTags)}</Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <CaseStudies posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}
