import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FAQAccordion() {
  return (
    <section className="faq-section">
      <Container>
        <div className="section-title">
          <span>Popular FAQs</span>
          <h2>Frequently Asked Questions</h2>
        </div>
        <Accordion id="accordionFlushExample">
          <Row>
            {/* FAQ Row 1 */}
            <Col lg={6} md={6} data-aos="fade-left" data-aos-duration="1500">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Do I need a business plan?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  deleniti maxime illo tenetur, eos vero nam possimus.!
                </Accordion.Body>
              </Accordion.Item>
            </Col>
            <Col lg={6} md={6} data-aos="fade-left" data-aos-duration="1500">
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Best IT solutions provider agency
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  deleniti maxime illo tenetur, eos vero nam possimus.!
                </Accordion.Body>
              </Accordion.Item>
            </Col>
            {/* FAQ Row 2 */}
            <Col lg={6} md={6} data-aos="fade-left" data-aos-duration="1500">
              <Accordion.Item eventKey="2">
                <Accordion.Header>How Does Off Site SEO Work?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  deleniti maxime illo tenetur, eos vero nam possimus.!
                </Accordion.Body>
              </Accordion.Item>
            </Col>
            <Col lg={6} md={6} data-aos="fade-left" data-aos-duration="1500">
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  How to learn digital marketing?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  deleniti maxime illo tenetur, eos vero nam possimus.!
                </Accordion.Body>
              </Accordion.Item>
            </Col>
            {/* FAQ Row 3 */}
            <Col lg={6} md={6} data-aos="fade-left" data-aos-duration="1500">
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  Will my website be mobile-friendly?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  deleniti maxime illo tenetur, eos vero nam possimus.!
                </Accordion.Body>
              </Accordion.Item>
            </Col>
            <Col lg={6} md={6} data-aos="fade-left" data-aos-duration="1500">
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  Why is my card payment failing?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  deleniti maxime illo tenetur, eos vero nam possimus.!
                </Accordion.Body>
              </Accordion.Item>
            </Col>
            {/* FAQ Row 4 */}
            <Col lg={6} md={6} data-aos="fade-left" data-aos-duration="1500">
              <Accordion.Item eventKey="6">
                <Accordion.Header>How to track my order?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  deleniti maxime illo tenetur, eos vero nam possimus.!
                </Accordion.Body>
              </Accordion.Item>
            </Col>
            <Col lg={6} md={6} data-aos="fade-left" data-aos-duration="1500">
              <Accordion.Item eventKey="7">
                <Accordion.Header>What is your refund policy?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  deleniti maxime illo tenetur, eos vero nam possimus.!
                </Accordion.Body>
              </Accordion.Item>
            </Col>
          </Row>
        </Accordion>
      </Container>
    </section>
  );
}

export default FAQAccordion;
