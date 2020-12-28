import React, { useRef } from "react";
import Post from "./Post";
import Textarea from "../../../components/Textarea";
import Button from "../../../components/Button";

import s from "./MyPosts.module.css";

const MyPosts = (props) => {
  const { posts, currentPost, addPost, changePostCurrentValue } = props;
  const postsElements = posts.map(({ id, message, likesCount }) => (
    <Post key={id} message={message} likes={likesCount} />
  ));

  const textareaRef = useRef(null);

  const newPost = (evt) => {
    evt.preventDefault();
    addPost();
  };

  const onChangeTextarea = () => {
    changePostCurrentValue(textareaRef.current.value);
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
            onChange={onChangeTextarea}
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
