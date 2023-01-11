const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query getAllSlugs {
      allContentfulProject {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  data.allContentfulProject.edges.forEach((edge) => {
    actions.createPage({
      //URL
      path: "/project/" + edge.node.slug,
      component: path.resolve("./src/templates/Project.jsx"),
      context: { slug: edge.node.slug },
    });
  });
};
