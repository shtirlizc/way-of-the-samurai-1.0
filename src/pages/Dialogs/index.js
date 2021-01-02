import React from "react";
import DialogsList from "./DialogsList";
import MessageFeedContainer from "./MessageFeed/MessageFeedContainer";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  const { store } = props;

  return (
    <div className={s.root}>
      <DialogsList store={store} />
      <MessageFeedContainer store={store} />
    </div>
  );
};

export default Dialogs;
