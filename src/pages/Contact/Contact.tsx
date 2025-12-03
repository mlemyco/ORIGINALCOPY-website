import "./Contact.scss";
import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
    return (
        <div className="section" id="inquire">
            <div className="w-full grid grid-cols-3">
                <div className="col-span-1">
                    <div className="heading">
                        <h1>CONTACT</h1>
                    </div>
                    <h3>
                        GOT QUESTIONS?
                        <br />
                        WE GOT ANSWERS.
                    </h3>
                </div>

                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;
