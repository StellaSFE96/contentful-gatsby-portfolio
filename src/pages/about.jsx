import * as React from "react";
import * as style from "../styles/AboutMe.module.scss";
import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <article className={style.container}>
        <aside>
          <h1>This is my About me page</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            temporibus similique unde natus blanditiis quis, necessitatibus,
            repudiandae rerum voluptate harum quibusdam distinctio reiciendis
            odit illum dolorum reprehenderit quos dignissimos laudantium?
          </p>
        </aside>
        <section>
          <div className={style.experienceContainer}>
            <h1 className={style.experienceTitle}>Experience</h1>
            <ul>
              <li>
                <div>
                  <h1>Jobb som nånting</h1>
                  <h2>2022-01-01 - 2022-01-01</h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  voluptas cupiditate, sapiente quis dolores delectus aperiam
                  odio suscipit et minus veniam corrupti aspernatur hic fugit
                  nobis. Eius, ex quia eum molestiae sunt voluptas quae, iusto
                  sit ipsam id repellendus aspernatur?
                </p>
              </li>
              <li>
                <div>
                  <h1>Jobb som nånting</h1>
                  <h2>2022-01-01 - 2022-01-01</h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique, nobis.
                </p>
              </li>
              <li>
                <div>
                  <h1>Jobb som nånting</h1>
                  <h2>2022-01-01- 2022-01-01</h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique, nobis.
                </p>
              </li>
            </ul>
          </div>
          <div className={style.educationContainer}>
            <h1 className={style.educationTitle}>Education</h1>
            <ul>
              <li>
                <div>
                  <h1>Plugg plugg</h1>
                  <hr />
                  <h2>2022-01-01 - 2022-01-01</h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique, nobis.
                </p>
              </li>
              <li>
                <div>
                  <h1>Plugg plugg</h1>
                  <h2>2022-01-01 - 2022-01-01</h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique, nobis.
                </p>
              </li>
              <li>
                <div>
                  <h1>Plugg plugg</h1>
                  <h2>2022-01-01 - 2022-01-01</h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique, nobis.
                </p>
              </li>
            </ul>
          </div>
        </section>
      </article>
    </Layout>
  );
}
