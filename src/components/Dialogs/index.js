import React from "react";
import DialogItem from "./DialogItem";
import Message from "./Message";

import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  const { dialogs, messages } = props;

  const dialogsElements = dialogs.map(({ id, name }) => (
    <DialogItem key={id} name={name} id={id} />
  ));
  const messagesElements = messages.map(({ id, message }) => (
    <Message key={{ id }} message={message} />
  ));

  return (
    <div className={s.root}>
      <div className={s.dialogs}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
