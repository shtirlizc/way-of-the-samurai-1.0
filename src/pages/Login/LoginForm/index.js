import React from "react";
import classNames from "classnames";
import { Field, reduxForm } from "redux-form";

import inputStyles from "../../../components/TextField/TextField.module.css";
import checkboxStyles from "../../../components/Checkbox/Checkbox.module.css";
import Button from "../../../components/Button";

import s from "./LoginForm.module.css";

const LoginForm = (props) => {
  return (
    <form className={s.root} onSubmit={props.handleSubmit}>
      <Field
        component="input"
        type="text"
        name="login"
        placeholder="Login"
        className={classNames(inputStyles.root, s.formGroup)}
      />

      <Field
        component="input"
        type="password"
        name="password"
        placeholder="Password"
        className={classNames(inputStyles.root, s.formGroup)}
      />

      <div className={classNames(checkboxStyles.root, s.formGroup)}>
        <Field
          component="input"
          type="checkbox"
          name="rememberMe"
          id="rememberMe"
        />
        <label htmlFor="rememberMe">Remember me</label>
      </div>

      <Button type="submit">Login</Button>
    </form>
  );
};

export default reduxForm({
  form: "login",
})(LoginForm);
