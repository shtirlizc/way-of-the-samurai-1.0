import React from "react";
import classNames from "classnames";

import s from "./Button.module.css";

const Button = (props) => {
  const { children, fullWidth, active, className, type, onClick } = props;

  return (
    <button
      className={classNames(
        s.root,
        className,
        fullWidth && s.fullWidth,
        active && s.active
      )}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
