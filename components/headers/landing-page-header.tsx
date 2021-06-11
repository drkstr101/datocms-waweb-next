/** @format */

import React from "react"

// reactstrap components
import { Button, Container } from "reactstrap"

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef<any>()

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3
        pageHeader.current.style.transform = "translate3d(0," + windowScrollTop + "px,0)"
      }
      window.addEventListener("scroll", updateScroll)
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll)
      }
    }
  })

  return (
    <>
      <div
        className="page-header"
        ref={pageHeader}
        style={{
          backgroundImage: "url(" + require("assets/img/cover.jpg").default + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="motto">
              <h1 className="title">We build micro frontends!</h1>
              <h3 className="description">by Watheia Labs</h3>
              <br />
              <Button className="btn-round mr-1" color="neutral" href="/support">
                <i className="fa fa-play" />
                Get Support
              </Button>
              <Button
                className="btn-round"
                color="neutral"
                type="button"
                href="/home"
                outline
              >
                Learn More
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </>
  )
}

export default LandingPageHeader
