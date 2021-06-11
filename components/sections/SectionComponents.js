import { Well } from "@react-spectrum/well"
import React from "react"

// reactstrap components
import { Container, Row, Col } from "reactstrap"

// core components

function SectionComponents() {
  return (
    <>
      <div className="section section-components section-dark">
        <Row>
          <Col lg="6" md="12">
            <div className="image-container">
              <img
                alt="..."
                className="components-macbook"
                src={require("assets/img/presentation-page/laptop-basic.png").default}
              />
              <img alt="..." className="table-img" src={require("assets/img/presentation-page/table.jpg").default} />
              <img
                alt="..."
                className="share-btn-img"
                src={require("assets/img/presentation-page/share-btn.png").default}
              />
              <img
                alt="..."
                className="coloured-card-btn-img"
                src={require("assets/img/presentation-page/coloured-card-with-btn.png").default}
              />
              <img
                alt="..."
                className="coloured-card-img"
                src={require("assets/img/presentation-page/coloured-card.png").default}
              />
              <img
                alt="..."
                className="social-img"
                src={require("assets/img/presentation-page/social-row.png").default}
              />
              <img
                alt="..."
                className="pin-btn-img"
                src={require("assets/img/presentation-page/pin-btn.png").default}
              />
            </div>
          </Col>
          <Col className="ml-auto mr-auto" lg="4" md="10">
            <Container className="basic-container wa-light-gray-color">
              <h3 className="title">Behavior Driven Development</h3>
              <h6 className="category">Engaging experiences start with collaboration</h6>
              <p className="description">
                Think of BDD as a set of plugins for your existing gile process that will make your team more able to
                deliver on its promises: timely, reliable releases of working software that meets your organisation’s
                evolving needs, requiring some maintenance effort and discipline.
              </p>
              <p>
                We do this by focusing on collaborative work around concrete, real-world examples that illustrate how we
                want the system to behave. We use those examples to guide us from concept through to implementation, in
                a process of <strong>continuous collaboration</strong>
              </p>
            </Container>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default SectionComponents
