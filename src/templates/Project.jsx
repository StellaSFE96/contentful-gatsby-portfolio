import * as React from "react";
import * as style from "../styles/Project.module.scss";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export default function Project({ data }) {
  const singleProject = data.contentfulProject;
  return (
    // Layout component use to wrap all other elements with header and footer as seen in layout.jsx
    <Layout>
      <main className={style.container}>
        <section>
          <aside>
            <h1>{singleProject.title}</h1>

            <a href={singleProject.link} target="_blank" rel="noreferrer">
              Live project
            </a>
          </aside>
          <p>{singleProject.projectDescription.projectDescription}</p>
        </section>

        <article>
          {/* map function displaying project images */}
          {singleProject.contentImages.map(({ url, description }, index) => (
            <img key={index} src={url} alt={description} />
          ))}
        </article>
      </main>
    </Layout>
  );
}

// GraphQl query for project information

export const query = graphql`
  query singleProjectQuery($slug: String) {
    contentfulProject(slug: { eq: $slug }) {
      title
      link
      projectDescription {
        projectDescription
      }
      contentImages {
        url
        description
      }
    }
  }
`;
