import Link from "next/link";
import Layout from "../components/common/Layout";
import styles from "../styles/Post.module.css";

export const blogPosts = [
  {
    id: 1,
    title: "Blog Post 1",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nibh magna, viverra id felis et, efficitur tincidunt est. Nunc ultricies tellus eget metus ultrices mattis non eget odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam facilisis et nisl vel consequat. Nunc massa tortor, fringilla vitae orci vel, fringilla egestas ipsum. In sit amet euismod nisl. Sed ut rutrum dui.",
    comments: [
      {
        id: 1,
        author: "John Smith",
        text: "some comment",
      },
      {
        id: 2,
        author: "John Smith",
        text: "some comment",
      },
      {
        id: 3,
        author: "John Smith",
        text: "some comment",
      },
    ],
  },
  {
    id: 2,
    title: "Blog Post 2",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nibh magna, viverra id felis et, efficitur tincidunt est. Nunc ultricies tellus eget metus ultrices mattis non eget odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam facilisis et nisl vel consequat. Nunc massa tortor, fringilla vitae orci vel, fringilla egestas ipsum. In sit amet euismod nisl. Sed ut rutrum dui.",
    comments: [
      {
        id: 1,
        author: "John Smith",
        text: "some comment",
      },
      {
        id: 2,
        author: "John Smith",
        text: "some comment",
      },
      {
        id: 3,
        author: "John Smith",
        text: "some comment",
      },
    ],
  },
  {
    id: 3,
    title: "Blog Post 3",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nibh magna, viverra id felis et, efficitur tincidunt est. Nunc ultricies tellus eget metus ultrices mattis non eget odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam facilisis et nisl vel consequat. Nunc massa tortor, fringilla vitae orci vel, fringilla egestas ipsum. In sit amet euismod nisl. Sed ut rutrum dui.",
    comments: [
      {
        id: 1,
        author: "John Smith",
        text: "some comment",
      },
      {
        id: 2,
        author: "John Smith",
        text: "some comment",
      },
      {
        id: 3,
        author: "John Smith",
        text: "some comment",
      },
    ],
  },
  {
    id: 4,
    title: "Blog Post 4",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nibh magna, viverra id felis et, efficitur tincidunt est. Nunc ultricies tellus eget metus ultrices mattis non eget odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam facilisis et nisl vel consequat. Nunc massa tortor, fringilla vitae orci vel, fringilla egestas ipsum. In sit amet euismod nisl. Sed ut rutrum dui.",
    comments: [
      {
        id: 1,
        author: "John Smith",
        text: "some comment",
      },
      {
        id: 2,
        author: "John Smith",
        text: "some comment",
      },
      {
        id: 3,
        author: "John Smith",
        text: "some comment",
      },
    ],
  },
];

export default function Home() {
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
