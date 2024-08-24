import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import "../../styles/HeaderStyles.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faBars } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);

  useEffect(() => {
    const handleScroll = () => {
      const stickyClass = "is-sticky-menu";
      const scrollTop = window.scrollY;
      const stickyElement = document.querySelector(".is-sticky-on");

      if (scrollTop >= 250) {
        stickyElement.classList.add(stickyClass);
      } else {
        stickyElement.classList.remove(stickyClass);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle dropdown hover
  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <header className="header-section">
      <div className="menu-bar is-sticky-on">
        <Container>
          <Navbar expand="lg">
            <Navbar.Brand>
              <Link to="/">AITech</Link>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="offcanvasNavbar"
              onClick={handleShowOffcanvas}
            >
              <FontAwesomeIcon icon={faBars} />
            </Navbar.Toggle>
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="start"
              show={showOffcanvas}
              onHide={handleCloseOffcanvas}
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body className="offcanvas-menu">
                <Nav className="ms-auto p-0">
                  <Nav.Item>
                    <Nav.Link as={Link} to="/" className="active">
                      Home
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/About">
                      About
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/Service">
                      Services
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/Projects">
                      Projects
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item
                    className={`dropdown ${isDropdownOpen ? "show" : ""}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Nav.Link href="#">
                      Pages <FontAwesomeIcon icon={faAngleDown} />
                    </Nav.Link>
                    <div
                      className={`dropdown-menu ${
                        isDropdownOpen ? "show" : ""
                      }`}
                    >
                      <Nav.Link
                        as={Link}
                        to="/Features"
                        className="dropdown-item"
                      >
                        Features
                      </Nav.Link>
                      <Nav.Link as={Link} to="/Team" className="dropdown-item">
                        Our Team
                      </Nav.Link>
                      <Nav.Link as={Link} to="/Faqs" className="dropdown-item">
                        FAQs
                      </Nav.Link>
                      <Nav.Link
                        as={Link}
                        to="/Testimonial"
                        className="dropdown-item"
                      >
                        Testimonial
                      </Nav.Link>
                      <Nav.Link
                        as={Link}
                        to="/404Error"
                        className="dropdown-item"
                      >
                        404 Page
                      </Nav.Link>
                    </div>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/ContactUs">
                      Contact
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Navbar>
        </Container>
      </div>
    </header>
  );
};

export default Header;
