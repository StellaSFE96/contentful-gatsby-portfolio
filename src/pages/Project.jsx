import * as React from "react";
import { Link } from "gatsby";

const ProjectPage = () => {
  return (
    <main>
      <Link to="/ProjectsPage/">Projects</Link>
      <h1>My projects</h1>
    </main>
  );
};

export default ProjectPage;

export const Head = () => <title>Projects</title>;
