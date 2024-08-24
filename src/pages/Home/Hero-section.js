import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="Hero-section">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="hero-main">
              <div
                className="hero-caption"
                data-aos="fade-right"
                data-aos-duration={1500}
              >
                <span>AI.Tech</span>
                <h2>Artificial Intelligence for Your Business</h2>
                <p>
                  Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum
                  stet dolor. Ut dolor sed magna dolor sea diam. Sit diam sit
                </p>
                <div className="contact-btns">
                  <Link to="/" className="readbtn">
                    Read More
                  </Link>
                  <Link to="/" className="contactbtn">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
