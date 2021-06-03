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
      <div>
        <Field
          component="input"
          type="text"
          name="login"
          placeholder="Логин"
          className={classNames(inputStyles.root, s.formGroup)}
        />
      </div>
      <div>
        <Field
          component="input"
          type="password"
          name="password"
          placeholder="Пароль"
          className={classNames(inputStyles.root, s.formGroup)}
        />
      </div>
      <div className={classNames(checkboxStyles.root, s.formGroup)}>
        <Field
          component="input"
          type="checkbox"
          name="rememberMe"
          id="rememberMe"
        />
        <label htmlFor="rememberMe">Запомнить меня</label>
      </div>
      <div>
        <Button type="submit">Войти</Button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "login",
})(LoginForm);
