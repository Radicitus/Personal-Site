import { gql } from "@apollo/client";

const GET_ALL_PROJECTS = gql`
  query {
    projects {
      data {
        id
      }
    }
  }
`;

export { GET_ALL_PROJECTS };
