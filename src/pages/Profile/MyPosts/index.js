import React from "react";
import Post from "./Post";
import Textarea from "../../../components/Textarea";
import Button from "../../../components/Button";
import s from "./MyPosts.module.css";

const MyPosts = (props) => {
  const { posts, currentPost, addPost, changePost } = props;
  const postsElements = posts.map(({ id, message, likesCount }) => (
    <Post key={id} message={message} likes={likesCount} />
  ));

  const onAddPost = (evt) => {
    evt.preventDefault();
    addPost();
  };

  const onChangePost = (evt) => {
    changePost(evt.target.value);
  };

  return (
    <div className={s.posts}>
      <div className={s.postsNew}>
        <form action="" className={s.form} onSubmit={onAddPost}>
          <Textarea
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
