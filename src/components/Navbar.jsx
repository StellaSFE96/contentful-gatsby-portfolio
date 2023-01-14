import React from "react";
import { Link } from "@reach/router";
import * as style from "../styles/Navbar.module.scss";

export default function Navbar() {
  return (
    <div className={style.container}>
      <aside>{/* <h1>SS</h1> */}</aside>
      <nav>
        <Link className={style.link} to="/">
          Home
        </Link>
        <Link className={style.link} to="/ProjectsPage/">
          Projects
        </Link>
        <Link className={style.link} to="/AboutMe/">
          About
        </Link>
        <Link className={style.link} to="/Contact/">
          Contact
        </Link>
      </nav>
    </div>
  );
}
