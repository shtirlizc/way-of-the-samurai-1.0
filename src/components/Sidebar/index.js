import React from "react";
import { NavLink } from "react-router-dom";

import s from "./Sidebar.module.css";

const Index = () => {
  return (
    <aside className={s.root}>
      <nav className={s.nav}>
        <NavLink className={s.item} activeClassName={s.active} to="/profile">
          Profile
        </NavLink>
        <NavLink className={s.item} activeClassName={s.active} to="/dialogs">
          Messages
        </NavLink>
        <NavLink className={s.item} activeClassName={s.active} to="/news">
          News
        </NavLink>
        <NavLink className={s.item} activeClassName={s.active} to="/music">
          Music
        </NavLink>
        <NavLink className={s.item} activeClassName={s.active} to="/settings">
          Settings
        </NavLink>
      </nav>
    </aside>
  );
};

export default Index;
