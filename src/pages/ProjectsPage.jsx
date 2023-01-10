import * as React from "react";
import { Link, graphql } from "gatsby";

const Projects = ({ data }) => {
  return (
    <main>
      <Link to="/">Home</Link>
      <h1>Hello blog</h1>

      {data.allContentfulBlogPost.edges.map(({ node }) => (
        <article>
          <h2>{node.title}</h2>
          {/* <img src={node.image.url} width="400" alt="image of cats" />
          <p>Publicerat: {node.date}</p>
          <p>Skrivet av:</p>
          {node.author.map(({ name }) => (
            <p>{name}</p>
          ))} */}
        </article>
      ))}
    </main>
  );
};

export default Projects;

export const Head = () => <title>Home Page</title>;

export const query = graphql`
  query MyQuery {
    allContentfulBlogPost {
      edges {
        node {
          title
        }
      }
    }
  }
`;
