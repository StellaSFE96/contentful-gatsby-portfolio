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
