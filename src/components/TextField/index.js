import React from "react";

import s from "./TextField.module.css";
import classNames from "classnames";

const TextField = (props) => {
  const { className } = props;

  return <input {...props} className={classNames(s.root, className)} />;
};

export default TextField;
