import React from "react";
import ProfileInfo from "./ProfileInfo";
import MyPosts from "./MyPosts";

const Profile = (props) => {
  const {
    profile,
    status,
    currentPost,
    posts,
    addPost,
    changePost,
    updateUserStatus,
  } = props;

  return (
    <>
      <ProfileInfo
        profile={profile}
        status={status}
        updateUserStatus={updateUserStatus}
      />
      <MyPosts
        currentPost={currentPost}
        posts={posts}
        changePost={changePost}
        addPost={addPost}
      />
    </>
  );
};

export default Profile;
