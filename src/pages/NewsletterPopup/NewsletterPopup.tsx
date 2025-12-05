import React, { useState } from "react";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";
import newsletterModalBg from "../../assets/media/7.png";
import barcode from "../../assets/media/barcode.png";
import { postSubscribe } from "../../services/subscribeService";

const NewsletterPopup = ({
    setIsOpen,
}: {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(false);

    const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setIsEmailValid(e.target.validity.valid);
    };

    const subscribeToNewsletter = async () => {
        console.log("subscribing");
        setIsOpen(false);
        postSubscribe(email, firstName, lastName);
    };

    return (
        <>
            <Modal backgroundImage={newsletterModalBg} setIsOpen={setIsOpen}>
                <h2>SIGN UP FOR OUR NEWSLETTER</h2>
                <h4>to follow our houston whereabouts</h4>

                <div className="grid grid-cols-2 gap-1">
                    <input
                        id="first-name"
                        className="bg-white"
                        type="text"
                        placeholder="first name"
                        onChange={handleFirstNameChange}
                    />
                    <input
                        id="last-name"
                        className="bg-white"
                        type="text"
                        placeholder="last name"
                        onChange={handleLastNameChange}
                    />
                    <input
                        id="subscribe-email"
                        className="col-span-2 bg-white"
                        type="email"
                        placeholder="email address"
                        onChange={handleEmailChange}
                    />
                </div>

                <Button
                    onClickFn={subscribeToNewsletter}
                    isDisabled={email == "" || !isEmailValid}
                >
                    JOIN
                </Button>

                <h4>we promise not to spam</h4>

                <img src={barcode} alt="" className="px-8" />
            </Modal>
        </>
    );
};

export default NewsletterPopup;
