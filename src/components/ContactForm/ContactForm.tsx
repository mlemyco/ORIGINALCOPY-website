// import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "../Button/Button";

const ContactForm = () => {
  const SERVICE_ID = import.meta.env.EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.EMAILJS_PUBLIC_KEY;

  //   const [email, setEmail] = useState("");
  //   const [message, setMessage] = useState("");

  //   const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setEmail(e.target.value);
  //   };

  //   const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  //     setMessage(e.target.value);
  //   };

  const sendEmail = () => {
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, "#contact-form", PUBLIC_KEY).then(
      (response) => {
        console.log("SUCCESS", response.status, response.text);
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
  };

  return (
    <form id="contact-form" className="col-span-2">
      <div className="grid grid-cols-3 gap-2">
        <p className="col-span-1 text-right">
          <label htmlFor="email-input">your email</label>
        </p>
        <div className="col-span-2">
          <input
            type="text"
            id="email-input"
            className="size-full"
            // onChange={handleEmailChange}
          />
        </div>

        <p className="col-span-1 text-right">
          <label htmlFor="message-input">your message</label>
        </p>
        <div className="col-span-2">
          <textarea
            id="message-input"
            className="size-full"
            rows={5}
            // onChange={handleMessageChange}
          />
        </div>

        <div className="col-start-3 ml-auto">
          <Button onClickFn={sendEmail}>SUBMIT</Button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
