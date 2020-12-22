import React, { useRef } from "react";
import DialogItem from "./DialogItem";
import Message from "./Message";

import s from "./Dialogs.module.css";
import Textarea from "../Textarea";
import Button from "../Button";

const Dialogs = (props) => {
  const { state } = props;
  const { dialogs, messages } = state;

  const dialogsElements = dialogs.map(({ id, name, avatar }) => (
    <DialogItem key={id} id={id} name={name} avatar={avatar} />
  ));
  const messagesElements = messages.map(({ id, message, isMineMessage }) => (
    <Message key={id} message={message} isMe={isMineMessage} />
  ));

  const textareaRef = useRef(null);

  const addMessage = () => {
    console.log(textareaRef.current.value);
  };

  return (
    <div className={s.root}>
      <div className={s.dialogs}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <form action="" className={s.newMessage}>
          <Textarea ref={textareaRef} placeholder="Type message..." required />
          <Button type="button" onClick={addMessage}>
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Dialogs;
