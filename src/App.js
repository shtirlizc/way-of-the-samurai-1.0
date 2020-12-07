import React from "react";

import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="app-header">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQMSnkj-RZcyHanSi6kGpgq-igu6HChcNtPg&usqp=CAU"
          alt=""
        />
      </header>
      <aside className="app-side">
        <nav className="app-nav">
          <a href="#1">Profile</a>
          <a href="#1">Messages</a>
          <a href="#1">News</a>
          <a href="#1">Music</a>
          <a href="#1">Settings</a>
        </nav>
      </aside>
      <main className="app-content">
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
      </main>
    </div>
  );
};

export default App;
