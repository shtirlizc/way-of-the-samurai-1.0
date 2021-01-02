import React from "react";
import ProfileInfo from "./ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  const { store } = props;

  return (
    <>
      <ProfileInfo store={store} />
      <MyPostsContainer store={store} />
    </>
  );
};

export default Profile;
