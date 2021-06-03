import React from "react";
import classNames from "classnames";

import s from "./TextField.module.css";

const Textarea = (props) => {
  const { className } = props;

  return (
    <textarea
      {...props}
      className={classNames(s.root, s.textarea, className)}
    />
  );
};

export default Textarea;
