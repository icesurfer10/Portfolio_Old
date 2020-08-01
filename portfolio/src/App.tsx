import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavigationMenu from "./navigation-menu/NavigationMenu";
import { Home } from "./home/Home";

function App() {
  return (
    <div id="appContainer">
      <NavigationMenu />
      <Home />
    </div>
  );
}

export default App;
