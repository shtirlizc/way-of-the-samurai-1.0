import React from "react";
import MyPosts from "./index";
import {
  addPostActionCreator,
  changePostActionCreator,
} from "../../../redux/reducers/profileReducer";

const MyPostsContainer = (props) => {
  const { store } = props;
  const { dispatch } = store;
  const state = store.getState();
  const { profilePage } = state;
  const { posts, currentPost } = profilePage;

  const addPost = () => {
    const action = addPostActionCreator();
    dispatch(action);
  };

  const changePost = (value) => {
    const action = changePostActionCreator(value);
    dispatch(action);
  };

  return (
    <MyPosts
      posts={posts}
      currentPost={currentPost}
      addPost={addPost}
      changePost={changePost}
    />
  );
};

export default MyPostsContainer;
