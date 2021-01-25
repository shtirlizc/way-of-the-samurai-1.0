import React from "react";
import ProfileInfo from "./ProfileInfo";
import MyPosts from "./MyPosts";

const Profile = (props) => {
  const { profile, currentPost, posts, addPost, changePost } = props;

  return (
    <>
      <ProfileInfo profile={profile} />
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
