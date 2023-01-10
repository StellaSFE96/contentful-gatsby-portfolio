import * as React from "react";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <main>
      <Link to="/ProjectsPage/">Projects</Link>
      <h1>Hello home</h1>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
