import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import HeaderContainer from "./modules/Header/HeaderContainer";
import SidebarContainer from "./modules/Sidebar/SidebarContainer";
import ProfileContainer from "./pages/Profile/ProfileContainer";
import Dialogs from "./pages/Dialogs";
import UsersContainer from "./pages/Users/UsersContainer";
import News from "./pages/News";
import Music from "./pages/Music";
import Settings from "./pages/Settings";
import Login from "./pages/Login";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <SidebarContainer />

        <main className="app-content">
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile/:userId?" component={ProfileContainer} />
          <Route exact path="/dialogs" component={Dialogs} />
          <Route exact path="/users" component={UsersContainer} />
          <Route exact path="/news" component={News} />
          <Route exact path="/music" component={Music} />
          <Route exact path="/settings" component={Settings} />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
