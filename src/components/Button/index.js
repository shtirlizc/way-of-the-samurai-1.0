import React from "react";
import classNames from "classnames";

import s from "./Button.module.css";

const Button = (props) => {
  const { children, className } = props;

  return (
    <button className={classNames(s.root, className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
