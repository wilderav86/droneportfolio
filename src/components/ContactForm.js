import React from "react";

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <form name="contact" method="post">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label htmlFor="name">Name</label> <br />
          <input type="text" id="name" name="name" required />
        </p>
        <p>
          <label htmlFor="email">Email</label> <br />
          <input type="email" id="email" name="email" required />
        </p>
        <p>
          <label htmlFor="message">Message</label> <br />
          <textarea id="message" name="message" required></textarea>
        </p>
        <p>
          <input type="submit" value="Submit message" />
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
