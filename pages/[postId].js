import { useRouter } from "next/router";
import React from "react";
import { blogPosts } from ".";
import Layout from "../components/common/Layout";
import styles from "../styles/Post.module.css";

export default function PostDetails() {
  const {
    query: { postId },
  } = useRouter();

  const currentPost = blogPosts.find((post) => post.id === parseInt(postId));

  if (!currentPost) return <div>Loading...</div>;

  return (
    <Layout>
      <h3>{currentPost.title}</h3>
      <p>{currentPost.text}</p>
      <div style={{ width: "100%" }}>
        {currentPost.comments.map((comment) => (
          <div key={comment.id} className={styles["card-comment"]}>
            <div style={{ marginBottom: "1rem" }}>{comment.text}</div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              ~ {comment.author}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
