import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import AboutImage from "../../assets/images/about-img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function AboutSection() {
  return (
    <section className="about-section feature-section">
      <Container>
        <Row>
          <Col
            lg={6}
            className="about-item"
            data-aos="fade-right"
            data-aos-duration={1500}
          >
            <div className="about-image">
              <img src={AboutImage} alt="about" className="img-fluid" />
            </div>
          </Col>

          <Col lg={6}>
            <div
              className="about-item"
              data-aos="fade-left"
              data-aos-duration={1500}
            >
              <div className="about-content">
                <span>About Us</span>
                <h2>
                  We Make Your Business Smarter with Artificial Intelligence
                </h2>
                <p>
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                  tempor sit. Aliqu diam amet diam et eos labore. Clita erat
                  ipsum et lorem et sit, sed stet no labore lorem sit et tempor
                  eirmod magna dolore erat amet.
                </p>
                <p>
                  Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
                  et sit, sed stet no labore lorem sit. Sanctus clita duo justo
                  et tempor.
                </p>
              </div>
              <div className="achievement">
                <div className="achievement-item">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Award Winning</span>
                </div>
                <div className="achievement-item">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>24/7 Support</span>
                </div>
              </div>
              <div className="achievement">
                <div className="achievement-item">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Professional Staff</span>
                </div>
                <div className="achievement-item">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Fair Prices</span>
                </div>
              </div>
              <div className="about-btn">
                <Link to="/" className="readbtn">
                  Read More
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutSection;
