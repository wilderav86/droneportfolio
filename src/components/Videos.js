import React from "react";

//Video sources:
const videos = {
  xCountryReel: "https://youtube.com/embed/QGC4cPny-uI",
};

const Videos = () => {
  return (
    <div className="videos-container">
      <h2>This is where videos will live</h2>
    </div>
  );
};

const EmbedYoutube = () => {
  return (
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={videos.xCountryReel}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

export default Videos;
