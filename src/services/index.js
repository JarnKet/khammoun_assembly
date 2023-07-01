import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query Posts {
      posts {
        title
        slug
        date
        id
        featuredImage {
          url
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.posts;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query Posts($slug: String!) {
      post(where: { slug: $slug }) {
        title
        date
        content {
          html
        }
        featuredImage {
          url
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};
