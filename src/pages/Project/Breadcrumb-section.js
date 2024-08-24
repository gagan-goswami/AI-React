import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

function Breadcrumb() {
  return (
    // == breadcrumb-section-start ==
    <section className="breadcrumb-section">
      <Container>
        <div className="breadcrumb-box">
          <div className="breadcrumb-heading">
            <h2>Our Project</h2>
          </div>
          <ul className="breadcrumb">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faLongArrowAltRight} />
            </li>
            <li>Our Project</li>
          </ul>
        </div>
      </Container>
    </section>
    // == breadcrumb-section ==
  );
}

export default Breadcrumb;
