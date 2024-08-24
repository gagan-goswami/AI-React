import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Project1 from "../../assets/images/project-1.jpg";
import Project2 from "../../assets/images/project-2.jpg";
import Project3 from "../../assets/images/project-3.jpg";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Casestudy() {
  return (
    <section className="case-study-section">
      <Container>
        <div className="section-title">
          <span>Case Study</span>
          <h2>Explore Our Recent AI Case Studies</h2>
        </div>
        <Row>
          <Col lg={4} md={6}>
            <div
              className="study-item"
              data-aos="fade-down"
              data-aos-duration={1500}
            >
              <div className="study-image">
                <img src={Project1} alt="project-1" className="img-fluid" />
              </div>
              <div className="study-content">
                <span>Robotic Automation</span>
                <h2>Lorem elitr magna stet eirmod labore amet labore clita</h2>
                <div className="study-link">
                  <Link to="/">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={4} md={6}>
            <div
              className="study-item"
              data-aos="fade-down"
              data-aos-duration={1500}
            >
              <div className="study-image">
                <img src={Project2} alt="project-2" className="img-fluid" />
              </div>
              <div className="study-content">
                <span>Machine learning</span>
                <h2>Lorem elitr magna stet eirmod labore amet labore clita</h2>
                <div className="study-link">
                  <Link to="/">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={4} md={6}>
            <div
              className="study-item"
              data-aos="fade-down"
              data-aos-duration={1500}
            >
              <div className="study-image">
                <img src={Project3} alt="project-3" className="img-fluid" />
              </div>
              <div className="study-content">
                <span>Predictive Analysis</span>
                <h2>Lorem elitr magna stet eirmod labore amet labore clita</h2>
                <div className="study-link">
                  <Link to="/">
                    <FontAwesomeIcon icon={faArrowRight} />
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

export default Casestudy;
