import { gql } from "@apollo/client";

export const GET_FOOTER = gql`
  query {
    footer {
      data {
        attributes {
          tag
          subtag
          icons {
            data {
              attributes {
                title
                type
                link {
                  data {
                    attributes {
                      title
                      path
                      target
                    }
                  }
                }
              }
            }
          }
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
