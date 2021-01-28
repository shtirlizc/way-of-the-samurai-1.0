import React from "react";
import classNames from "classnames";

import s from "./Button.module.css";

const Button = (props) => {
  const {
    children,
    fullWidth,
    active,
    className,
    type,
    disabled = false,
    onClick,
  } = props;

  return (
    <button
      className={classNames(
        s.root,
        className,
        fullWidth && s.fullWidth,
        active && s.active
      )}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
