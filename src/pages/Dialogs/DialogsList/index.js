import React from "react";
import DialogItem from "./DialogItem";
import s from "./DialogsList.module.css";

const DialogsList = (props) => {
  const { store } = props;
  const state = store.getState();
  const { dialogsPage } = state;
  const { dialogs } = dialogsPage;

  const dialogsElements = dialogs.map(({ id, name, avatar }) => (
    <DialogItem key={id} id={id} name={name} avatar={avatar} />
  ));

  return <div className={s.root}>{dialogsElements}</div>;
};

export default DialogsList;
