import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const navLinks = [
    "home",
    "about",
    "skills",
    "education",
    "projects",
    "resume",
  ];

  const [toggleNav, setToggleNav] = useState(false);
  const mobileMenuRef = useRef(null);

  const handleToggleNav = (event) => {
    event.stopPropagation();
    setToggleNav(!toggleNav);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        // Close the mobile menu when clicking outside
        setToggleNav(false);
      }
    };
    // Attach the event listener when the mobile menu is open
    if (toggleNav) {
      window.addEventListener("click", handleClickOutside);
    }

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("click", handleClickOutside);
    };
  }, [toggleNav]);

  return (
    <div
      className={`fixed top-0 h-16 w-full flex justify-between items-center px-4 z-10 bg-slate-900`}
    >
      <div className="ml-4">
        <NavLink to="/">
          <img src="/rares_favicon-light.ico" alt="Rares Tincu" />
        </NavLink>
      </div>

      {/* menu */}
      <div className="hidden md:flex mx-auto">
        {navLinks.map((link) => (
          <div className={`${classes.links} py-2`} key={link}>
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
      </div>
      {/* menu */}

      {/* Bars */}
      <div className="md:hidden z-20" onClick={handleToggleNav}>
        {toggleNav ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>

      {/* mobile menu */}
      <div
        ref={mobileMenuRef}
        className={
          toggleNav
            ? "md:hidden fixed top-16 left-0 w-full bg-slate-900 flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        {navLinks.map((link) => (
          <div className={`${classes.links} py-2`} key={link}>
            <NavLink
              to={link === "home" ? "/" : link}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              onClick={handleToggleNav}
            >
              {link.toLocaleUpperCase()}
            </NavLink>
          </div>
        ))}
      </div>
      {/* mobile menu */}
    </div>
  );
};

export default Navbar;
