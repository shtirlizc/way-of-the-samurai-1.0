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

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <SidebarContainer />

        <main className="app-content">
          <Route path="/profile/:userId?" component={ProfileContainer} />
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/users" component={UsersContainer} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
