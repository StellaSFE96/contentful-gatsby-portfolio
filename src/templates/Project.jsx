import * as React from "react";
import { Link, graphql } from "gatsby";

const ProjectPage = ({ data }) => {
  const singleProject = data.contentfulProject;
  return (
    <main>
      <Link to="/ProjectsPage/">Projects</Link>
      <h1>my project</h1>
      <h2>{singleProject.title}</h2>
      <p>{singleProject.projectDescription.projectDescription}</p>
      <p>Published: {singleProject.dateAndTime}</p>

      <Link to="">Live project</Link>
      {singleProject.contentImages.map(({ file: { url }, title }, index) => (
        <img key={index} src={url} alt={title} />
      ))}
    </main>
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
      dateAndTime(formatString: "YYYY-MM-DD")
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
