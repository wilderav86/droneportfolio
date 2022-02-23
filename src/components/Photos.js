import React, { useRef } from "react";
import dronePhotos from "../assets/IMG/index.js";
import ImageFadeIn from "react-image-fade-in";
import { Link } from "react-router-dom";

const Photos = ({ isLoaded, setIsLoaded, setEnlargedPhoto }) => {
  //STATE:

  const counter = useRef(0);

  //HANDLERS:
  const handleEnlargePhoto = (e) => {
    setEnlargedPhoto((enlargedPhoto) => ({
      ...enlargedPhoto,
      src: e.target.src,
      alt: e.target.alt,
    }));
  };

  const handleLoader = () => {
    counter.current += 1;
    if (counter.current >= dronePhotos.length) {
      setIsLoaded(true);
    }
  };

  const mappedDronePhotos = dronePhotos.map((photo) => {
    return (
      <div
        className={`photo-container-${isLoaded ? "visible" : "hidden"}`}
        key={photo.id}
      >
        <Link to="/enlargedPhoto">
          <ImageFadeIn
            className={`photo-${isLoaded ? "visible" : "hidden"}`}
            src={photo.src}
            alt={photo.title}
            key={photo.id}
            onLoad={handleLoader}
            onClick={handleEnlargePhoto}
          />

          <p className="photo-title">{photo.title}</p>
        </Link>
      </div>
    );
  });

  return (
    <div className="photos-container">
      <div className="image-list-container">{mappedDronePhotos}</div>
    </div>
  );
};

export default Photos;
