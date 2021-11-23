import React, { useState, useEffect } from "react";
import dronePhotos from "../assets/IMG/index.js";
import EnlargedPhoto from "./EnlargedPhoto.js";
import ImageFadeIn from "react-image-fade-in";

const Photos = ({ clickedPhoto, setClickedPhoto }) => {
  //STATE:
  const [enlargedPhoto, setEnlargedPhoto] = useState({
    src: "",
    title: "",
  });

  //HANDLERS:
  const handleEnlargePhoto = (e) => {
    setEnlargedPhoto((enlargedPhoto) => ({
      ...enlargedPhoto,
      src: e.target.src,
      alt: e.target.alt,
    }));
    setClickedPhoto(!clickedPhoto);
  };

  //FUNCTIONS:

  const mappedDronePhotos = dronePhotos.map((photo) => {
    return (
      <div className="photo-container" key={photo.id}>
        <ImageFadeIn
          className="photo"
          src={photo.src}
          alt={photo.title}
          key={photo.id}
          onClick={handleEnlargePhoto}
        />
        <p className="photo-title">{photo.title}</p>
      </div>
    );
  });

  return (
    <div className="photos-container">
      <div className="image-list-container">
        {clickedPhoto ? (
          <EnlargedPhoto
            enlargedPhoto={enlargedPhoto}
            setClickedPhoto={setClickedPhoto}
            clickedPhoto={clickedPhoto}
          />
        ) : (
          mappedDronePhotos
        )}
      </div>
    </div>
  );
};

export default Photos;
