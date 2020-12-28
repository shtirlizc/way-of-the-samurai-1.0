import React from "react";
import MyPosts from "./MyPosts";
import ProfileInfo from "./ProfileInfo";

const Profile = (props) => {
  const { store } = props;

  const state = store.getState();
  const { profilePage } = state;
  const { info } = profilePage;

  return (
    <>
      <ProfileInfo state={info} />
      <MyPosts store={store} />
    </>
  );
};

export default Profile;
