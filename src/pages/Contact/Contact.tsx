import "./Contact.scss";
import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
    return (
        <div className="section" id="contact">
            <div className="w-full md:grid grid-cols-3">
                <div className="col-span-1">
                    <div className="heading">
                        <h1>CONTACT</h1>
                    </div>
                    <h3>ASK AWAY.</h3>
                </div>

                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;
