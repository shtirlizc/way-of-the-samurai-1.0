import React from "react";
import classNames from "classnames";
import { Field, reduxForm } from "redux-form";

import Button from "../../../../components/Button";

import s from "./Form.module.css";
import inputStyles from "../../../../components/TextField/TextField.module.css";

const Form = (props) => {
  const { handleSubmit } = props;

  return (
    <form className={s.newMessage} onSubmit={handleSubmit}>
      <Field
        component="textarea"
        type="text"
        name="newMessage"
        placeholder="Type message..."
        className={classNames(inputStyles.root, inputStyles.textarea)}
      />
      <Button type="submit" className={s.sendMessage}>
        Send
      </Button>
    </form>
  );
};

export default reduxForm({
  form: "dialogs",
})(Form);
