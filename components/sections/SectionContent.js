/** @format */

import React from "react"

// reactstrap components
import { Container, Row, Col } from "reactstrap"

// core components

function SectionContent() {
  return (
    <>
      <div id="fadeInAnim">
        <div className="section section-content section-gray">
          <Container>
            <Row>
              <Col md="7">
                <div className="image-container">
                  <img
                    alt="..."
                    className="img"
                    src={require("assets/img/presentation-page/ipad-content-2.png").default}
                  />
                  <img
                    alt="..."
                    className="area-img add-animation"
                    src={require("assets/img/presentation-page/ipad-left-img.jpg").default}
                  />
                  <img
                    alt="..."
                    className="info-img add-animation"
                    src={require("assets/img/presentation-page/ipad-right-img.jpg").default}
                  />
                </div>
              </Col>
              <Col md="4">
                <div className="section-description">
                  <h3 className="title">Pro Engineers &amp; Designers</h3>
                  <h6 className="category">For those times when you need an expert right away</h6>
                  <h5 className="description">
                    Statistics show that a core team of 3 - 5 expert engineers and designer collaborating well on a
                    project can, on average, can out produce teams teams of 20 - 25 given the same starting conditions.{" "}
                    <em>[citation needed]</em> We pride ourselves on our ability to attract exceptional talent as this
                    is tantamount to our strategy of always being one step ahead of the compilation.
                  </h5>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}

export default SectionContent
