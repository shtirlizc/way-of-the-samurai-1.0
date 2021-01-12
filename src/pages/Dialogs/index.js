import React from "react";
import DialogsListContainer from "./DialogsList/DialogsListContainer";
import MessageFeedContainer from "./MessageFeed/MessageFeedContainer";
import s from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={s.root}>
      <DialogsListContainer />
      <MessageFeedContainer />
    </div>
  );
};

export default Dialogs;
