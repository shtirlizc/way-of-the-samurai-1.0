import React from "react";
import MyPosts from "./MyPosts";
import ProfileInfo from "./ProfileInfo";

const Profile = (props) => {
  const { state, addPost } = props;
  const { posts, info } = state;

  return (
    <>
      <ProfileInfo state={info} />
      <MyPosts posts={posts} addPost={addPost} />
    </>
  );
};

export default Profile;
