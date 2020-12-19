import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import Dialogs from "./components/Dialogs";
import News from "./components/News";
import Music from "./components/Music";
import Settings from "./components/Settings";

import "./App.css";

const App = (props) => {
  const { posts, dialogs, messages } = props;

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Sidebar />

        <main className="app-content">
          <Route path="/profile" render={() => <Profile posts={posts} />} />
          <Route
            path="/dialogs"
            render={() => <Dialogs dialogs={dialogs} messages={messages} />}
          />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
