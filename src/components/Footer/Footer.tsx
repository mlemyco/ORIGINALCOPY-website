import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="flex purple-bg py-2 px-5">
      <a href="" className="flex-1 flex justify-center">
        SUBSCRIBE TO OUR NEWSLETTER
      </a>

      <div className="socials flex gap-3">
        <a href="https://www.instagram.com/originalcopyphotobooth/">
          <i className="fa-brands fa-instagram"></i>
        </a>

        <a href="https://www.tiktok.com/@originalcopyphotobooth">
          <i className="fa-brands fa-tiktok"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
