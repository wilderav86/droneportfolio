import React from "react";

const Home = () => {
  return (
    <div className="home-container">
      <video className="landing-page-video" loop autoPlay muted>
        <source
          src={require("../assets/Videos/Kite.mp4").default}
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Home;
