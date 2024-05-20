import React from "react";
import Home from "./pages/Home/Home";
import Player from "./pages/Player/Player";
import Login from "./pages/Login/Login";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Player />} />
      </Routes>
    </div>
  );
};

export default App;
