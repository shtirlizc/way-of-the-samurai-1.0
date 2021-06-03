import React from "react";
import Textarea from "../../../components/TextField/Textarea";
import Button from "../../../components/Button";
import Message from "./Message";
import s from "./MessageFeed.module.css";

const MessageFeed = (props) => {
  const { messages, newMessage, addMessage, changeMessage } = props;

  const messagesElements = messages.map(({ id, message, isMineMessage }) => (
    <Message key={id} message={message} isMe={isMineMessage} />
  ));

  const onAddMessage = (evt) => {
    evt.preventDefault();
    addMessage();
  };

  const onChangeNewMessage = (evt) => {
    changeMessage(evt.target.value);
  };

  return (
    <div className={s.root}>
      {messagesElements}

      <form action="" className={s.newMessage} onSubmit={onAddMessage}>
        <Textarea
          value={newMessage}
          onChange={onChangeNewMessage}
          placeholder="Type message..."
          required
        />
        <Button type="submit" className={s.sendMessage}>
          Send
        </Button>
      </form>
    </div>
  );
};

export default MessageFeed;
