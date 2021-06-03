import React from "react";

import s from "./Checkbox.module.css";

const Checkbox = (props) => {
  const { id, label } = props;

  return (
    <div className={s.root}>
      <input type="checkbox" {...props} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkbox;
