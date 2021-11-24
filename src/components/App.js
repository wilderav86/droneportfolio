import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./Header";
import Videos from "./Videos";
import Home from "./Home";
import Photos from "./Photos";

import "../assets/Videos";

import "../styles.css";
import Contact from "./Contact";

const App = () => {
  const [clickedPhoto, setClickedPhoto] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div>
      <div>{!clickedPhoto && <Header />}</div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/photos"
            element={
              //!isLoaded ? (
              // <Loading />
              //) : (
              <Photos
                clickedPhoto={clickedPhoto}
                setClickedPhoto={setClickedPhoto}
                isLoaded={isLoaded}
                setIsLoaded={setIsLoaded}
              />
              //)
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
