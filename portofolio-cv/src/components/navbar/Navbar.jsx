import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { Nav, Navbar as BootStrapNavBar, Container } from "react-bootstrap";

const Navbar = () => {
  const navLinks = [
    "home",
    "about",
    "skills",
    "education",
    "projects",
    "resume",
  ];

  return (
    <BootStrapNavBar
      fixed="top"
      collapseOnSelect
      expand="md"
      className={classes.header}
    >
      <Container>
        <BootStrapNavBar.Brand>
          <NavLink to="/">
            <img src="/favicon-32x32.png" alt="Rares Tincu" />
          </NavLink>
        </BootStrapNavBar.Brand>
        <BootStrapNavBar.Toggle aria-controls="responsive-navbar-nav" />
        <BootStrapNavBar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" />
          <Nav className="me-auto">
            {navLinks.map((link) => (
              <div className={classes.links} key={link}>
                <NavLink
                  to={link === "home" ? "/" : link}
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  {link.toLocaleUpperCase()}
                </NavLink>
              </div>
            ))}
          </Nav>
        </BootStrapNavBar.Collapse>
      </Container>
    </BootStrapNavBar>
  );
};

export default Navbar;
