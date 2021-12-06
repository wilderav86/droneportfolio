import React from "react";
import ReactPlayer from "react-player";
import droneVideos from "../assets/Videos";

//Video sources:

const Videos = () => {
  const mappedDroneVideos = droneVideos.map((droneVideo) => {
    return (
      <div className="video-responsive">
        <div className="drone-video-container">
          <ReactPlayer
            className="drone-video"
            key={droneVideo.id}
            url={droneVideo.src}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>

        <div className="video-description">
          <p>{droneVideo.desc}</p>
        </div>
      </div>
    );
  });

  return <div className="videos-container">{mappedDroneVideos}</div>;
};

export default Videos;
