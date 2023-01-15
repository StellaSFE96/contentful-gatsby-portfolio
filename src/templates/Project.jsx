import * as React from "react";
import * as style from "../styles/Project.module.scss";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";

export default function Project({ pageContext }) {
  // using useStaticQuery hook to retrieve data from GraphQL at build time
  const { contentfulProject } = useStaticQuery(query, {
    variables: {
      slug: pageContext.slug,
    },
  });
  return (
    // Layout component use to wrap all other elements with header and footer as seen in layout.jsx
    <Layout>
      <main className={style.container}>
        <section>
          <aside>
            <h1>{contentfulProject.title}</h1>

            <a href={contentfulProject.link} target="_blank" rel="noreferrer">
              Live project
            </a>
          </aside>
          <p>{contentfulProject.projectDescription.projectDescription}</p>
        </section>

        <article>
          {/* map function displaying project images */}
          {contentfulProject.contentImages.map((image) => (
            <img key={image.index} src={image.url} alt={image.description} />
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
// export const query = graphql`
//   query singleProjectQuery($slug: String) {
//     contentfulProject(slug: { eq: $slug }) {
//       title
//       link
//       projectDescription {
//         projectDescription
//       }
//       contentImages {
//         url
//         description
//       }
//     }
//   }
// `;
