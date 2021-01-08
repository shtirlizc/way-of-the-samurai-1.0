import React from "react";
import DialogsList from "./DialogsList";
import MessageFeedContainer from "./MessageFeed/MessageFeedContainer";
import s from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={s.root}>
      <DialogsList />
      <MessageFeedContainer />
    </div>
  );
};

export default Dialogs;
