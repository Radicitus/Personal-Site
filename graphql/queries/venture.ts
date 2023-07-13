import { gql } from "@apollo/client";

export const GET_ALL_PROJECTS = gql`
  query Projects($start: Int = 0, $limit: Int = -1) {
    ventures(
      filters: { type: { eq: "project" } }
      sort: "rank:asc"
      pagination: { start: $start, limit: $limit }
    ) {
      data {
        attributes {
          slug
          type
          title
          description
          company
          content
          rank
          start
          end
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

export const GET_ALL_EXPERIENCES = gql`
  query Experiences($start: Int = 0, $limit: Int = -1) {
    ventures(
      filters: { type: { eq: "experience" } }
      sort: "rank:asc"
      pagination: { start: $start, limit: $limit }
    ) {
      data {
        attributes {
          slug
          type
          title
          description
          company
          content
          rank
          start
          end
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
          icon {
            data {
              attributes {
                slug
                title
                type
                link {
                  data {
                    attributes {
                      path
                      target
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

export const GET_VENTURE_BY_SLUG = gql`
  query Venture($slug: String!) {
    ventures(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          slug
          type
          title
          description
          company
          content
          rank
          start
          end
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
