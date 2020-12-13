import React from "react";
import classNames from "classnames";

import s from "./Sidebar.module.css";

const Index = () => {
  return (
    <aside className={s.root}>
      <nav className={s.nav}>
        <a className={classNames(s.item, s.itemActive)} href="/profile">
          Profile
        </a>
        <a className={s.item} href="/dialogs">
          Messages
        </a>
        <a className={s.item} href="/news">
          News
        </a>
        <a className={s.item} href="/music">
          Music
        </a>
        <a className={s.item} href="/settings">
          Settings
        </a>
      </nav>
    </aside>
  );
};

export default Index;
