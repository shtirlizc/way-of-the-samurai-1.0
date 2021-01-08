import React from "react";
import StoreContext from "../../StoreContext";
import Sidebar from "./index";
import Friend from "./Friend";
import PageLink from "./PageLink";

const SidebarContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
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
          <Sidebar
            navigationElements={navigationElements}
            friendsElements={friendsElements}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default SidebarContainer;
