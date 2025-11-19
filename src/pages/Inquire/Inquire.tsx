import React from "react";
import "./Inquire.scss";
import Button from "../../components/Button/Button";

const Inquire = () => {
  return (
    <div className="section" id="inquire">
      <div className="w-full grid grid-cols-3">
        <div className="col-span-1">
          <div className="heading">
            <h1>INQUIRE</h1>
          </div>
          <h3>
            OUR PACKAGES ARE UNIQUE TO EACH BUSINESS.
            <br />
            SO LET'S CHAT.
          </h3>
        </div>

        <div className="grid grid-cols-2 col-span-2 gap-2 items-center">
          <p className="col-span-1 text-right">
            <label htmlFor="email-input">your email</label>
          </p>
          <div className="col-span-1">
            <input type="text" id="email-input" className="w-full" />
          </div>

          <p className="col-span-1 text-right">
            <label htmlFor="message-input">your message</label>
          </p>
          <div className="col-span-1 items-start">
            <textarea id="message-input" className="size-full" />
          </div>

          <div className="col-start-2 ml-auto">
            <Button>SUBMIT</Button>
          </div>
        </div>

        {/* <div className="col-span-2 grid grid-cols-2 grid-rows-9 gap-2">
          <p className="col-span-1 text-right">
            <label htmlFor="email-input">your email</label>
          </p>
          <div className="col-span-1 row-span-1 flex items-center">
            <input type="text" id="email-input" className="w-full" />
          </div>

          <p className="col-span-1 text-right">
            <label htmlFor="message-input">your message</label>
          </p>
          <div className="col-span-1 items-start">
            <textarea id="message-input" className="size-full" />
          </div>

          <div className="ml-auto">
            <Button>SUBMIT</Button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Inquire;
