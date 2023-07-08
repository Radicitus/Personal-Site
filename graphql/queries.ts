import { gql } from "@apollo/client";

const GET_ALL_PROJECTS = gql`
  query {
    projects {
      data {
        id
        attributes {
          slug
          description
          title
          content
        }
      }
    }
  }
`;

export { GET_ALL_PROJECTS };
