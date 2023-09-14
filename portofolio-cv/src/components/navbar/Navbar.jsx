import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const navLinks = [
    "home",
    "about",
    "skills",
    "education",
    "projects",
    "resume",
  ];
  const [showLinks, setShowLinks] = useState(true);

  const toggleShow = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={classes.header}>
      <div className={classes.navContainer}>
        <div className={classes.logo}>
          <NavLink to="/">
            <img src="/favicon-32x32.png" alt="Rares Tincu" />
          </NavLink>
        </div>

        <button className={classes.toggleLinks} onClick={toggleShow}>
          <FaBars />
        </button>

        <div
          className={`${classes.linksContainer} ${
            showLinks ? classes.showLinks : ""
          }`}
        >
          <ul className={classes.linksList}>
            {navLinks.map((link) => (
              <li key={link}>
                <NavLink
                  to={link === "home" ? "/" : link}
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  {link.toLocaleUpperCase()}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
