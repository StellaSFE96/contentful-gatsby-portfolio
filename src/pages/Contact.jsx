import * as React from "react";
import * as style from "../styles/Contact.module.scss";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Facebook from "../assets/svg/facebook.inline.svg";
import Github from "../assets/svg/github.inline.svg";
import Linkedin from "../assets/svg/linkedin.inline.svg";
import Instagram from "../assets/svg/instagram.inline.svg";
import Email from "../assets/svg/email.inline.svg";

export default function Contact() {
  // using useStaticQuery hook to retrieve data from GraphQL at build time
  const { contentfulContactPage } = useStaticQuery(query);

  return (
    // A higher-order component "Layout" used to wrap all other elements with header and footer as seen in layout.jsx
    <Layout>
      <article className={style.container}>
        <div
          className={style.leftContainer}
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <img
            src={contentfulContactPage.image.url}
            alt={contentfulContactPage.image.description}
          />
        </div>

        <div className={style.rightContainer}>
          <aside>
            <h1 data-aos="fade-down" data-aos-duration="2000">
              {contentfulContactPage.title}
            </h1>
          </aside>

          <section data-aos="fade-down" data-aos-duration="1900">
            <div>
              {/* using <a> tag with mailto attribute which when clicked on the button opens respective email app on user device */}
              <a
                className={style.linkItem}
                href={`mailto:${contentfulContactPage.email}`}
              >
                <Email width="40px" height="40px" />
              </a>
              {/* displaying social media icons and onClick opens on new tab */}
              <Link
                href={contentfulContactPage.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram
                  className={style.linkItem}
                  width="40px"
                  height="40px"
                />
              </Link>
              <Link
                href={contentfulContactPage.linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin
                  className={style.linkItem}
                  width="40px"
                  height="40px"
                />
              </Link>
              <Link
                href={contentfulContactPage.facebookLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook
                  className={style.linkItem}
                  width="40px"
                  height="40px"
                />
              </Link>
              <Link
                href={contentfulContactPage.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className={style.linkItem} width="40px" height="40px" />
              </Link>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
}

// GraphQl query for contact page information
export const query = graphql`
  query ContactPageQuery {
    contentfulContactPage {
      image {
        description
        url
      }
      title
      email
      facebookLink
      githubLink
      linkedinLink
      instagramLink
    }
  }
`;
