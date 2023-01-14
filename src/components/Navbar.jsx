import React, { useEffect } from "react";
import { Link } from "@reach/router";
import * as style from "../styles/Navbar.module.scss";
import "aos/dist/aos.css";

export default function Navbar() {
  let AOS;

  useEffect(() => {
    /**
     * Server-side rendering does not provide the 'document' object
     * therefore this import is required either in useEffect or componentDidMount as they
     * are exclusively executed on a client
     */
    const AOS = require("aos");
    AOS.init({
      once: true,
    });
  }, []);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });

  return (
    <div className={style.container}>
      <aside>{/* <h1>SS</h1> */}</aside>
      <nav>
        <Link className={style.link} to="/">
          Home
        </Link>
        <Link className={style.link} to="/projects/">
          Projects
        </Link>
        <Link className={style.link} to="/about/">
          About
        </Link>
        <Link className={style.link} to="/contact/">
          Contact
        </Link>
      </nav>
    </div>
  );
}
