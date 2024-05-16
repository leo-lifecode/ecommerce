import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";
import Subscribe from "../components/Subscribe";

const LayoutHome = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Subscribe />
      <Footer />;
    </>
  );
};

export default LayoutHome;
