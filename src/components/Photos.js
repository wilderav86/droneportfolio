import React, { useRef, useState } from "react";
import dronePhotos from "../assets/IMG/index.js";
import EnlargedPhoto from "./EnlargedPhoto.js";
import Loading from "./Loading.js";
import ImageFadeIn from "react-image-fade-in";

const Photos = ({ clickedPhoto, setClickedPhoto, isLoaded, setIsLoaded }) => {
  //STATE:
  const [enlargedPhoto, setEnlargedPhoto] = useState({
    src: "",
    title: "",
  });

  const counter = useRef(0);

  //HANDLERS:
  const handleEnlargePhoto = (e) => {
    setEnlargedPhoto((enlargedPhoto) => ({
      ...enlargedPhoto,
      src: e.target.src,
      alt: e.target.alt,
    }));
    setClickedPhoto(!clickedPhoto);
  };
  console.log(dronePhotos.length);
  const handleLoader = () => {
    counter.current += 1;
    if (counter.current >= dronePhotos.length) {
      setIsLoaded(true);
    }

    console.log(isLoaded);
    console.log("loaded");
    console.log(counter);
  };

  const mappedDronePhotos = dronePhotos.map((photo) => {
    return (
      <div className="photo-container" key={photo.id}>
        <ImageFadeIn
          className={`photo-${isLoaded ? "visible" : "hidden"}`}
          src={photo.src}
          alt={photo.title}
          key={photo.id}
          onClick={handleEnlargePhoto}
          onLoad={handleLoader}
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
        {!isLoaded && <Loading />}
      </div>
    </div>
  );
};

export default Photos;
