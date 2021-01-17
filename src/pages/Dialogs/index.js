import React from "react";
import Title from "../../components/Title";
import DialogsListContainer from "./DialogsList/DialogsListContainer";
import MessageFeedContainer from "./MessageFeed/MessageFeedContainer";
import s from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <>
      <Title>Dialogs</Title>

      <div className={s.root}>
        <DialogsListContainer />
        <MessageFeedContainer />
      </div>
    </>
  );
};

export default Dialogs;
