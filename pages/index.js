import { gql, request } from "graphql-request";
import Link from "next/link";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import Layout from "../components/common/Layout";
import styles from "../styles/Post.module.css";

const getPosts = async () => {
  const query = gql`
    query Posts {
      posts {
        id
        title
        text
      }
    }
  `;

  const data = await request("http://localhost:3000/api/graphql", query);

  return data.posts;
};

// export const blogPosts = [
//   {
//     id: 1,
//     title: "Blog Post 1",
//     text:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nibh magna, viverra id felis et, efficitur tincidunt est. Nunc ultricies tellus eget metus ultrices mattis non eget odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam facilisis et nisl vel consequat. Nunc massa tortor, fringilla vitae orci vel, fringilla egestas ipsum. In sit amet euismod nisl. Sed ut rutrum dui.",
//     comments: [
//       {
//         id: 1,
//         author: "John Smith",
//         text: "some comment",
//       },
//       {
//         id: 2,
//         author: "John Smith",
//         text: "some comment",
//       },
//       {
//         id: 3,
//         author: "John Smith",
//         text: "some comment",
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: "Blog Post 2",
//     text:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nibh magna, viverra id felis et, efficitur tincidunt est. Nunc ultricies tellus eget metus ultrices mattis non eget odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam facilisis et nisl vel consequat. Nunc massa tortor, fringilla vitae orci vel, fringilla egestas ipsum. In sit amet euismod nisl. Sed ut rutrum dui.",
//     comments: [
//       {
//         id: 1,
//         author: "John Smith",
//         text: "some comment",
//       },
//       {
//         id: 2,
//         author: "John Smith",
//         text: "some comment",
//       },
//       {
//         id: 3,
//         author: "John Smith",
//         text: "some comment",
//       },
//     ],
//   },
//   {
//     id: 3,
//     title: "Blog Post 3",
//     text:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nibh magna, viverra id felis et, efficitur tincidunt est. Nunc ultricies tellus eget metus ultrices mattis non eget odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam facilisis et nisl vel consequat. Nunc massa tortor, fringilla vitae orci vel, fringilla egestas ipsum. In sit amet euismod nisl. Sed ut rutrum dui.",
//     comments: [
//       {
//         id: 1,
//         author: "John Smith",
//         text: "some comment",
//       },
//       {
//         id: 2,
//         author: "John Smith",
//         text: "some comment",
//       },
//       {
//         id: 3,
//         author: "John Smith",
//         text: "some comment",
//       },
//     ],
//   },
//   {
//     id: 4,
//     title: "Blog Post 4",
//     text:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nibh magna, viverra id felis et, efficitur tincidunt est. Nunc ultricies tellus eget metus ultrices mattis non eget odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam facilisis et nisl vel consequat. Nunc massa tortor, fringilla vitae orci vel, fringilla egestas ipsum. In sit amet euismod nisl. Sed ut rutrum dui.",
//     comments: [
//       {
//         id: 1,
//         author: "John Smith",
//         text: "some comment",
//       },
//       {
//         id: 2,
//         author: "John Smith",
//         text: "some comment",
//       },
//       {
//         id: 3,
//         author: "John Smith",
//         text: "some comment",
//       },
//     ],
//   },
// ];

export default function Home() {
  const { data: blogPosts, isLoading } = useQuery(["getPosts"], getPosts);

  if (isLoading) return <div>Loading</div>;

  return (
    <Layout>
      {blogPosts.map((post) => (
        <Link key={post.id} href={`/${post.id}`}>
          <a className={styles.card}>
            <h3>{post.title}</h3>
            <p>{post.text.split(" ").splice(0, 10).join(" ")}</p>
          </a>
        </Link>
      ))}
    </Layout>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["getPosts"], getPosts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
