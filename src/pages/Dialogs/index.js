import React from "react";
import MessageFeed from "./MessageFeed";
import DialogItem from "./DialogItem";

import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  const { store } = props;
  const state = store.getState();
  const { dialogsPage } = state;
  const { dialogs } = dialogsPage;

  const dialogsElements = dialogs.map(({ id, name, avatar }) => (
    <DialogItem key={id} id={id} name={name} avatar={avatar} />
  ));

  return (
    <div className={s.root}>
      <div className={s.dialogs}>{dialogsElements}</div>
      <MessageFeed store={store} />
    </div>
  );
};

export default Dialogs;
