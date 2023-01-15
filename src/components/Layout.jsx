import React from "react";
import "../styles/Layout.module.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Layout component structure used to wrap other components/ elements with navbar and footer
// Passing children as props which represents the wrapped components/ elements
function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
