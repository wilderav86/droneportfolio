import React from "react";
import { Icon } from "semantic-ui-react";

const SocialMedia = () => {
  const mediaLinks = [
    {
      name: "instagram",

      src: "https://www.instagram.com/wilderav/",

      className: "instagram icon",
    },
    {
      name: "youtube",

      src: "https://www.youtube.com/channel/UCSSb61glUyRxHTGOF4X9ivg",

      className: "youtube icon",
    },
  ];

  const mappedLinks = mediaLinks.map((link, id) => {
    return (
      <a href={link.src} key={id}>
        <div>
          <Icon name={link.className} size="big" />
        </div>
      </a>
    );
  });

  return <div className="social-media-container">{mappedLinks}</div>;
};

export default SocialMedia;
