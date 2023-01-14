import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
// import * as style from "../styles/redirect.module.scss";

const NotFoundPage = () => {
  return (
    <Layout>
      <div>
        <h1>Page not found.</h1>
        <Link to="/">Go back to homepage...</Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
