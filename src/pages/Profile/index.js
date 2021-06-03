import React from "react";
import ProfileInfo from "./ProfileInfo";
import MyPosts from "./MyPosts";

const Profile = (props) => {
  const { profile, status, posts, addPost, updateUserStatus } = props;

  return (
    <>
      <ProfileInfo
        profile={profile}
        status={status}
        updateUserStatus={updateUserStatus}
      />
      <MyPosts posts={posts} addPost={addPost} />
    </>
  );
};

export default Profile;
