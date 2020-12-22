import React, { useRef } from "react";
import Post from "./Post";
import Textarea from "../../../components/Textarea";
import Button from "../../../components/Button";

import s from "./MyPosts.module.css";

const MyPosts = (props) => {
  const { posts } = props;
  const postsElements = posts.map(({ id, message, likesCount }) => (
    <Post key={id} message={message} likes={likesCount} />
  ));

  const textareaRef = useRef(null);

  const addPost = () => {
    console.log(textareaRef.current.value);
  };

  return (
    <div className={s.posts}>
      <div className={s.postsNew}>
        <form action="" className={s.form}>
          <Textarea ref={textareaRef} placeholder="Your news..." required />
          <Button type="button" onClick={addPost}>
            Send
          </Button>
        </form>
      </div>
      <h3 className={s.postsTitle}>My posts</h3>
      <div className={s.postsFeed}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
