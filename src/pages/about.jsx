import * as React from "react";
import * as style from "../styles/AboutMe.module.scss";
import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <article className={style.container}>
        <h1>This is my About me page</h1>
      </article>
    </Layout>
  );
}
