import { gql } from "@apollo/client";

export const GET_FOOTER = gql`
  query {
    footer {
      data {
        attributes {
          tag
          subtag
          avatar {
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
