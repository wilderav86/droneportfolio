import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <video className="landing-page-video" loop autoPlay muted playsInline>
        <source
          src={require("../assets/Videos/crane.mp4").default}
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Contact;
