import { gql } from "@apollo/client";

const GET_ALL_PROJECTS = gql`
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
              }
            }
          }
        }
      }
    }
  }
`;

export { GET_ALL_PROJECTS };
