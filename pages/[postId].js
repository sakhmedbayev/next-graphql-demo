import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";
// import { blogPosts } from ".";
import AddNewComment from "../components/AddNewComment";
import Layout from "../components/common/Layout";
import styles from "../styles/Post.module.css";

import { request, gql } from "graphql-request";

const getPostById = async ({ queryKey }) => {
  const [_key, id] = queryKey;
  const query = gql`
    query GetPostById($id: ID!) {
      getPostById(id: $id) {
        id
        title
        text
        comments {
          id
          postId
          author
          text
        }
      }
    }
  `;

  const variables = {
    id,
  };

  const data = await request(
    "http://localhost:3000/api/graphql",
    query,
    variables
  );

  return data.getPostById;
};

export default function PostDetails() {
  const {
    query: { postId },
  } = useRouter();

  console.log("FFF postId", postId);

  const { data: currentPost, isLoading } = useQuery(
    ["getPostById", postId],
    getPostById,
    {
      enabled: !!postId,
    }
  );

  if (isLoading || !currentPost) return <div>Loading...</div>;

  return (
    <Layout>
      <div>
        <h3>
          {currentPost.title}{" "}
          <Link href={`/edit/post/${currentPost.id}`}>
            <a style={{ fontWeight: "normal", color: "blue" }}>Edit</a>
          </Link>
        </h3>

        <p>{currentPost.text}</p>
        <div style={{ width: "100%" }}>
          <AddNewComment postId={currentPost.id} />
        </div>
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
      </div>
    </Layout>
  );
}
