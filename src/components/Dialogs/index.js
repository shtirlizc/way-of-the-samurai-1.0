import React from "react";
import DialogItem from "./DialogItem";
import Message from "./Message";

import s from "./Dialogs.module.css";

const Dialogs = () => {
  const dialogsData = [
    {
      id: 1,
      name: "Dimych",
    },
    {
      id: 2,
      name: "Andrey",
    },
    {
      id: 3,
      name: "Sveta",
    },
    {
      id: 4,
      name: "Sasha",
    },
    {
      id: 5,
      name: "Viktor",
    },
    {
      id: 6,
      name: "Valera",
    },
  ];
  const messagesData = [
    {
      id: 1,
      message: "Hu",
    },
    {
      id: 2,
      message: "How is your it-kamasutra?",
    },
    {
      id: 3,
      message: "Yo",
    },
  ];

  return (
    <div className={s.root}>
      <div className={s.dialogs}>
        {dialogsData.map(({ id, name }) => (
          <DialogItem key={id} name={name} id={id} />
        ))}
      </div>

      <div className={s.messages}>
        {messagesData.map(({ id, message }) => (
          <Message key={{ id }} message={message} />
        ))}
      </div>
    </div>
  );
};

export default Dialogs;
