import React from "react";

import s from "./Sidebar.module.css";

const Sidebar = (props) => {
  const { navigationElements, friendsElements } = props;

  return (
    <aside className={s.root}>
      <div className={s.content}>
        <nav className={s.nav}>{navigationElements}</nav>
        <div className={s.friends}>{friendsElements}</div>
      </div>
    </aside>
  );
};

export default Sidebar;
