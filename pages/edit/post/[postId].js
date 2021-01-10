import React, { useState } from "react";
import Layout from "../../../components/common/Layout";
import useForm from "../../../hooks/useForm";
import { request, gql } from "graphql-request";
import { useMutation, useQueryClient } from "react-query";

const createPost = async ({ title, text }) => {
  const query = gql`
    mutation CreatePost($title: String!, $text: String!) {
      createPost(title: $title, text: $text) {
        id
        title
        text
      }
    }
  `;

  const variables = {
    title,
    text,
  };

  const data = await request(
    "http://localhost:3000/api/graphql",
    query,
    variables
  );

  return data.createPost;
};

export default function PostEdit() {
  const queryClient = useQueryClient();

  const [values, setValues] = useForm({
    title: "",
    text: "",
  });

  const [errors, setErrors] = useState({});

  const createPostMutation = useMutation(createPost, {
    onSuccess: () => {
      queryClient.invalidateQueries(["getPosts"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createPostMutation.mutate({
      ...values,
    });
  };

  const validate = () => {
    if (!values.title) {
      setErrors({
        title: "Title is required field",
      });
      return;
    }
    if (!values.text) {
      setErrors({
        text: "Text is required field",
      });
      return;
    }
    setErrors({});
  };

  return (
    <Layout>
      <div>
        <h3>Post Edit</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title" className="form-label">
              Title:{" "}
            </label>
            <input
              name="title"
              id="title"
              value={values.title}
              onChange={setValues}
              onBlur={validate}
            />
            <div className="form-field-error">{errors.title}</div>
          </div>
          <div className="form-group">
            <label htmlFor="text" className="form-label">
              Text:{" "}
            </label>
            <textarea
              type="textarea"
              name="text"
              id="text"
              value={values.text}
              onChange={setValues}
              onBlur={validate}
            />
            <div className="form-field-error">{errors.text}</div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </Layout>
  );
}
