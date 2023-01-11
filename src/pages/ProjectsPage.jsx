import * as React from "react";
import { Link, graphql } from "gatsby";

const Projects = ({ data }) => {
  return (
    <main>
      <Link to="/">Home</Link>
      <h1>My Projects</h1>
      <br />

      {data.allContentfulProject.edges.map(({ node: project }) => (
        <article key={project.id}>
          <Link to={`/project/${project.slug}`}>
            {" "}
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
