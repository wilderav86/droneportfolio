import React from "react";
import droneVideos from "../assets/Videos";

//Video sources:

const Videos = () => {
  const mappedDroneVideos = droneVideos.map((droneVideo) => {
    return (
      <div className="video-responsive">
        <iframe
          className="drone-video"
          key={droneVideo.id}
          src={droneVideo.src}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
        <p>{droneVideo.title}</p>
      </div>
    );
  });

  return <div className="videos-container">{mappedDroneVideos}</div>;
};

export default Videos;
