import React from "react";

import Message from "./Message";
import Form from "./Form";

const MessageFeed = (props) => {
  const { messages, newMessage, addMessage, changeMessage } = props;

  const messagesElements = messages.map(({ id, message, isMineMessage }) => (
    <Message key={id} message={message} isMe={isMineMessage} />
  ));

  const onChangeNewMessage = (evt) => {
    changeMessage(evt.target.value);
  };

  const onSubmit = () => {
    addMessage();
  };

  return (
    <div>
      {messagesElements}

      <Form
        newMessage={newMessage}
        onChangeNewMessage={onChangeNewMessage}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default MessageFeed;
