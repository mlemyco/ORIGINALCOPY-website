import "./Portfolio.scss";
import fallenAngel from "../../assets/media/fallen-angel.jpg";
import fifthVessel from "../../assets/media/fifth-vessel.jpg";
import gyulaKosice from "../../assets/media/gyula-kosice.jpg";
import ReceiptCaption from "../../components/ReceiptCaption/ReceiptCaption";

const Portfolio = () => {
  return (
    <div className="section" id="portfolio">
      <div className="heading">
        <h1>PORTFOLIO</h1>
        <h2>OUR RECEIPTS</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-5">
        <div
          className="square"
          style={{ backgroundImage: `url(${fifthVessel})` }}
        >
          <ReceiptCaption
            title="ORIGINALCOPY x FIFTH VESSEL"
            description="FOR THEIR GRAND OPENING EVENT WITH ISA MATCHA"
          />
        </div>

        <div
          className="square"
          style={{ backgroundImage: `url(${gyulaKosice})` }}
        >
          <ReceiptCaption
            title="ORIGINALCOPY x MFAH"
            description='
              FOR THEIR OPENING OF THEIR NEWEST EXHIBIT
              "Gyula Kosice: Intergalatic"'
          />
        </div>

        <div
          className="square"
          style={{ backgroundImage: `url(${fallenAngel})` }}
        >
          <ReceiptCaption
            title="ORIGINALCOPY x Fallen Angel"
            description="FOR THEIR LARGEST EOY SALE ON LINGERIE AND BELTS"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
