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
  const navLinksRef = useRef(null);

  const [windowSize, setWindowSize] = useState(window.innerWidth);

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

  useEffect(() => {
    const linksHeight =
      navLinksRef.current.getBoundingClientRect().height * navLinks.length;

    if (toggleNav) {
      mobileMenuRef.current.style.height = `${linksHeight}px`;
    } else {
      mobileMenuRef.current.style.height = "0px";
    }
  }, [toggleNav, navLinks.length]);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(window.innerWidth);
    }

    if (windowSize > 768) {
      setToggleNav(false);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize]);

  return (
    <div
      className={`fixed top-0 h-16 w-full flex flex-wrap justify-between items-center px-4 z-10 bg-slate-900`}
    >
      <div className="ml-4">
        <NavLink to="/">
          <img src="/rares_favicon-light.ico" alt="Rares Tincu" />
        </NavLink>
      </div>

      {/* Bars / X - close */}
      <div className="md:hidden z-20" onClick={handleToggleNav}>
        {toggleNav ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>

      {/* menu */}
      <div
        ref={mobileMenuRef}
        className={`bg-slate-900 max-md:flex max-md:flex-col max-md:justify-center max-md:items-center transition-all duration-400 ease-linear max-md:fixed max-md:top-16 max-md:left-0 max-md:w-full md:h-0 md:flex md:mx-auto md:items-center
        ${toggleNav ? "" : "max-md:overflow-hidden"}`}
      >
        {navLinks.map((link) => (
          <div className={`${classes.links} py-2`} key={link} ref={navLinksRef}>
            <NavLink
              to={link === "home" ? "/" : link}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              onClick={() => setToggleNav(false)}
            >
              {link.toLocaleUpperCase()}
            </NavLink>
          </div>
        ))}
      </div>
      {/* menu */}
    </div>
  );
};

export default Navbar;
