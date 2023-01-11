import * as React from "react";
import { Link, graphql } from "gatsby";

const Projects = ({ data }) => {
  return (
    <main>
      <Link to="/">Home</Link>
      <h1>My Projects</h1>
      <br />

      {data.allContentfulProject.edges.map(({ node }) => (
        <article>
          <Link to={`/project/${slug}`}>
            {" "}
            <h2>{node.title}</h2>
          </Link>

          <img src={node.featuredImage.url} width="400" />
          <p>{node.featuredImage.description}</p>
        </article>
      ))}
    </main>
  );
};

export default Projects;

export const Head = () => <title>Home Page</title>;

export const query = graphql`
  query MyQuery {
    allContentfulProject {
      edges {
        node {
          title
          featuredImage {
            description
            url
          }
        }
      }
    }
  }
`;

{
  /* <p>Publicerat: {node.date}</p> */
}
{
  /* {node.author.map(({ name }) => (
            <p>{name}</p>
          ))} */
}
