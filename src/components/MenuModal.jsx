import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, NavLink } from "react-router-dom";

function MenuModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        fixed="top"
        variant="primary"
        onClick={handleShow}
        className="me-2"
      >
        <i class="fa-solid fa-bars"></i>
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton className="bg-primary">
          <Offcanvas.Title>
            <h2 className="text-white fst-italic">Hackflix</h2>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="modal-bg">
          <div className="container text-white">
            <div className="row">
              <div className="col-12 mt-4">
                Dive into the World of Cinema! Explore In-Depth Movie
                Information and Insights. Discover Fascinating Details, Trivia,
                and Behind-the-Scenes Stories about Your Favorite Films. Your
                Ultimate Destination for Movie Enthusiasts!
                <p>
                  <NavLink
                    to="/buscar"
                    className="navbar-brand text-dark text-decoration-underline"
                  >
                    Search
                  </NavLink>
                </p>
              </div>
              <div className="col-12 mt-4">
                Meet the Visionary Behind Our Platform! Learn About the Creator
                and Their Passion for Bringing You the Best Movie Experience.
                Discover the Story, Inspiration, and Dedication that Drive Our
                Cinematic Journey. Welcome to the World of Movies, Crafted with
                Love and Expertise.
                <p>
                  <NavLink
                    to="/sobre-nosotros"
                    className="navbar-brand text-dark text-decoration-underline"
                  >
                    Learn more
                  </NavLink>
                </p>
              </div>
              <div className="col-12 mt-4">
                Get in Touch with Us! We Value Your Feedback and Questions.
                Reach Out to Our Team for Any Inquiries or Suggestions. We're
                Here to Assist You and Enhance Your Experience. Feel Free to
                Connect with Us Today!
                <p>
                  <NavLink
                    to="/contacto"
                    className="navbar-brand text-dark text-decoration-underline"
                  >
                    Contact us
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default MenuModal;
