import React, { useRef } from "react";
import Post from "./Post";
import Textarea from "../../../components/Textarea";
import Button from "../../../components/Button";

import s from "./MyPosts.module.css";

const MyPosts = (props) => {
  const { posts, currentPost, dispatch } = props;
  const postsElements = posts.map(({ id, message, likesCount }) => (
    <Post key={id} message={message} likes={likesCount} />
  ));

  const textareaRef = useRef(null);

  const newPost = (evt) => {
    evt.preventDefault();
    dispatch({ type: "ADD_POST" });
  };

  const onChangeTextarea = () => {
    dispatch({
      type: "CHANGE-POST-CURRENT-VALUE",
      value: textareaRef.current.value,
    });
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
