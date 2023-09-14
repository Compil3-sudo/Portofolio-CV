import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/scroll/ScrollToTop";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main style={{ marginTop: "4rem" }}>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
