import React from "react";
import classNames from "classnames";

import s from "./Textarea.module.css";

const Textarea = React.forwardRef((props, ref) => {
  const { className } = props;

  return (
    <textarea ref={ref} className={classNames(s.root, className)} {...props} />
  );
});

export default Textarea;
