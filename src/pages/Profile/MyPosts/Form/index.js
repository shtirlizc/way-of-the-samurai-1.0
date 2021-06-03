import React from "react";
import classNames from "classnames";
import { Field, reduxForm } from "redux-form";

import Button from "../../../../components/Button";

import s from "./Form.module.css";

import inputStyles from "../../../../components/TextField/TextField.module.css";

const Form = (props) => {
  const { currentPost, changePost } = props;

  const onChangePost = (evt) => {
    changePost(evt.target.value);
  };

  return (
    <form className={s.root} onSubmit={props.handleSubmit}>
      <Field
        component="textarea"
        type="text"
        name="new-post"
        placeholder="Your news..."
        className={classNames(inputStyles.root, inputStyles.textarea)}
        value={currentPost}
        onChange={onChangePost}
      />
      <Button type="submit" className={s.sendPost}>
        Send
      </Button>
    </form>
  );
};

export default reduxForm({
  form: "newPost",
})(Form);
