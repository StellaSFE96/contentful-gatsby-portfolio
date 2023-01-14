import * as React from "react";
import * as style from "../styles/AboutMe.module.scss";
import Layout from "../components/Layout";
import { graphql, useStaticQuery } from "gatsby";

export default function About() {
  // Trying useStaticQuery in this specific query
  const { contentfulAboutMe, allContentfulEducationEntry } =
    useStaticQuery(query);

  return (
    <Layout>
      <article className={style.container}>
        <aside>
          <h1>{contentfulAboutMe.title}</h1>
          <p>{contentfulAboutMe.description.description}</p>
        </aside>
        <section>
          <div className={style.experienceContainer}>
            <h1 className={style.experienceTitle}>Experience</h1>
            {/* <ul>
              {allContentfulEducationEntry.nodes.map((education) => (
                <li key={education.educationTitle}>
                  <div>
                    <h1>{education.educationTitle}</h1>
                    <h2>
                      {education.fromDate} - {education.toDate}
                    </h2>
                  </div>
                  <p>{education.shortDescription}</p>
                  <p>{education.educationDescription}</p>
                </li>
              ))}
            </ul> */}
          </div>
          <div className={style.educationContainer}>
            <h1 className={style.educationTitle}>Education</h1>
            <ul>
              {allContentfulEducationEntry.nodes.map((education) => (
                <li key={education.educationTitle}>
                  <div>
                    <h1>{education.educationTitle}</h1>
                    <h2>
                      {education.fromDate} - {education.toDate}
                    </h2>
                  </div>
                  <p>{education.shortDescription}</p>
                  <p>{education.educationDescription}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </article>
    </Layout>
  );
}

export const query = graphql`
  query AboutMeQuery {
    contentfulAboutMe {
      title
      description {
        description
      }
    }
    allContentfulEducationEntry {
      nodes {
        educationTitle
        shortDescription
        educationDescription
        fromDate(formatString: "YYYY-MM-DD")
        toDate(formatString: "YYYY-MM-DD")
      }
    }
  }
`;
