import "./ReceiptCaption.scss";

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
        <p>*****</p>
        <p>{description}</p>
      </div>

      <img
        src="https://static.vecteezy.com/system/resources/previews/048/230/807/non_2x/barcode-black-color-for-payment-vector.jpg"
        alt=""
      />
    </div>
  );
};

export default ReceiptCaption;
