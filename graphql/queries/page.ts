import { gql } from "@apollo/client";

export const GET_PAGE = gql`
  query Page($slug: String!) {
    pages(filters: { slug: { eq: $slug } }) {
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