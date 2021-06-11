/**
 * /*eslint-disable
 *
 * @format
 */

import React from "react"

// reactstrap components
import { Container, Row } from "reactstrap"

// core components

function FooterBlack() {
  return (
    <>
      <footer className="footer footer-white">
        <Container>
          <Row>
            <nav className="footer-nav">
              <ul>
                <li>
                  <a href="/home" className="mr-1">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/blog" className="mr-1">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/support">Support</a>
                </li>
              </ul>
            </nav>
            <div className="credits ml-auto">
              <span className="copyright">
                © {new Date().getFullYear()}
                Watheia Labs, LLC.
              </span>
            </div>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default FooterBlack
