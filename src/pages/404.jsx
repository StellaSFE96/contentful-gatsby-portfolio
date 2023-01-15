import * as React from "react";
import * as style from "../styles/Redirect.module.scss";
import Layout from "../components/Layout";
import { Link } from "gatsby";

const NotFound = () => {
  return (
    // Layout component use to wrap all other elements with header and footer as seen in layout.jsx
    <Layout>
      <article className={style.container}>
        <h1>Oops! Page not found.</h1>
        <Link className={style.homeButton} to="/">
          Go back...
        </Link>
      </article>
    </Layout>
  );
};

export default NotFound;
