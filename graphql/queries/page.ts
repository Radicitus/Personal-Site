import { gql } from "@apollo/client";

export const GET_HOME_PAGE = gql`
  query {
    homePage {
      data {
        attributes {
          slug
          path
          lead_hero {
            data {
              attributes {
                slug
                title
                description
                cover {
                  data {
                    attributes {
                      name
                      url
                      alternativeText
                      width
                      height
                    }
                  }
                }
                buttons {
                  data {
                    attributes {
                      title
                      path
                      target
                      slug
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
