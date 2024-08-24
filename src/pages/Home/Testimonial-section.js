import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import Author1 from "../../assets/images/testimonial-1.jpg";
import Author2 from "../../assets/images/testimonial-2.jpg";
import Author3 from "../../assets/images/testimonial-3.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Testimonial() {
  return (
    <section className="testimonial-section">
      <Container>
        <Row>
          <Col lg={6} data-aos="fade-left" data-aos-duration={1500}>
            <div className="testimonial-item">
              <div className="testimonial-caption">
                <span>Testimonial</span>
                <h2>What Say Our Clients!</h2>
                <p>
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                  tempor sit. Aliqu diam amet diam et eos labore. Clita erat
                  ipsum et lorem et sit, labore lorem sit. Sanctus clita duo
                  justo et tempor eirmod magna dolore erat amet
                </p>
              </div>
              <div className="testimonial-btn">
                <Link to="/" className="readbtn">
                  Read More
                </Link>
              </div>
            </div>
          </Col>

          <Col lg={6} data-aos="fade-left" data-aos-duration={1500}>
            <div className="testimonial-item">
              <OwlCarousel
                className="owl-theme"
                autoplay={true}
                loop={true}
                slideBy={1}
                animateIn="fadeIn"
                animateOut="fadeOut"
                autoplayHoverPause={true}
                autoplayTimeout={2000}
                smartSpeed={1000}
                dots={true}
                responsive={{
                  0: { items: 1 },
                  768: { items: 1 },
                  992: { items: 1 },
                }}
              >
                <div className="slide-item">
                  <div
                    className="testimonial-item"
                    data-aos="fade-right"
                    data-aos-duration={1500}
                  >
                    <FontAwesomeIcon icon={faQuoteLeft} />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Possimus, dolorum quos. Eum omnis ea consectetur
                      reprehenderit minima similique nemo corporis!
                    </p>
                    <div className="author">
                      <div className="flex-shrink-0">
                        <img src={Author1} alt="author" className="img-fluid" />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h2>Luna John</h2>
                        <p>UX Designer</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slide-item">
                  <div
                    className="testimonial-item"
                    data-aos="fade-right"
                    data-aos-duration={1500}
                  >
                    <FontAwesomeIcon icon={faQuoteLeft} />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Possimus, dolorum quos. Eum omnis ea consectetur nemo
                      corporis!
                    </p>
                    <div className="author">
                      <div className="flex-shrink-0">
                        <img src={Author2} alt="author" className="img-fluid" />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h2>Michael Wilson</h2>
                        <p>SEO Expert</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slide-item">
                  <div
                    className="testimonial-item"
                    data-aos="fade-right"
                    data-aos-duration={1500}
                  >
                    <FontAwesomeIcon icon={faQuoteLeft} />
                    <p>
                      Lorem ipsum dolor sit amet consectetur dolorum quos. Eum
                      omnis ea consectetur reprehenderit minima similique nemo
                      corporis!
                    </p>
                    <div className="author">
                      <div className="flex-shrink-0">
                        <img src={Author3} alt="author" className="img-fluid" />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h2>Nia Nalson</h2>
                        <p>Business Developer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Testimonial;
