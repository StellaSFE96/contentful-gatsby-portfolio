import * as React from "react";
import * as style from "../styles/Index.module.scss";
import Navbar from "../components/Navbar";
import { graphql, useStaticQuery } from "gatsby";

const Index = () => {
  // using useStaticQuery hook to retrieve data from GraphQL at build time
  const { contentfulLandingPage } = useStaticQuery(query);

  return (
    <div>
      {/* Navbar directly implemented without the Layout component to avoid importing the footer in this specific component */}
      <Navbar />
      <div className={style.container}>
        <article data-aos="fade-down" data-aos-duration="2000">
          <img
            src={contentfulLandingPage.profileImage.url}
            alt={contentfulLandingPage.profileImage.description}
          />
        </article>

        <section>
          <h1 data-aos="fade-down" data-aos-duration="2500">
            {contentfulLandingPage.title}
          </h1>
          <p data-aos="fade-down" data-aos-duration="2200">
            {contentfulLandingPage.description}
          </p>
        </section>
      </div>
    </div>
  );
};
export default Index;

// GraphQl query for landing page information
export const query = graphql`
  query landingPageQuery {
    contentfulLandingPage {
      profileImage {
        url
        description
      }
      title
      description
    }
  }
`;
