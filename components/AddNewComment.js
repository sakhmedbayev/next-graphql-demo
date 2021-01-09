import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import useForm from "../hooks/useForm";
import { request, gql } from "graphql-request";

const createComment = async ({ postId, author, text }) => {
  const query = gql`
    mutation CreateComment($postId: ID!, $author: String!, $text: String!) {
      createComment(postId: $postId, author: $author, text: $text) {
        id
        author
        text
      }
    }
  `;

  const variables = {
    postId,
    author,
    text,
  };

  const data = await request(
    "http://localhost:3000/api/graphql",
    query,
    variables
  );

  return data.createComment;
};

export default function AddNewComment({ postId }) {
  const queryClient = useQueryClient();

  const [values, setValues] = useForm({
    author: "",
    text: "",
  });
  const [errors, setErrors] = useState({});

  const createCommentMutation = useMutation(createComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(["getPostById", postId]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("FFF values", values);

    createCommentMutation.mutate({
      postId,
      ...values,
    });
  };

  const validate = () => {
    if (!values.author) {
      setErrors({
        author: "Title is required field",
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
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="author" className="form-label">
          Author:{" "}
        </label>
        <input
          name="author"
          id="author"
          value={values.author}
          onChange={setValues}
          onBlur={validate}
        />
        <div className="form-field-error">{errors.author}</div>
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
  );
}
