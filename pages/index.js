import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { useQuery, gql } from "@apollo/client";

export default function Home() {

  const { loading, error, data } = useQuery(GET_POSTS);
  if (error) return <p className={styles.res}>Error</p>;
  if (loading) return <p className={styles.res}>Loading...</p>;
  let res = data.posts.nodes;
  console.log(res);

  return (
    <div className={styles.container}>
      <h2>Hello, my name is Pippy the Penguin</h2>
      <div dangerouslySetInnerHTML={{ __html: res[0].content }}></div>
      <img src={res[0].featuredImage.node.sourceUrl} alt="Featured Image" />
      <image src="/images/profile.jpg" alt="Diego Gallardo" width={200} height={200} />
    </div>
  )
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
