import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import * as style from "../styles/Index.module.scss";

const IndexPage = () => {
  return (
    <Layout>
      <div className={style.container}>
        <Link to="/ProjectsPage/">Projects</Link>
        <h1 className={style.title}>Hello home</h1>
      </div>
    </Layout>
  );
};

export default IndexPage;
