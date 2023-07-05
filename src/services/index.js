import { gql, GraphQLClient } from "graphql-request";
const graphqlAPI =
  process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT || "default_endpoint";

export const hygraph = new GraphQLClient(graphqlAPI);

const getPostsQuery = gql`
  query GetPosts($limit: Int!) {
    posts(first: $limit) {
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

export async function getPosts() {
  try {
    const limit = 10; // Example limit value
    const variables = { limit };
    const posts = hygraph
      .request(getPostsQuery, variables)
      .then((data) => {
        // Handle successful response
        return data.posts;
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
    return posts;
  } catch (error) {
    // Handle error
    console.error(error);
  }
}

export const getPostDetailQuery = gql`
  query GetPostDetail($slug: String!) {
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

export async function getPostDetail(slug) {
  try {
    const detail = hygraph
      .request(getPostDetailQuery, { slug })
      .then((data) => {
        // Handle successful response
        return data.post;
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
    return detail;
  } catch (error) {
    // Handle error
    console.error(error);
  }
}
