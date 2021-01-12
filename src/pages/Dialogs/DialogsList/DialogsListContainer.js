import React from "react";
import { connect } from "react-redux";
import DialogsList from "./index";
import DialogItem from "./DialogItem";

const mapStateToProps = (state) => {
  const { dialogsPage } = state;
  const { dialogs } = dialogsPage;

  const dialogsElements = dialogs.map(({ id, name, avatar }) => (
    <DialogItem key={id} id={id} name={name} avatar={avatar} />
  ));

  return {
    dialogsElements: dialogsElements,
  };
};

const DialogsListContainer = connect(mapStateToProps)(DialogsList);

export default DialogsListContainer;
