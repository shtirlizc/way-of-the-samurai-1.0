import React from "react";
import Friend from "./Friend";
import PageLink from "./PageLink";

import s from "./Sidebar.module.css";

const Sidebar = (props) => {
  const { store } = props;
  const state = store.getState();
  const { sidebar } = state;
  const { friends, navigation } = sidebar;

  const navigationElements = navigation.map(({ id, link, text }) => (
    <PageLink key={id} id={id} link={link} text={text} />
  ));
  const friendsElements = friends.map(({ id, name, avatar }) => (
    <Friend key={id} name={name} avatar={avatar} />
  ));
  friendsElements.length = 3;

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
