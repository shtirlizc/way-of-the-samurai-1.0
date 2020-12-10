import React from "react";

import s from "./Profile.module.css";
import MyPosts from "./MyPosts";

const Index = () => {
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
            src="https://sun9-47.userapi.com/impg/rTgw7T7n13coqYr4RBTihjxnUCwjyqdyVk7_jQ/MsfZ_BSiDGc.jpg?size=519x400&quality=96&proxy=1&sign=f1c988783fd5cce0d899203b5c958130&type=album"
            alt=""
          />
        </div>

        <div className={s.profileDesc}>
            <h3 className={s.profileName}>Marat S.</h3>
            <dl className={s.profileList}>
                <dt>Date of Birth:</dt>
                <dd>18th April</dd>
                <dt>City:</dt>
                <dd>Ufa</dd>
                <dt>Education:</dt>
                <dd>USATU</dd>
                <dt>Web Site:</dt>
                <dd><a href="https://shtirlizc.ru" target="_blank" rel="noreferrer">shtirlizc.ru</a></dd>
            </dl>
        </div>
      </div>
        <MyPosts />
    </>
  );
};

export default Index;
