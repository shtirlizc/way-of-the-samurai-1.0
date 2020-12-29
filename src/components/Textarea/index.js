import React from "react";
import classNames from "classnames";

import s from "./Textarea.module.css";

const Textarea = (props) => {
  const { className } = props;

  return <textarea {...props} className={classNames(s.root, className)} />;
};

export default Textarea;
