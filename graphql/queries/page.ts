import { gql } from "@apollo/client";

export const GET_PAGE = gql`
  query Page($slug: String!) {
    pages(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          slug
          title
          heroes {
            data {
              attributes {
                slug
                title
                description
                button {
                  data {
                    attributes {
                      title
                      link {
                        data {
                          attributes {
                            title
                            target
                            path
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          lead_hero {
            data {
              attributes {
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
      }
    }
  }
`;

export const GET_NAV_PAGES = gql`
  query {
    pages(sort: "nav_order:asc") {
      data {
        attributes {
          slug
          title
          nav_order
          link {
            data {
              attributes {
                path
                title
                target
              }
            }
          }
        }
      }
    }
  }
`;
