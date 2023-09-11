import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

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
    <nav className={classes.header}>
      <div className={classes.navContainer}>
        <div className={classes.logo}>
          <NavLink to="/">
            <img src="/favicon-32x32.png" alt="Rares Tincu" />
          </NavLink>
        </div>

        <ul className={classes.linksList}>
          {navLinks.map((link) => (
            <li key={link}>
              <NavLink to={link === "home" ? "/" : link}>
                {link.toLocaleUpperCase()}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
