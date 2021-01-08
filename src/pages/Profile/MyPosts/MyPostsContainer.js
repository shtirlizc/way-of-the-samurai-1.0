import React from "react";
import MyPosts from "./index";
import {
  addPostActionCreator,
  changePostActionCreator,
} from "../../../redux/reducers/profileReducer";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
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
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
