import React from "react";
import ImageFadeIn from "react-image-fade-in";

const EnlargedPhoto = ({ enlargedPhoto, clickedPhoto, setClickedPhoto }) => {
  const toggleClickedPhoto = () => {
    setClickedPhoto(!clickedPhoto);
  };

  return (
    <div className="enlarged-photo-container">
      <ImageFadeIn
        onClick={toggleClickedPhoto}
        className="enlarged-photo"
        src={enlargedPhoto.src}
      />
    </div>
  );
};

export default EnlargedPhoto;
