import React, { useState } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import * as style from "../styles/ProjectsPage.module.scss";

const Projects = ({ data }) => {
  // the useState hook is used to create a selectedCategory state variable and a setSelectedCategory function. This is initially set to null.
  const [selectedCategory, setSelectedCategory] = useState(null);

  //The hook returns an object with allContentfulProject and allContentfulCategory properties.
  const project = data.allContentfulProject.edges;

  return (
    <Layout>
      <main className={style.container}>
        <div className={style.categories}>
          <h1>Filter projects by technologies</h1>

          {/* The categories section displays a header with an instruction, and a list of buttons, one for each category, which the user can click on to filter the displayed projects. */}

          <ul className={style.listContainer}>
            {/* The list of categories is mapped over the edges of allContentfulCategory.*/}
            {data.allContentfulCategory.edges.map(({ node }) => (
              <li className={style.listItem} key={node.title}>
                {/* For each node, a list item is rendered containing a button that has a title of the node and a onClick event. */}
                <button
                  className={
                    node.title === selectedCategory
                      ? style.selected
                      : style.unselected
                  }
                  // onClick event sets the selectedCategory to the title of the node.
                  onClick={() => setSelectedCategory(node.title)}
                >
                  {node.title}
                </button>
              </li>
            ))}

            {/* Button with onClick event that sets the selectedCategory state variable to null. Used to clear selected category filter and showing all projects  */}
            <button
              className={style.allButton}
              onClick={() => setSelectedCategory(null)}
            >
              All
            </button>
          </ul>
        </div>

        {/* The projects section displays a list of projects, filtered by the selected category, if any. */}
        <div className={style.projects}>
          {project
            .filter(
              ({ node }) =>
                !selectedCategory ||
                node.category.filter(
                  //filtered based on whether the selectedCategory is null or if the title of the category is equal to the selectedCategory.
                  (category) => category.title === selectedCategory
                ).length > 0
            )
            // Then for each node, an article element is rendered.
            .map(({ node: project }) => (
              <article key={project.slug} className={style.projectContainer}>
                <Link className={style.link} to={`/project/${project.slug}`}>
                  <div className={style.imageContainer}>
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

// graphql query used to fetch all projects and categories from Contentful
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
