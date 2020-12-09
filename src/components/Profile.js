import React from "react";

import s from "./Profile.module.css";

const Profile = () => {
  return (
    <>
      <div className={s.mainImg}>
        <img
          src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
          alt=""
        />
      </div>
      <div className={s.profile}>
        <div className={s.profileAvatar}>
          <img
            src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"
            alt=""
          />
        </div>
        <div className={s.profileDesc}></div>
      </div>
      <div className={s.posts}>
        <div className={s.postsNew}>New</div>
        <div className={s.postsFeed}>
          <div className={s.item}>Post 1</div>
          <div className={s.item}>Post 2</div>
        </div>
      </div>
    </>
  );
};

export default Profile;
