import React from "react";
import Layout from "../../components/Layout/Layout";
import { Container, Row, Col } from "react-bootstrap";
import Breadcrumb from "../../pages/Contact/Breadcrumb-section";
import Newsletter from "../Home/Newsletter-section";

function ContactUs() {
  return (
    <>
      <Layout>
        {/* Breadcrumb-section */}
        <Breadcrumb />

        {/* == contact-section-start == */}
        <section className="get-in-touch">
          <Container>
            <div className="section-title">
              <span>Get In Touch</span>
              <h2>Contact for any query​</h2>
            </div>
            <Row>
              <Col lg={6}>
                <div
                  className="get-in-touch-item"
                  data-aos="fade-down-right"
                  data-aos-duration={1500}
                >
                  <div className="google-map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus"
                      style={{ border: "none" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Google Maps Embed"
                    />
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div
                  className="get-in-touch-item"
                  data-aos="fade-down-left"
                  data-aos-duration={1500}
                >
                  <form method="post">
                    <div className="form-group">
                      <Col md={12}>
                        <input
                          type="text"
                          className="form-control"
                          name="name" // Corrected unique name
                          placeholder="Your Name: "
                        />
                      </Col>
                    </div>
                    <div className="form-group">
                      <Col md={12}>
                        <input
                          type="text"
                          className="form-control"
                          name="phoneNumber" // Corrected unique name
                          placeholder="Phone Number: "
                        />
                      </Col>
                    </div>
                    <div className="form-group">
                      <Col md={12}>
                        <input
                          type="email" // Corrected type to email
                          className="form-control"
                          name="emailAddress" // Corrected unique name
                          placeholder="Email Address: "
                        />
                      </Col>
                    </div>
                    <div className="form-group">
                      <Col md={12}>
                        <textarea
                          className="form-control"
                          rows={5}
                          name="message" // Added name attribute
                          placeholder="Message:"
                        />
                      </Col>
                    </div>
                    <div className="form-group">
                      <Col md={6} className="mt-4">
                        <button className="submit-btn" type="submit">
                          Send Now
                        </button>
                      </Col>
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* == contact-section-end == */}
        <Newsletter />
      </Layout>
    </>
  );
}

export default ContactUs;
