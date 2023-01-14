import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import * as style from "../styles/ProjectsPage.module.scss";

const Projects = ({ data }) => {
  return (
    <Layout>
      <main className={style.container}>
        <div className={style.projects}>
          {data.allContentfulProject.edges.map(({ node: project }) => (
            <article key={project.id}>
              <div>
                <img src={project.featuredImage.url} alt={project.title} />
              </div>
              <Link className={style.link} to={`/project/${project.slug}`}>
                <h2>{project.title}</h2>
              </Link>
              <p>{project.featuredImage.description}</p>
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
