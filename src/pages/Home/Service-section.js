import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRobot,
  faUserGraduate,
  faPowerOff,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";

function ServiceSection() {
  return (
    <section className="service-section">
      <Container>
        <Row>
          <Col
            lg={5}
            className="service-item"
            data-aos="fade-left"
            data-aos-duration={1500}
          >
            <div className="service-caption">
              <span>Our Services</span>
              <h2>Our Excellent AI Solutions for Your Business</h2>
              <p>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum
                et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo
                justo et tempor eirmod magna dolore erat amet
              </p>
            </div>
            <div className="service-btn">
              <Link to="/" className="readbtn">
                Read More
              </Link>
            </div>
          </Col>

          <Col
            lg={7}
            className="service-item"
            data-aos="fade-left"
            data-aos-duration={1500}
          >
            <div className="row">
              <Col md={6} data-aos="fade-left" data-aos-duration={1500}>
                <div className="service-category">
                  <div className="service-icon">
                    <FontAwesomeIcon icon={faRobot} />
                  </div>
                  <div className="service-content">
                    <h2>Robotic Automation</h2>
                    <p>
                      Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                      lorem sed diam stet diam sed stet lorem.
                    </p>
                  </div>
                  <div className="service-category-btn">
                    <Link to="/" className="readbtn">
                      Read More
                    </Link>
                  </div>
                </div>
              </Col>

              <Col md={6} data-aos="fade-left" data-aos-duration={1500}>
                <div className="service-category">
                  <div className="service-icon">
                    <FontAwesomeIcon icon={faUserGraduate} />
                  </div>
                  <div className="service-content">
                    <h2>Education &amp; Science</h2>
                    <p>
                      Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                      lorem sed diam stet diam sed stet lorem.
                    </p>
                  </div>
                  <div className="service-category-btn">
                    <Link to="/" className="readbtn">
                      Read More
                    </Link>
                  </div>
                </div>
              </Col>

              <Col md={6} data-aos="fade-left" data-aos-duration={1500}>
                <div className="service-category">
                  <div className="service-icon">
                    <FontAwesomeIcon icon={faPowerOff} />
                  </div>
                  <div className="service-content">
                    <h2>Machine learning</h2>
                    <p>
                      Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                      lorem sed diam stet diam sed stet lorem.
                    </p>
                  </div>
                  <div className="service-category-btn">
                    <Link to="/" className="readbtn">
                      Read More
                    </Link>
                  </div>
                </div>
              </Col>

              <Col md={6} data-aos="fade-left" data-aos-duration={1500}>
                <div className="service-category">
                  <div className="service-icon">
                    <FontAwesomeIcon icon={faBrain} />
                  </div>
                  <div className="service-content">
                    <h2>Predictive Analysis</h2>
                    <p>
                      Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                      lorem sed diam stet diam sed stet lorem.
                    </p>
                  </div>
                  <div className="service-category-btn">
                    <Link to="/" className="readbtn">
                      Read More
                    </Link>
                  </div>
                </div>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ServiceSection;
