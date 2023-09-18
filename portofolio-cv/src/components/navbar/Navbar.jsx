// import classes from "./Navbar.module.css";
// import { NavLink } from "react-router-dom";
// import { Nav, Navbar as BootStrapNavBar, Container } from "react-bootstrap";

const Navbar = () => {
  // const navLinks = [
  //   "home",
  //   "about",
  //   "skills",
  //   "education",
  //   "projects",
  //   "resume",
  // ];

  return (
    <div className="fixed top-0 h-16 w-full flex justify-between items-center px-4 bg-green-500">
      Navbar
    </div>
  );

  // return (
  //   <BootStrapNavBar
  //     fixed="top"
  //     collapseOnSelect
  //     expand="md"
  //     className={classes.header}
  //   >
  //     <Container>
  //       <BootStrapNavBar.Brand>
  //         <NavLink to="/">
  //           <img src="/rares_favicon-light.ico" alt="Rares Tincu" />
  //         </NavLink>
  //       </BootStrapNavBar.Brand>
  //       <BootStrapNavBar.Toggle aria-controls="responsive-navbar-nav" />
  //       <BootStrapNavBar.Collapse id="responsive-navbar-nav">
  //         <Nav className="me-auto" />
  //         <Nav className="me-auto">
  //           {navLinks.map((link) => (
  //             <div className={classes.links} key={link}>
  //               <NavLink
  //                 to={link === "home" ? "/" : link}
  //                 className={({ isActive }) =>
  //                   isActive ? classes.active : undefined
  //                 }
  //               >
  //                 {link.toLocaleUpperCase()}
  //               </NavLink>
  //             </div>
  //           ))}
  //         </Nav>
  //       </BootStrapNavBar.Collapse>
  //     </Container>
  //   </BootStrapNavBar>
  // );
};

export default Navbar;
