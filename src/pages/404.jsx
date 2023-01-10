import * as React from "react";
import { Link } from "gatsby";

const NotFoundPage = () => {
  return (
    <main>
      <div>
        <h1>Page not found.</h1>
        <Link to="/index/">Go back to homepage...</Link>
      </div>
    </main>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
