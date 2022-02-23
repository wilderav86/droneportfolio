import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import Header from "./Header";
import Videos from "./Videos";
import Home from "./Home";
import Photos from "./Photos";

import "../assets/Videos";
import "../styles.css";
import EnlargedPhoto from "./EnlargedPhoto";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [enlargedPhoto, setEnlargedPhoto] = useState({
    src: "",
    title: "",
  });

  return (
    <div className="app-container">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/photos"
            element={
              <Photos
                isLoaded={isLoaded}
                setIsLoaded={setIsLoaded}
                setEnlargedPhoto={setEnlargedPhoto}
              />
            }
          />
          <Route
            path="/enlargedphoto"
            element={<EnlargedPhoto enlargedPhoto={enlargedPhoto} />}
          />
          <Route path="/Videos" element={<Videos />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
