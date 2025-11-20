import React from "react";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";

const NewsletterPopup = ({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const newsletterModalBg =
    "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtNjA0LWVsZW1lbnQtMDYwMS5qcGc.jpg";

  const joinNewsletter = () => {
    return;
  };

  return (
    <>
      <Modal backgroundImage={newsletterModalBg} setIsOpen={setIsOpen}>
        <h2>SIGN UP FOR OUR NEWSLETTER</h2>
        <h4>to follow our houston whereabouts</h4>

        <input
          id="subscribe-email"
          className="w-full bg-white"
          type="text"
          placeholder="your email address..."
        />
        <Button onClickFn={joinNewsletter}>JOIN</Button>

        <h4>we promise not to spam</h4>

        <img
          src="https://static.vecteezy.com/system/resources/previews/048/230/807/non_2x/barcode-black-color-for-payment-vector.jpg"
          alt=""
          className="px-8"
        />
      </Modal>
    </>
  );
};

export default NewsletterPopup;
