import React, { useState } from "react";
import Layout from "../../../components/common/Layout";
import useForm from "../../../hooks/useForm";

export default function PostEdit() {
  const [values, setValues] = useForm({
    title: "",
    text: "",
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("FFF values", values);
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
