// import * as React from "react";
// import { Link, graphql } from "gatsby";
// import Layout from "../components/Layout";
// import * as style from "../styles/ProjectsPage.module.scss";

// const Projects = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const { allContentfulProject, allContentfulCategory } = useStaticQuery(query);

//   return (
//     <Layout>
//       <main className={style.container}>
//         <div className={style.categories}>
//           <h1>Filter projects by technologies</h1>
//           <div>
//             {allContentfulCategory.edges.map(({ node }) => (
//               <button
//                 key={node.title}
//                 onClick={() => setSelectedCategory(node.title)}
//               >
//                 {node.title}
//               </button>
//             ))}
//             <button onClick={() => setSelectedCategory(null)}>All</button>
//           </div>
//         </div>

//         <div className={style.projects}>
//           {allContentfulProject.edges
//             .filter(
//               ({ node }) =>
//                 !selectedCategory ||
//                 node.category.filter(
//                   (category) => category.title === selectedCategory
//                 ).length > 0
//             )
//             .map(({ node: project }) => (
//               <article key={project.slug}>
//                 <Link className={style.link} to={`/project/${project.slug}`}>
//                   <div className={style.image}>
//                     <img
//                       src={project.featuredImage.url}
//                       alt={project.featuredImage.description}
//                     />
//                   </div>

//                   <div className={style.details}>
//                     <h1>{project.title}</h1>
//                     <p>{project.featuredImage.description}</p>
//                   </div>
//                 </Link>
//               </article>
//             ))}
//         </div>
//       </main>
//     </Layout>
//   );
// };

// export default Projects;

// export const query = graphql`
//   query MyQuery {
//     allContentfulProject {
//       edges {
//         node {
//           title
//           slug
//           featuredImage {
//             description
//             url
//           }
//         }
//       }
//     }
//     allContentfulCategories {
//       edges {
//         node {
//           title
//         }
//       }
//     }
//   }
// `;

// more code -------------

// import React, { useState } from "react";
// import { Link, graphql, useStaticQuery } from "gatsby";
// import Layout from "../components/Layout";
// import * as style from "../styles/ProjectsPage.module.scss";

// const Projects = () => {
//   const { allContentfulProject, allContentfulCategories } =
//     useStaticQuery(query);

//   const [selectedCategory, setSelectedCategory] = useState(null);

//   return (
//     // Layout component use to wrap all other elements with header and footer as seen in layout.jsx
//     <Layout>
//       <main className={style.container}>
//         <div className={style.categories}>
//           <h1>Filter projects by technologies</h1>
//           <ul className={style.listContainer}>
//             {allContentfulCategories.edges.map(({ node }) => (
//               <li key={node.title}>
//                 <button onClick={() => setSelectedCategory(node.title)}>
//                   {node.title}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className={style.projects}>
//           {allContentfulProject.edges
//             .filter(
//               ({ node }) =>
//                 !selectedCategory ||
//                 node.referenceToCategory.title === selectedCategory
//             )
//             .map(({ node: project }) => (
//               <article key={project.id} className={style.projectContainer}>
//                 <Link className={style.link} to={`/project/${project.slug}`}>
//                   <div className={style.image}>
//                     <img src={project.featuredImage.url} alt={project.title} />
//                   </div>
//                   <div className={style.details}>
//                     <h1>{project.title}</h1>
//                     <p>{project.featuredImage.description}</p>
//                   </div>
//                 </Link>
//               </article>
//             ))}
//         </div>
//       </main>
//     </Layout>
//   );
// };
// export default Projects;

// // GraphQl query for Project page information and categories
// export const query = graphql`
//   query ProjectQuery {
//     allContentfulProject {
//       edges {
//         node {
//           title
//           slug
//           referenceToCategory {
//             title
//           }
//           featuredImage {
//             description
//             url
//           }
//         }
//       }
//     }
//     allContentfulCategories {
//       edges {
//         node {
//           title
//         }
//       }
//     }
//   }
// `;

// export const query = graphql`
//   query {
//     allContentfulProject {
//       edges {
//         node {
//           title
//           description
//           featuredImage {
//             url
//           }
//           contentImages {
//             url
//           }
//           link
//           slug
//           category {
//             title
//             slug
//           }
//         }
//       }
//     }
//     allContentfulCategory {
//       edges {
//         node {
//           title
//           slug
//         }
//       }
//     }
//   }
// `;

// ORIGINAL CODE BELOW

// import * as React from "react";
// import { Link, graphql } from "gatsby";
// import Layout from "../components/Layout";
// import * as style from "../styles/ProjectsPage.module.scss";

// const Projects = ({ data }) => {
//   return (
//     <Layout>
//       <main className={style.container}>
//         <div className={style.categories}>
//           <h1>Filter projects by technologies</h1>
//         </div>
//         <div className={style.projects}>
//           {data.allContentfulProject.edges.map(({ node: project }) => (
//             <article key={project.id}>
//               <Link className={style.link} to={`/project/${project.slug}`}>
//                 <div className={style.image}>
//                   <img src={project.featuredImage.url} alt={project.title} />
//                 </div>

//                 <div className={style.details}>
//                   <h1>{project.title}</h1>

//                   <p>{project.featuredImage.description}</p>
//                 </div>
//               </Link>
//             </article>
//           ))}
//         </div>
//       </main>
//     </Layout>
//   );
// };

// export default Projects;

// export const query = graphql`
//   query MyQuery {
//     allContentfulProject {
//       edges {
//         node {
//           title
//           slug
//           featuredImage {
//             description
//             url
//           }
//         }
//       }
//     }
//     allContentfulCategories {
//       edges {
//         node {
//           title
//         }
//       }
//     }
//   }
// `;
