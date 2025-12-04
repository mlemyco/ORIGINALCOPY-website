import "./ReceiptCaption.scss";
import barcode from "../../../assets/media/barcode.png";

const ReceiptCaption = ({
    title,
    description,
}: {
    title: string;
    description: string;
}) => {
    return (
        <div className="receipt-caption">
            <div>
                <h4>{title}</h4>
                <br />
                <p>*****</p>
                <p>{description}</p>
            </div>

            <img src={barcode} alt="" />
        </div>
    );
};

export default ReceiptCaption;
