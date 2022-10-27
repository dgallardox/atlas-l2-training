import { useQuery, gql } from "@apollo/client";

export default function WordPressContent() {
  const { loading, error, data } = useQuery(GET_POSTS);
  if (error) return <p>Error</p>;
  if (loading) return <p>Loading...</p>;
  let res = data.posts.nodes;

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: res[0].content }}></div>
      <img src={res[0].featuredImage.node.sourceUrl} alt="Featured Image" />
    </>
  );
}

const GET_POSTS = gql`
  query allPosts {
    posts {
      nodes {
        id
        title
        date
        content
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;
