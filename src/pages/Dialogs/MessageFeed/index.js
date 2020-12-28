import React, { useRef } from "react";
import Textarea from "../../../components/Textarea";
import Button from "../../../components/Button";
import Message from "./Message";

import s from "./MessageFeed.module.css";

const MessageFeed = (props) => {
  const { store } = props;
  const state = store.getState();
  const { dialogsPage } = state;
  const { messages, newMessage } = dialogsPage;

  const messagesElements = messages.map(({ id, message, isMineMessage }) => (
    <Message key={id} message={message} isMe={isMineMessage} />
  ));
  const textareaRef = useRef(null);

  const onAddMessage = (evt) => {
    evt.preventDefault();
    store.addMessage();
  };

  const onChangeNewMessage = () => {
    store.changeMessage(textareaRef.current.value);
  };

  return (
    <div className={s.root}>
      {messagesElements}

      <form action="" className={s.newMessage} onSubmit={onAddMessage}>
        <Textarea
          ref={textareaRef}
          value={newMessage}
          onChange={onChangeNewMessage}
          placeholder="Type message..."
          required
        />
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
};

export default MessageFeed;
