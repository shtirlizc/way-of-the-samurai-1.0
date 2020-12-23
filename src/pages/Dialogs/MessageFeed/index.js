import React, { useRef } from "react";
import Textarea from "../../../components/Textarea";
import Button from "../../../components/Button";
import Message from "./Message";

import s from "./MessageFeed.module.css";

const MessageFeed = (props) => {
  const { messages } = props;

  const messagesElements = messages.map(({ id, message, isMineMessage }) => (
    <Message key={id} message={message} isMe={isMineMessage} />
  ));
  const textareaRef = useRef(null);

  const addMessage = (evt) => {
    evt.preventDefault();
    console.log(textareaRef.current.value);
  };

  return (
    <div className={s.root}>
      {messagesElements}

      <form action="" className={s.newMessage} onSubmit={addMessage}>
        <Textarea ref={textareaRef} placeholder="Type message..." required />
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
};

export default MessageFeed;
