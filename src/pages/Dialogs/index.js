import React from "react";
import MessageFeed from "./MessageFeed";
import DialogItem from "./DialogItem";

import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  const { state, dispatch } = props;
  const { dialogs, messages, newMessage } = state;

  const dialogsElements = dialogs.map(({ id, name, avatar }) => (
    <DialogItem key={id} id={id} name={name} avatar={avatar} />
  ));

  return (
    <div className={s.root}>
      <div className={s.dialogs}>{dialogsElements}</div>
      <MessageFeed
        messages={messages}
        newMessage={newMessage}
        dispatch={dispatch}
      />
    </div>
  );
};

export default Dialogs;
