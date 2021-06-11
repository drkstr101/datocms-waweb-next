import React from "react"

// reactstrap components
import { Container, Row, Col, Jumbotron } from "reactstrap"

// core components

function SectionResponsive() {
  return (
    <>
      <div className="section section-responsive section-light">
        <Container fluid>
          <Row>
            <Col md="6">
              <div className="phone-container">
                <img alt="..." src={require("assets/img/presentation-page/responsive.png").default} />
              </div>
            </Col>
            <Col lg="4">
              <div className="info info-horizontal">
                <div className="icon icon-danger">
                  <i className="nc-icon nc-tablet-2" />
                </div>
                <div className="description">
                  <h4 className="info-title">Content as a Service (CaaS)</h4>
                  <p>
                    Eu consequat aliqua ipsum exercitation velit ullamco elit occaecat. Lorem aute laboris minim sint.
                    Aliquip officia minim aute anim aliquip nisi.
                  </p>
                </div>
              </div>
              <div className="info info-horizontal">
                <div className="icon icon-danger">
                  <i className="nc-icon nc-atom" />
                </div>
                <div className="description">
                  <h4 className="info-title">Managed Auto-DevOps</h4>
                  <p>
                    Laborum proident ex eu reprehenderit ut id dolore fugiat cillum enim. Dolore culpa cupidatat enim ut
                    tempor non duis fugiat. In nostrud eu excepteur elit nisi culpa fugiat adipisicing. Ullamco aliqua
                    ipsum amet mollit quis.
                  </p>
                </div>
              </div>
              <div className="info info-horizontal">
                <div className="icon icon-danger">
                  <i className="nc-icon nc-atom" />
                </div>
                <div className="description">
                  <h4 className="info-title">Expert Consulting</h4>
                  <p>
                    Laborum proident ex eu reprehenderit ut id dolore fugiat cillum enim. Dolore culpa cupidatat enim ut
                    tempor non duis fugiat. In nostrud eu excepteur elit nisi culpa fugiat adipisicing. Ullamco aliqua
                    ipsum amet mollit quis.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Jumbotron>
                <Container>
                  <h5 className="display-3">Big or small, we can handle it all!</h5>
                  <a href="/support">Get Support</a>
                </Container>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default SectionResponsive
