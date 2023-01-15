import * as React from "react";
import * as style from "../styles/AboutMe.module.scss";
import Layout from "../components/Layout";
import { graphql, useStaticQuery } from "gatsby";

export default function About() {
  // using useStaticQuery hook to retrieve data from GraphQL at build time
  const {
    contentfulAboutMe,
    allContentfulEducationEntry,
    allContentfulExperienceEntry,
  } = useStaticQuery(query);

  return (
    // Layout component use to wrap all other elements with header and footer as seen in layout.jsx
    <Layout>
      <article className={style.container}>
        {/* aside displaying title and description for the about me page */}
        <aside>
          <h1>{contentfulAboutMe.title}</h1>
          <p>{contentfulAboutMe.description.description}</p>
        </aside>
        <section>
          {/* div displaying experience info */}
          <div className={style.experienceContainer}>
            <h1 className={style.experienceTitle}>Experience</h1>
            <ul>
              {/* using map to display several experience entries */}
              {allContentfulExperienceEntry.nodes.map((experience) => (
                <li key={experience.experienceTitle}>
                  <div>
                    <h1>{experience.experienceTitle}</h1>
                    <h2>
                      {experience.fromDate} - {experience.toDate}
                    </h2>
                  </div>
                  <h3>{experience.shortDescription}</h3>
                  <p>
                    {experience.experienceDescription.experienceDescription}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          {/* div displaying education info */}
          <div className={style.educationContainer}>
            <h1 className={style.educationTitle}>Education</h1>
            <ul>
              {/* using map to display several education entries */}
              {allContentfulEducationEntry.nodes.map((education) => (
                <li key={education.educationTitle}>
                  <div>
                    <h1>{education.educationTitle}</h1>
                    <h2>
                      {education.fromDate} - {education.toDate}
                    </h2>
                  </div>
                  <h3>{education.shortDescription}</h3>
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

// GraphQl query for about me section, education entries and experience entries
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
    allContentfulExperienceEntry {
      nodes {
        experienceTitle
        shortDescription
        experienceDescription {
          experienceDescription
        }
        fromDate(formatString: "YYYY-MM-DD")
        toDate(formatString: "YYYY-MM-DD")
      }
    }
  }
`;
