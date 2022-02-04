import React from "react";

const Home = ({ setClickedPhoto }) => {
  return (
    <div className="home-container" onLoad={setClickedPhoto(false)}>
      <video className="landing-page-video" loop autoPlay muted playsInline>
        <source
          src={require("../assets/Videos/Kite.mp4").default}
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Home;
