import React from "react";

const ContactForm = () => {
  const formTitle = "Send me an email!";

  return (
    <div className="ui raised very padded text container segment">
      <div className="form-container">
        <h1 className="form-title">{formTitle}</h1>
        <form className="ui form" name="contact" method="post">
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
            <input type="submit" value="Send" />
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
