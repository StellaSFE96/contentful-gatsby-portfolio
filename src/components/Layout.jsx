import React from "react";
import "../styles/Layout.module.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  console.log(children);
  return (
    <>
      {/* <Header /> */}
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
