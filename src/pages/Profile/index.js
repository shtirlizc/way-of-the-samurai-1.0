import React from "react";
import MyPosts from "./MyPosts";
import ProfileInfo from "./ProfileInfo";

const Profile = (props) => {
  const { state, dispatch } = props;
  const { posts, info, currentPost } = state;

  return (
    <>
      <ProfileInfo state={info} />
      <MyPosts posts={posts} currentPost={currentPost} dispatch={dispatch} />
    </>
  );
};

export default Profile;
