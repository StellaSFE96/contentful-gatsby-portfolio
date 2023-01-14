import * as React from "react";
import * as style from "../styles/Project.module.scss";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
// import Icon from "../assets/arrow.svg";

const ProjectPage = ({ data }) => {
  const singleProject = data.contentfulProject;
  return (
    <Layout>
      <main className={style.container}>
        <section>
          <aside>
            <h1>{singleProject.title}</h1>

            <a href={singleProject.link} target="_blank" rel="noreferrer">
              Live project
              {/* <span>
                <Icon />;
              </span> */}
            </a>
          </aside>
          {/* <p>{singleProject.projectDescription.projectDescription}</p> */}
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis,
            nam non. Nam nesciunt atque saepe ad ullam culpa ipsum, dolorum aut
            reiciendis sint blanditiis, iusto sit officia minima id quod nemo,
            sunt hic? Architecto optio, ea dolores alias necessitatibus
            molestiae doloribus quae reiciendis dolorum ipsum ducimus similique
            aut saepe sint?
          </p>
        </section>

        <article>
          {singleProject.contentImages.map(
            ({ file: { url }, title }, index) => (
              <img key={index} src={url} alt={title} />
            )
          )}
        </article>
      </main>
    </Layout>
  );
};

export default ProjectPage;

export const Head = () => <title>Projectsss</title>;

export const query = graphql`
  query singleProjectQuery($slug: String) {
    contentfulProject(slug: { eq: $slug }) {
      title
      link
      projectDescription {
        projectDescription
      }
      contentImages {
        title
        file {
          url
          contentType
        }
      }
    }
  }
`;
