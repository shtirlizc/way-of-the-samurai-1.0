import React from "react";
import { NavLink } from "react-router-dom";

import s from "./DialogItem.module.css";

const DialogItem = (props) => {
  const { name, id } = props;
  const path = `/dialogs/${id}`;

  return (
    <NavLink
      to={path}
      activeClassName={s.dialogsItemActive}
      className={s.dialogsItem}
    >
      {name}
    </NavLink>
  );
};

export default DialogItem;
