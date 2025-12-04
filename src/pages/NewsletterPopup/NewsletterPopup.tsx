import React, { useState } from "react";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";
import newsletterModalBg from "../../assets/media/7.png";
import barcode from "../../assets/media/barcode.png";

const NewsletterPopup = ({
    setIsOpen,
}: {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const [email, setEmail] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setIsEmailValid(e.target.validity.valid);
    };

    const subscribeToNewsletter = async () => {
        // fetch("/subscribers", {
        //     method: "GET",
        //     headers: { "Content-Type": "application/json" },
        // }).then((response) => {
        //     console.log(response.json());
        // });

        console.log("subscribing");
        setIsSubscribed(true);

        //     fetch("/subscribers", {
        // method: "POST",
        //         headers: { "Content-Type": "application/json" },
        //         body: JSON.stringify({ email }),
        //     })
        //     .then((response) => {
        //         if (response.status >= 200 && response.status < 300) {
        //             setIsSubscribed(true);
        //         }
        //     });
    };

    return (
        <>
            <Modal backgroundImage={newsletterModalBg} setIsOpen={setIsOpen}>
                <h2>SIGN UP FOR OUR NEWSLETTER</h2>
                <h4>to follow our houston whereabouts</h4>

                <input
                    id="subscribe-email"
                    className="w-full bg-white"
                    type="email"
                    placeholder="your email address..."
                    onChange={handleEmailChange}
                />

                {isSubscribed ? (
                    <h3>SUBSCRIBED!</h3>
                ) : (
                    <Button
                        onClickFn={subscribeToNewsletter}
                        isDisabled={email == "" || !isEmailValid}
                    >
                        JOIN
                    </Button>
                )}

                <h4>we promise not to spam</h4>

                <img src={barcode} alt="" className="px-8" />
            </Modal>
        </>
    );
};

export default NewsletterPopup;
