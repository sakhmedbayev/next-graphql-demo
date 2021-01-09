import Head from "next/head";
import styles from "../styles/Home.module.css";

const blogPosts = [
  {
    id: 1,
    title: "Blog Post 1",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nibh magna, viverra id felis et, efficitur tincidunt est. Nunc ultricies tellus eget metus ultrices mattis non eget odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam facilisis et nisl vel consequat. Nunc massa tortor, fringilla vitae orci vel, fringilla egestas ipsum. In sit amet euismod nisl. Sed ut rutrum dui.",
  },
  {
    id: 2,
    title: "Blog Post 2",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nibh magna, viverra id felis et, efficitur tincidunt est. Nunc ultricies tellus eget metus ultrices mattis non eget odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam facilisis et nisl vel consequat. Nunc massa tortor, fringilla vitae orci vel, fringilla egestas ipsum. In sit amet euismod nisl. Sed ut rutrum dui.",
  },
  {
    id: 3,
    title: "Blog Post 3",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nibh magna, viverra id felis et, efficitur tincidunt est. Nunc ultricies tellus eget metus ultrices mattis non eget odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam facilisis et nisl vel consequat. Nunc massa tortor, fringilla vitae orci vel, fringilla egestas ipsum. In sit amet euismod nisl. Sed ut rutrum dui.",
  },
  {
    id: 4,
    title: "Blog Post 4",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nibh magna, viverra id felis et, efficitur tincidunt est. Nunc ultricies tellus eget metus ultrices mattis non eget odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam facilisis et nisl vel consequat. Nunc massa tortor, fringilla vitae orci vel, fringilla egestas ipsum. In sit amet euismod nisl. Sed ut rutrum dui.",
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to My Blog</h1>

        <div className={styles.grid}>
          {blogPosts.map((post) => (
            <a
              key={post.id}
              href="https://nextjs.org/docs"
              className={styles.card}
            >
              <h3>{post.title}</h3>
              <p>{post.text.split(" ").splice(0, 10).join(" ")}</p>
            </a>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
