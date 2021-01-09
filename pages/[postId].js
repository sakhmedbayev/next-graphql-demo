import { useRouter } from "next/router";
import React from "react";
import { blogPosts } from ".";
import Layout from "../components/common/Layout";

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
    </Layout>
  );
}
