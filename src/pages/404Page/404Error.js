import React from "react";
import Layout from "../../components/Layout/Layout";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import PhoneImage from "../../assets/images/phone.gif";
import Breadcrumb from "../../pages/404Page/Breadcrumb-section";
import Newsletter from "../Home/Newsletter-section";

function Error() {
  return (
    <>
      <Layout>
        {/* Breadcrumb-section */}
        <Breadcrumb />

        {/* == 404-section-start == */}
        <section className="page-404">
          <Container>
            <Row className="justify-content-center">
              <Col md={8} lg={6} className="text-center">
                <div className="error-box">
                  <img src={PhoneImage} alt="phone-gif" className="img-fluid" />
                  <span className="title">Error: 404 page not found</span>
                  <p>Sorry, the page you're looking for cannot be accessed</p>
                  <div className="back-link">
                    <Link to="/">Back To Home</Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <Newsletter />
      </Layout>
      {/* == 404-section-end == */}
    </>
  );
}

export default Error;
