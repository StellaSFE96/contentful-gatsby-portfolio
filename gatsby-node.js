const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query getAllSlugs {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  data.allContentfullBlogPost.edges.forEach((edge) => {
    actions.createPage({
      //URL
      path: "/blog/" + edge.node.slug,
      component: path.resolve("./src/pages/Project.jsx"),
      context: { slug: edge.node.slug },
    });
  });
};
