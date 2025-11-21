import "./Inquire.scss";
import ContactForm from "./ContactForm/ContactForm";

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

                <ContactForm />
            </div>
        </div>
    );
};

export default Inquire;
