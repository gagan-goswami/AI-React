import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/FooterStyle.css";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faAngleRight,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="footer">
        <Container>
          <Row>
            <Col lg={3} md={6}>
              <div
                className="footer-item"
                data-aos="zoom-in"
                data-aos-duration={1500}
              >
                <div className="footer-logo">
                  <Link to="/" className="navbar-brand">
                    <h2>AITech</h2>
                  </Link>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta facere delectus qui placeat consectetur repellendus
                  optio debitis.
                </p>
                <ul className="footer-social">
                  <li>
                    <Link to="/">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FontAwesomeIcon icon={faTwitter} />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div
                className="footer-item"
                data-aos="zoom-in"
                data-aos-duration={1500}
              >
                <h2>Popular Links</h2>
                <ul className="page-link">
                  <li>
                    <Link to="/">
                      <FontAwesomeIcon icon={faAngleRight} /> About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FontAwesomeIcon icon={faAngleRight} /> Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FontAwesomeIcon icon={faAngleRight} /> Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FontAwesomeIcon icon={faAngleRight} /> Terms &amp;
                      Conditions
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FontAwesomeIcon icon={faAngleRight} /> Career
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div
                className="footer-item"
                data-aos="zoom-in"
                data-aos-duration={1500}
              >
                <h2>Our Services</h2>
                <ul className="Quick-links">
                  <li>
                    <Link to="/">
                      <FontAwesomeIcon icon={faAngleRight} /> Robotic Automation
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FontAwesomeIcon icon={faAngleRight} /> Machine Learning
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FontAwesomeIcon icon={faAngleRight} /> Predictive
                      Analysis
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FontAwesomeIcon icon={faAngleRight} /> Data Science
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FontAwesomeIcon icon={faAngleRight} /> Robot Technology
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div
                className="footer-item"
                data-aos="zoom-in"
                data-aos-duration={1500}
              >
                <h2>Get In Touch</h2>
                <ul className="service-links">
                  <li>
                    <Link to="/">
                      <FontAwesomeIcon icon={faMapMarkerAlt} /> 123 Street, New
                      York, USA
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FontAwesomeIcon icon={faPhone} /> +123 456 7890
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FontAwesomeIcon icon={faEnvelope} /> info@exmple.com
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="copy-right">
          <p>Copyright ©2024 All rights reserved</p>
        </div>
        {showTopButton && (
          <div className="top-button">
            <a href="/" className="top" onClick={scrollToTop}>
              <FontAwesomeIcon icon={faArrowUp} />
            </a>
          </div>
        )}
      </footer>
    </>
  );
}

export default Footer;
