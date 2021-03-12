import React from "react";
import { Field, reduxForm } from "redux-form";

import s from "./LoginForm.module.css";

const LoginForm = (props) => {
  return (
    <form className={s.root} onSubmit={props.handleSubmit}>
      <div>
        <Field component="input" type="text" name="login" placeholder="Name" />
      </div>
      <div>
        <Field
          component="input"
          type="password"
          name="password"
          placeholder="Password"
        />
      </div>
      <div>
        <Field
          component="input"
          type="checkbox"
          name="rememberMe"
          id="rememberMe"
        />
        <label htmlFor="rememberMe">Remember me</label>
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "login",
})(LoginForm);
