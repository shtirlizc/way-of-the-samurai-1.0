import React, { useRef } from "react";
import Post from "./Post";
import Textarea from "../../../components/Textarea";
import Button from "../../../components/Button";
import {
  addPostActionCreator,
  changePostActionCreator,
} from "../../../redux/state";

import s from "./MyPosts.module.css";

const MyPosts = (props) => {
  const { posts, currentPost, dispatch } = props;
  const postsElements = posts.map(({ id, message, likesCount }) => (
    <Post key={id} message={message} likes={likesCount} />
  ));

  const textareaRef = useRef(null);

  const newPost = (evt) => {
    evt.preventDefault();
    const action = addPostActionCreator();
    dispatch(action);
  };

  const onChangePost = () => {
    const action = changePostActionCreator(textareaRef.current.value);
    dispatch(action);
  };

  return (
    <div className={s.posts}>
      <div className={s.postsNew}>
        <form action="" className={s.form} onSubmit={newPost}>
          <Textarea
            ref={textareaRef}
            placeholder="Your news..."
            required
            value={currentPost}
            onChange={onChangePost}
          />
          <Button type="submit">Send</Button>
        </form>
      </div>
      <h3 className={s.postsTitle}>My posts</h3>
      <div className={s.postsFeed}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
