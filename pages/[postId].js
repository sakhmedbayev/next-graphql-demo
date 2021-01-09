import React from "react";
import { useRouter } from "next/router";
import { blogPosts } from ".";
import styles from "../styles/Post.module.css";

export default function PostDetails() {
  const {
    query: { postId },
  } = useRouter();

  const currentPost = blogPosts.find((post) => post.id === parseInt(postId));

  if (!currentPost) return <div>Loading...</div>;

  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <h3>{currentPost.title}</h3>
        <p>{currentPost.text}</p>
      </div>
    </main>
  );
}
