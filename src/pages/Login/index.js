import React from "react";

import LoginForm from "./LoginForm";
import s from "./Login.module.css";

const Login = () => {
  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className={s.root}>
      <div className={s.content}>
        <h1 className={s.title}>Login Page</h1>
        <LoginForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default Login;
