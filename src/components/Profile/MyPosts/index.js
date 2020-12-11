import React from 'react';

import s from './MyPosts.module.css';
import Post from "./Post";

const MyPosts = () => {
    return (
        <div className={s.posts}>
            <div className={s.postsNew}>
                <form action="" className={s.form}>
                    <textarea name="message" id="message" placeholder="Your news..." />
                    <button type="submit">Send</button>
                </form>
            </div>
            <h3 className={s.postsTitle}>My posts</h3>
            <div className={s.postsFeed}>
                <Post message="Hi, how are you?" likes={12} />
                <Post message="It's, my first post" likes={8} />
            </div>
        </div>
    )
}

export default MyPosts;