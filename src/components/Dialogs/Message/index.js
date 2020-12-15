import React from "react";

import s from "./Message.module.css";

const Message = (props) => {
  const { message } = props;

  return <div className={s.messageItem}>{message}</div>;
};

export default Message;
