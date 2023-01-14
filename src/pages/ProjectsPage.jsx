import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import * as style from "../styles/ProjectsPage.module.scss";

const Projects = ({ data }) => {
  return (
    <Layout>
      <main className={style.container}>
        <Link className={style.homeButton} to="/">
          Home
        </Link>
        <h1 className={style.title}>My Projects</h1>
        <br />

        {data.allContentfulProject.edges.map(({ node: project }) => (
          <article key={project.id}>
            <Link className={style.link} to={`/project/${project.slug}`}>
              <h2>{project.title}</h2>
            </Link>

            <img
              src={project.featuredImage.url}
              width="400"
              alt={project.title}
            />
            <p>{project.featuredImage.description}</p>
          </article>
        ))}
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
          slug
          featuredImage {
            description
            url
          }
        }
      }
    }
  }
`;
