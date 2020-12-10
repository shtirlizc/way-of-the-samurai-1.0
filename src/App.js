import React from "react";

import Header from './components/Header';
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";

import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />

      <main className="app-content">
        <Profile />
      </main>
    </div>
  );
};

export default App;
