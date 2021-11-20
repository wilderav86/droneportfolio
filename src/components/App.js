import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./Header";
import Videos from "./Videos";
import Home from "./Home";
import Photos from "./Photos";

import "../styles.css";

const App = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="content">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/Videos" element={<Videos />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
