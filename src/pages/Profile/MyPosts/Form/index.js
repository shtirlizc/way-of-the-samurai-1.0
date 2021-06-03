import React from "react";
import classNames from "classnames";
import { Field, reduxForm } from "redux-form";

import Button from "../../../../components/Button";

import s from "./Form.module.css";
import inputStyles from "../../../../components/TextField/TextField.module.css";

const Form = (props) => {
  const { handleSubmit } = props;

  return (
    <form className={s.root} onSubmit={handleSubmit}>
      <Field
        component="textarea"
        type="text"
        name="newPost"
        placeholder="Your news..."
        className={classNames(inputStyles.root, inputStyles.textarea)}
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
