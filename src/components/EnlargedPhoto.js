import React from "react";
import ImageFadeIn from "react-image-fade-in";

const EnlargedPhoto = ({ enlargedPhoto, clickedPhoto, setClickedPhoto }) => {
  const toggleClickedPhoto = () => {
    setClickedPhoto(!clickedPhoto);
  };

  return (
    <div className="enlarged-photo-container">
      <ImageFadeIn
        className="enlarged-photo"
        onClick={toggleClickedPhoto}
        src={enlargedPhoto.src}
      />
    </div>
  );
};

export default EnlargedPhoto;
