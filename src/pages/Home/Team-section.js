import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Team1 from "../../assets/images/team-1.jpg";
import Team2 from "../../assets/images/team-2.jpg";
import Team3 from "../../assets/images/team-3.jpg";
import Team4 from "../../assets/images/team-4.jpg";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"; // Correct import

function Team() {
  return (
    <section className="team-section">
      <Container>
        <div className="section-title">
          <span>Our Team</span>
          <h2>Meet Our Experienced Team Members</h2>
        </div>
        <Row>
          <Col lg={3} md={6} data-aos="zoom-in" data-aos-duration={1500}>
            <div className="team-item">
              <div className="team-image">
                <img src={Team1} alt="team-image" className="img-fluid" />
              </div>
              <div className="team-name">
                <h2>Boris Johnson</h2>
                <p>Founder &amp; CEO</p>
              </div>
              <div className="social-icon">
                <ul className="social">
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
            </div>
          </Col>

          <Col lg={3} md={6} data-aos="zoom-in" data-aos-duration={1500}>
            <div className="team-item">
              <div className="team-image">
                <img src={Team2} alt="team-image" className="img-fluid" />
              </div>
              <div className="team-name">
                <h2>Kate Winslet</h2>
                <p>Co Founder</p>
              </div>
              <div className="social-icon">
                <ul className="social">
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
            </div>
          </Col>

          <Col lg={3} md={6} data-aos="zoom-in" data-aos-duration={1500}>
            <div className="team-item">
              <div className="team-image">
                <img src={Team3} alt="team-image" className="img-fluid" />
              </div>
              <div className="team-name">
                <h2>Adam Crew</h2>
                <p>Executive Manager</p>
              </div>
              <div className="social-icon">
                <ul className="social">
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
            </div>
          </Col>

          <Col lg={3} md={6} data-aos="zoom-in" data-aos-duration={1500}>
            <div className="team-item">
              <div className="team-image">
                <img src={Team4} alt="team-image" className="img-fluid" />
              </div>
              <div className="team-name">
                <h2>Cody Gardner</h2>
                <p>Project Manager</p>
              </div>
              <div className="social-icon">
                <ul className="social">
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
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Team;
