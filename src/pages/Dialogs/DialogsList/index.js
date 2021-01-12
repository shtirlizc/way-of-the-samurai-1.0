import React from "react";
import s from "./DialogsList.module.css";

const DialogsList = (props) => {
  const { dialogsElements } = props;

  return <div className={s.root}>{dialogsElements}</div>;
};

export default DialogsList;
