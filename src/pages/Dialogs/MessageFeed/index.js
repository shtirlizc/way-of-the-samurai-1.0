import React from "react";
import Textarea from "../../../components/Textarea";
import Button from "../../../components/Button";
import Message from "./Message";
import {
  addMessageActionCreator,
  changeMessageActionCreator,
} from "../../../redux/dialogsReducer";

import s from "./MessageFeed.module.css";

const MessageFeed = (props) => {
  const { messages, newMessage, dispatch } = props;

  const messagesElements = messages.map(({ id, message, isMineMessage }) => (
    <Message key={id} message={message} isMe={isMineMessage} />
  ));

  const onAddMessage = (evt) => {
    evt.preventDefault();
    const action = addMessageActionCreator();
    dispatch(action);
  };

  const onChangeNewMessage = (evt) => {
    const action = changeMessageActionCreator(evt.target.value);
    dispatch(action);
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
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
};

export default MessageFeed;
