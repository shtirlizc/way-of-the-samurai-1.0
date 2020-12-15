import React from "react";
import DialogItem from "./DialogItem";
import Message from "./Message";

import s from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={s.root}>
      <div className={s.dialogs}>
        <DialogItem name="Dimych" id="1" />
        <DialogItem name="Andrey" id="2" />
        <DialogItem name="Sveta" id="3" />
        <DialogItem name="Sasha" id="4" />
        <DialogItem name="Viktor" id="5" />
        <DialogItem name="Valera" id="6" />
      </div>
      <div className={s.messages}>
        <Message message="Hi" />
        <Message message="How is your it-kamasutra?" />
        <Message message="Yo" />
      </div>
    </div>
  );
};

export default Dialogs;
