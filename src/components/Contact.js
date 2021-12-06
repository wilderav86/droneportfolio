import React from "react";
import ContactForm from "./ContactForm";
import SocialMedia from "./SocialMedia";

const Contact = () => {
  return (
    <React.Fragment>
      <div className="contact-container">
        <video
          className="contact-background-video"
          loop
          autoPlay
          muted
          playsInline
        >
          <source
            src={require("../assets/Videos/crane.mp4").default}
            type="video/mp4"
          />
        </video>
        {/* <SocialMedia /> */}
        <ContactForm />
      </div>
    </React.Fragment>
  );
};

export default Contact;
