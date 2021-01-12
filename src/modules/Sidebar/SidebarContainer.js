import React from "react";
import Sidebar from "./index";
import Friend from "./Friend";
import PageLink from "./PageLink";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  const { sidebar } = state;
  const { friends, navigation } = sidebar;

  const navigationElements = navigation.map(({ id, link, text }) => (
    <PageLink key={id} id={id} link={link} text={text} />
  ));
  const friendsElements = friends.map(({ id, name, avatar }) => (
    <Friend key={id} name={name} avatar={avatar} />
  ));
  friendsElements.length = 3;

  return {
    navigationElements: navigationElements,
    friendsElements: friendsElements,
  };
};

const SidebarContainer = connect(mapStateToProps)(Sidebar);

export default SidebarContainer;
