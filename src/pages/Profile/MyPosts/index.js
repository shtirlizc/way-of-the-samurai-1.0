import React from "react";

import Post from "./Post";
import Form from "./Form";

import s from "./MyPosts.module.css";

const MyPosts = (props) => {
  const { posts, addPost } = props;
  const postsElements = posts.map(({ id, message, likesCount }) => (
    <Post key={id} message={message} likes={likesCount} />
  ));
  postsElements.reverse();

  const onSubmit = (formData) => {
    addPost(formData.newPost);
  };

  return (
    <div className={s.posts}>
      <div className={s.postsNew}>
        <Form onSubmit={onSubmit} />
      </div>
      <h3 className={s.postsTitle}>My posts</h3>
      <div className={s.postsFeed}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
