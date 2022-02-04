import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import Header from "./Header";
import Videos from "./Videos";
import Home from "./Home";
import Photos from "./Photos";

import "../assets/Videos";
import "../styles.css";

const App = () => {
  const [clickedPhoto, setClickedPhoto] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="app-container">
      {!clickedPhoto && <Header />}

      <div className="content">
        <Routes>
          <Route
            path="/"
            element={<Home setClickedPhoto={setClickedPhoto} />}
          />
          <Route
            path="/home"
            element={<Home setClickedPhoto={setClickedPhoto} />}
          />
          <Route
            path="/photos"
            element={
              <Photos
                clickedPhoto={clickedPhoto}
                setClickedPhoto={setClickedPhoto}
                isLoaded={isLoaded}
                setIsLoaded={setIsLoaded}
              />
            }
          />
          <Route path="/Videos" element={<Videos />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
