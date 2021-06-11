/** @format */

require("dotenv").config()

module.exports = {
  future: {
    webpack5: true,
  },
  env: {
    NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN: process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
  },
  images: {
    domains: [
      "www.datocms-assets.com",
      "a.storyblok.com",
      "images.ctfassets.net",
      "images.prismic.io",
      "cdn.aglty.io",
      "localhost", // For Strapi
    ],
    imageSizes: [24, 64, 300],
  },
}
