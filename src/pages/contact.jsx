import * as React from "react";
import Layout from "../components/Layout";
import * as style from "../styles/Contact.module.scss";

export default function contact() {
  return (
    <Layout>
      <article className={style.container}>
        <h1>This is my Contact me page</h1>
      </article>
    </Layout>
  );
}
