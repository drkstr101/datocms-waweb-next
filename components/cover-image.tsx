/** @format */

import { Image } from "react-datocms"
import cn from "classnames"
import Link from "next/link"

export type CoverImageProps = {
  title: string
  responsiveImage: any
  slug?: "string" | null
}
export default function CoverImage({
  title,
  responsiveImage,
  slug = null,
}: CoverImageProps) {
  const image = (
    <Image
      data={{
        ...responsiveImage,
        alt: `Cover Image for ${title}`,
      }}
      className={cn("shadow-small", {
        "hover:shadow-medium transition-shadow duration-200": slug,
      })}
    />
  )
  return (
    <div className="-mx-5 sm:mx-0">
      {slug ? (
        <Link as={`/case-studies/${slug}`} href="/case-studies/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
