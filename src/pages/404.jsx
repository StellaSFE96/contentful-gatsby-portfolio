import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import * as style from "../styles/Redirect.module.scss";

const NotFound = () => {
  return (
    <Layout>
      <div className={style.container}>
        <h1>Oops! Page not found.</h1>
        <Link className={style.homeBtn} to="/">
          Go back...
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
