import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import NewsletterImg from "../../assets/images/newsletter.png";

function Newsletter() {
  return (
    <section className="newsletter-section">
      <Container>
        <Row>
          <Col lg={5} data-aos="fade-right" data-aos-duration={1500}>
            <div className="newsletter-item">
              <div className="news-image">
                <img
                  src={NewsletterImg}
                  alt="newsletter-img"
                  className="img-fluid"
                />
              </div>
            </div>
          </Col>

          <Col lg={7} data-aos="fade-right" data-aos-duration={1500}>
            <div className="newsletter-item">
              <div className="newsletter-form">
                <span>Newsletter</span>
                <h2>Let's subscribe the newsletter</h2>
                <form method="post">
                  <div className="form-group">
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        name="inputName"
                        id="inputName"
                        placeholder="Enter Your Email:"
                      />
                      <button>
                        <FontAwesomeIcon icon={faPaperPlane} />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Newsletter;
