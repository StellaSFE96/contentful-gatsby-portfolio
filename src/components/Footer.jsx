import React from "react";
import * as style from "../styles/Footer.module.scss";

function Footer() {
  return (
    <>
      <footer className={style.container}>
        <div>
          <p>Designed and built by Stella Samaranayake</p>
          <p>
            All rights reserved. <span>2023</span>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
