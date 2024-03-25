import React, { Component } from "react";
import { Route, Routes, HashRouter } from "react-router-dom";

import Home from "./templates/home";
import Login from "./templates/login"

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <div className="content">
          <Routes>
            <Route exact path="/home" element={<Home />}></Route>
            <Route exact path="/" element={<Login />}></Route>
          </Routes>
          </div>
        </div>
      </HashRouter>
    );
  }
}
export default App;