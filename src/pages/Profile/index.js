import React from "react";
import MyPosts from "./MyPosts";
import ProfileInfo from "./ProfileInfo";

const Profile = (props) => {
  const { state, addPost, changePostCurrentValue } = props;
  const { posts, info, currentPost } = state;

  return (
    <>
      <ProfileInfo state={info} />
      <MyPosts
        posts={posts}
        currentPost={currentPost}
        addPost={addPost}
        changePostCurrentValue={changePostCurrentValue}
      />
    </>
  );
};

export default Profile;
