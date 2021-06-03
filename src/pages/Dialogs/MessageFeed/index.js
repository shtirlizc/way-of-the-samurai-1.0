import React from "react";

import Message from "./Message";
import Form from "./Form";

const MessageFeed = (props) => {
  const { messages, addMessage } = props;

  const messagesElements = messages.map(({ id, message, isMineMessage }) => (
    <Message key={id} message={message} isMe={isMineMessage} />
  ));

  const onSubmit = (formData) => {
    addMessage(formData.newMessage);
  };

  return (
    <div>
      {messagesElements}
      <Form onSubmit={onSubmit} />
    </div>
  );
};

export default MessageFeed;
