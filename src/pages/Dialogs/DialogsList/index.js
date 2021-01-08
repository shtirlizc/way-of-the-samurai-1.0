import React from "react";
import DialogItem from "./DialogItem";
import s from "./DialogsList.module.css";
import StoreContext from "../../../StoreContext";

const DialogsList = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState();
        const { dialogsPage } = state;
        const { dialogs } = dialogsPage;

        const dialogsElements = dialogs.map(({ id, name, avatar }) => (
          <DialogItem key={id} id={id} name={name} avatar={avatar} />
        ));

        return <div className={s.root}>{dialogsElements}</div>;
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsList;
