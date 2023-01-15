import React, { useState } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import * as style from "../styles/ProjectsPage.module.scss";

const Projects = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    // Layout component use to wrap all other elements with header and footer as seen in layout.jsx
    <Layout>
      <main className={style.container}>
        <div className={style.categories}>
          <h1>Filter projects by technologies</h1>
          <ul className={style.listContainer}>
            {data.allContentfulCategories.edges.map(({ node }) => (
              <li key={node.title}>
                <button onClick={() => setSelectedCategory(node.title)}>
                  {node.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className={style.projects}>
          {data.allContentfulProject.edges
            .filter(
              ({ node }) =>
                !selectedCategory ||
                node.referenceToCategory.title === selectedCategory
            )
            .map(({ node: project }) => (
              <article key={project.id} className={style.projectContainer}>
                <Link className={style.link} to={`/project/${project.slug}`}>
                  <div className={style.image}>
                    <img src={project.featuredImage.url} alt={project.title} />
                  </div>
                  <div className={style.details}>
                    <h1>{project.title}</h1>
                    <p>{project.featuredImage.description}</p>
                  </div>
                </Link>
              </article>
            ))}
        </div>
      </main>
    </Layout>
  );
};

export default Projects;

// GraphQl query for Project page information and categories
export const query = graphql`
  query ProjectQuery {
    allContentfulProject {
      edges {
        node {
          title
          slug
          referenceToCategory {
            title
          }
          featuredImage {
            description
            url
          }
        }
      }
    }
    allContentfulCategories {
      edges {
        node {
          title
        }
      }
    }
  }
`;
