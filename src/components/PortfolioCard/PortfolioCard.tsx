import ReceiptCaption from "./ReceiptCaption/ReceiptCaption";

const PortfolioCard = ({
    backgroundImage,
    title,
    description,
}: {
    backgroundImage: string;
    title: string;
    description: string;
}) => {
    return (
        <div
            className="square mb-25"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <ReceiptCaption title={title} description={description} />
        </div>
    );
};

export default PortfolioCard;
