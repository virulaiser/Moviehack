import { NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./NavbarStyles.css";
import { BiMoviePlay } from "react-icons/bi";

function NavbarFilm() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`${scroll ? "nav-scroll" : "nav-top"} navbar-custom`}
        fixed="top"
      >
        <div>
          <NavLink to="/" className="navbar-icon">
            <BiMoviePlay />
          </NavLink>
        </div>
        <div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <NavLink className="nav-link" aria-current="page" to="/search">
                Search
              </NavLink>
              <NavLink className="nav-link" to="/about-us">
                About This Project
              </NavLink>
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}
export default NavbarFilm;
