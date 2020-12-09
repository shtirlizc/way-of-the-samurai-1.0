import React from "react";

import s from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={s.root}>
      <nav className={s.nav}>
        <a className={`${s.item} ${s.itemActive}`} href="#1">
          Profile
        </a>
        <a className={s.item} href="#1">
          Messages
        </a>
        <a className={s.item} href="#1">
          News
        </a>
        <a className={s.item} href="#1">
          Music
        </a>
        <a className={s.item} href="#1">
          Settings
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
