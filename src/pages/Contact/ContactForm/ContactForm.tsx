import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "../../../components/Button/Button";

const ContactForm = () => {
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setIsEmailValid(e.target.validity.valid);
    };

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    };

    const displayStatus = (status: string) => {
        setStatus(status);

        setTimeout(() => {
            setStatus("");
        }, 5000);
    };

    const clearFields = () => {
        nameRef.current!.value = "";
        emailRef.current!.value = "";
        messageRef.current!.value = "";

        setName("");
        setEmail("");
        setMessage("");
    };

    const sendEmail = () => {
        if (!name) {
            displayStatus("Please provide a name.");
            return;
        } else if (!email) {
            displayStatus("Please provide an email.");
            return;
        } else if (!message) {
            displayStatus("Please provide a message.");
            return;
        } else if (!isEmailValid) {
            displayStatus("Please enter a valid email address.");
            return;
        }

        emailjs
            .send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    name: name,
                    email: email,
                    message: message,
                },
                { publicKey: PUBLIC_KEY }
            )
            .then(
                (response) => {
                    console.log("SUCCESS", response.status, response.text);
                    displayStatus("Email sent!");
                    clearFields();
                },
                (error) => {
                    console.log("FAILED...", error);
                    displayStatus(
                        "An error occurred. Please try again or email us directly at contact@originalcopyphotobooth.com."
                    );
                }
            );
    };

    return (
        <form id="contact-form" className="col-span-2 pt-5">
            <div className="grid grid-cols-3 gap-2">
                <p className="col-span-1 text-right">
                    <label htmlFor="name-input">your name</label>
                </p>
                <div className="col-span-2">
                    <input
                        type="text"
                        id="name-input"
                        className="size-full"
                        name="name"
                        required
                        onChange={handleNameChange}
                        ref={nameRef}
                        autoComplete="name"
                    />
                </div>

                <p className="col-span-1 text-right">
                    <label htmlFor="email-input">your email</label>
                </p>
                <div className="col-span-2">
                    <input
                        type="email"
                        id="email-input"
                        className="size-full"
                        name="email"
                        required
                        onChange={handleEmailChange}
                        ref={emailRef}
                        autoComplete="email"
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
                        name="message"
                        required
                        onChange={handleMessageChange}
                        ref={messageRef}
                    />
                </div>

                <div className="col-start-2">
                    <p>{status}</p>
                </div>

                <div className="col-span-3 ml-auto">
                    <Button onClickFn={sendEmail}>SUBMIT</Button>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
