/** @format */

import React from "react"

// reactstrap components

// core components
import LandingPageHeader from "@components/headers/landing-page-header"
import FooterWhite from "@components/footer"
import ColorNavbar from "@components/navbar"

export function Index() {
  document.documentElement.classList.remove("nav-open")
  React.useEffect(() => {
    document.body.classList.add("landing-page")
    window.scrollTo(0, 0)
    document.body.scrollTop = 0
    return function cleanup() {
      document.body.classList.remove("landing-page")
    }
  })
  return (
    <>
      <ColorNavbar />
      <LandingPageHeader />
      <FooterWhite />
    </>
  )
}

export default Index
