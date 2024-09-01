import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });

    AOS.refresh();
  }, []);
  return (
    <section className="Hero-section">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="hero-main">
              <div className="hero-caption" data-aos="fade-left">
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
