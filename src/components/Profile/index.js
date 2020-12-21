import React from "react";
import MyPosts from "./MyPosts";
import ProfileInfo from "./ProfileInfo";

const Profile = (props) => {
  const { state } = props;
  const { posts } = state;

  return (
    <>
      <ProfileInfo />
      <MyPosts posts={posts} />
    </>
  );
};

export default Profile;
