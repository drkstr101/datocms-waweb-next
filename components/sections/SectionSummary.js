import React from "react"

// reactstrap components
import { Container, Row, Col } from "reactstrap"
// core components

function SectionSummary() {
  return (
    <>
      <div className="section section-dark section-summary">
        <Container>
          <Row>
            <Col md="4">
              <div className="info">
                <div className="icon icon-danger">
                  <i className="nc-icon nc-layout-11" />
                </div>
                <div className="description">
                  <h4 className="info-title">Deliver Features Faster</h4>
                  <p>
                    Proident tempor officia laborum amet. Veniam exercitation mollit non exercitation eiusmod mollit
                    aliqua nostrud irure cupidatat consequat pariatur.
                  </p>
                </div>
              </div>
            </Col>
            <Col md="4">
              <div className="info">
                <div className="icon icon-danger">
                  <i className="nc-icon nc-tile-56" />
                </div>
                <div className="description">
                  <h4 className="info-title">Do More With Less</h4>
                  <p>
                    Reprehenderit elit in et minim id aliquip non tempor. Consequat non nulla reprehenderit in et nulla
                    aliquip sunt consectetur.
                  </p>
                </div>
              </div>
            </Col>
            <Col md="4">
              <div className="info">
                <div className="icon icon-danger">
                  <i className="nc-icon nc-paper" />
                </div>
                <div className="description">
                  <h4 className="info-title">Increase Customer Focus</h4>
                  <p>
                    Consequat qui ullamco officia proident reprehenderit laborum. Aliqua elit excepteur consequat do
                    proident incididunt do et elit deserunt.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default SectionSummary
