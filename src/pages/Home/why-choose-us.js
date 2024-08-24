import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Feature from "../../assets/images/feature.png";
import { faCheck, faUsers } from "@fortawesome/free-solid-svg-icons";

function WhyChooseUs() {
  useEffect(() => {
    const counters = document.querySelectorAll(".counter-value");
    counters.forEach((counter) => {
      const updateCount = () => {
        const target = 999; // Set the counter target to 999
        const count = +counter.innerText;
        const speed = 5000; // Change animation speed
        const increment = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  }, []);

  return (
    <section className="whychooseus-section  feature-section">
      <Container>
        <Row>
          <Col lg={6}>
            <div
              className="whychooseus-item"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <div className="whychooseus-caption">
                <span>Why Choose Us</span>
                <h2>We're Best in AI Industry with 10 Years of Experience</h2>
                <p>
                  Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
                  et sit, sed stet no labore lorem sit. Sanctus clita duo justo
                  et tempor
                </p>

                <p className="list">
                  <FontAwesomeIcon icon={faCheck} /> Diam dolor diam ipsum et
                  tempor sit
                </p>
                <p className="list">
                  <FontAwesomeIcon icon={faCheck} /> Diam dolor diam ipsum et
                  tempor sit
                </p>
                <p className="list">
                  <FontAwesomeIcon icon={faCheck} /> Diam dolor diam ipsum et
                  tempor sit
                </p>
              </div>
              <div className="counter-box">
                <div className="counter-item ">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <FontAwesomeIcon icon={faUsers} />
                    </div>
                    <div className="flex-grow-1 ms-3 align-items-center">
                      <h2 className="mt-0 counter-value">0</h2>
                      <p>Happy Clients</p>
                    </div>
                  </div>
                </div>
                <div className="counter-item">
                  <div className="d-flex">
                    <div className="flex-shrink-0 align-items-center">
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <div className="flex-grow-1 ms-3 align-items-center">
                      <h2 className="mt-0 counter-value">0</h2>
                      <p>Project Complete</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div
              className="whychooseus-item"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <div className="whychooseus-image">
                <img src={Feature} alt="Featureimg" className="img-fluid" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default WhyChooseUs;
