import React from "react";

import s from "./Title.module.css";

const Title = (props) => {
  const { children } = props;

  return <h1 className={s.root}>{children}</h1>;
};

export default Title;
