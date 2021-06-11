/** @format */

import { responsiveImageFragment, metaTagsFragment } from "./fragments"

export const homepage = `{
  site: _site {
    favicon: faviconMetaTags {
      ...metaTagsFragment
    }
  }
  homepage {
    seo: _seoMetaTags {
      ...metaTagsFragment
    }
  }
  allPosts(orderBy: date_DESC, first: 20) {
    title
    slug
    excerpt
    date
    coverImage {
      responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
        ...responsiveImageFragment
      }
    }
    author {
      name
      picture {
        url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
      }
    }
  }
}

${metaTagsFragment}
${responsiveImageFragment}
`

export const postsBySlug = `
  query PostBySlug($slug: String) {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
    post(filter: {slug: {eq: $slug}}) {
      seo: _seoMetaTags {
        ...metaTagsFragment
      }
      title
      slug
      content {
        value
        blocks {
          __typename
          ...on ImageBlockRecord {
            id
            image {
              responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
                ...responsiveImageFragment
              }
            }
          }
        }
      }
      date
      ogImage: coverImage{
        url(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 })
      }
      coverImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
          ...responsiveImageFragment
        }
      }
      author {
        name
        picture {
          url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
        }
      }
    }

    morePosts: allPosts(orderBy: date_DESC, first: 2, filter: {slug: {neq: $slug}}) {
      title
      slug
      excerpt
      date
      coverImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
          ...responsiveImageFragment
        }
      }
      author {
        name
        picture {
          url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
        }
      }
    }
  }

  ${responsiveImageFragment}
  ${metaTagsFragment}
`
