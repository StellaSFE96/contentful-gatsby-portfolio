import * as React from "react";
import * as style from "../styles/Index.module.scss";
import Navbar from "../components/Navbar";
import { graphql } from "gatsby";

const Index = ({
  data: {
    allContentfulLandingPage: {
      nodes: [landingPageInfo],
    },
  },
}) => {
  return (
    <div>
      <Navbar />
      <div className={style.container}>
        <aside>
          <div data-aos="fade-down" data-aos-duration="2000">
            <img src={landingPageInfo.profileImage.url} alt="" />
          </div>
        </aside>
        <section>
          <h1 data-aos="fade-down" data-aos-duration="2500">
            {landingPageInfo.title}
          </h1>
          <p data-aos="fade-down" data-aos-duration="2200">
            {landingPageInfo.description}
          </p>
        </section>
      </div>
    </div>
  );
};
export default Index;

export const landingPageQuery = graphql`
  query MyQuery {
    allContentfulLandingPage {
      nodes {
        profileImage {
          url
          description
        }
        title
        description
      }
    }
  }
`;
