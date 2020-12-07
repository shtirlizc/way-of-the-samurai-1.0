import React from "react";

const Profile = () => {
  return (
    <>
      <div className="main-image">
        <img
          src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
          alt=""
        />
      </div>
      <div className="profile">
        <div className="profile__avatar">
          <img
            src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"
            alt=""
          />
        </div>
        <div className="profile__desc"></div>
      </div>
      <div className="posts">
        <div className="posts__new">New</div>
        <div className="posts__feed">Feed</div>
      </div>
    </>
  );
};

export default Profile;
