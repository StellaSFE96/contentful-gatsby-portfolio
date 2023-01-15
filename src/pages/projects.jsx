import React, { useState } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import * as style from "../styles/ProjectsPage.module.scss";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { allContentfulProject, allContentfulCategory } = useStaticQuery(query);

  return (
    <Layout>
      <main className={style.container}>
        <div className={style.categories}>
          <h1>Filter projects by technologies</h1>
          <ul className={style.listContainer}>
            {allContentfulCategory.edges.map(({ node }) => (
              <li className={style.listItem} key={node.title}>
                <button
                  className={
                    node.title === selectedCategory
                      ? style.selected
                      : style.unselected
                  }
                  onClick={() => setSelectedCategory(node.title)}
                >
                  {node.title}
                </button>
              </li>
            ))}
            <button
              className={style.allButton}
              onClick={() => setSelectedCategory(null)}
            >
              All
            </button>
          </ul>
        </div>

        <div className={style.projects}>
          {allContentfulProject.edges
            .filter(
              ({ node }) =>
                !selectedCategory ||
                node.category.filter(
                  (category) => category.title === selectedCategory
                ).length > 0
            )
            .map(({ node: project }) => (
              <article key={project.slug} className={style.projectContainer}>
                <Link className={style.link} to={`/project/${project.slug}`}>
                  <div className={style.image}>
                    <img
                      src={project.featuredImage.url}
                      alt={project.featuredImage.description}
                    />
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

export const query = graphql`
  query MyQuery {
    allContentfulProject {
      edges {
        node {
          title
          description
          category {
            title
            slug
          }
          featuredImage {
            url
            description
          }
          contentImages {
            url
            description
          }
          link
          slug
        }
      }
    }
    allContentfulCategory {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`;
