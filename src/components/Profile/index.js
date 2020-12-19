import React from "react";
import MyPosts from "./MyPosts";
import ProfileInfo from "./ProfileInfo";

const Profile = (props) => {
  const { posts } = props;

  return (
    <>
      <ProfileInfo />
      <MyPosts posts={posts} />
    </>
  );
};

export default Profile;
