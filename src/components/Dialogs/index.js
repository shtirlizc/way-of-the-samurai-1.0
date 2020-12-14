import React from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

import s from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={s.root}>
      <div className={s.dialogs}>
        <div className={classNames(s.dialogsItem, s.dialogsItemActive)}>
          <NavLink to="/dialogs/1">Dimych</NavLink>
        </div>
        <div className={s.dialogsItem}>
          <NavLink to="/dialogs/2">Andrey</NavLink>
        </div>
        <div className={s.dialogsItem}>
          <NavLink to="/dialogs/3">Sveta</NavLink>
        </div>
        <div className={s.dialogsItem}>
          <NavLink to="/dialogs/4">Sasha</NavLink>
        </div>
        <div className={s.dialogsItem}>
          <NavLink to="/dialogs/5">Viktor</NavLink>
        </div>
        <div className={s.dialogsItem}>
          <NavLink to="/dialogs/6">Valera</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.messageItem}>Hi</div>
        <div className={s.messageItem}>How is your it-kamasutra?</div>
        <div className={s.messageItem}>Yo</div>
      </div>
    </div>
  );
};

export default Dialogs;
