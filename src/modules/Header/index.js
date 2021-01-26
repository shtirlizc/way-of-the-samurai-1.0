import React from "react";
import { Link } from "react-router-dom";

import s from "./Header.module.css";

const Header = (props) => {
  const { isAuth, login } = props;

  return (
    <header className={s.root}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQMSnkj-RZcyHanSi6kGpgq-igu6HChcNtPg&usqp=CAU"
        alt=""
      />
      {isAuth ? (
        <p className={s.login}>{login}</p>
      ) : (
        <Link to="/login" className={s.login}>
          Login
        </Link>
      )}
    </header>
  );
};

export default Header;
