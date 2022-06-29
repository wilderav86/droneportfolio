import React from "react";
import ImageFadeIn from "react-image-fade-in";
import { Link } from "react-router-dom";

const EnlargedPhoto = ({ enlargedPhoto }) => {
  return (
    <div className="enlarged-photo-container">
      <Link className="photo-link" to="/photos">
        <ImageFadeIn className="enlarged-photo" src={enlargedPhoto.src} />
      </Link>
    </div>
  );
};

export default EnlargedPhoto;
