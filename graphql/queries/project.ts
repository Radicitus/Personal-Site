import { gql } from "@apollo/client";

export const GET_ALL_PROJECTS = gql`
  query {
    projects {
      data {
        attributes {
          slug
          title
          description
          content
          media {
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
        }
      }
    }
  }
`;
