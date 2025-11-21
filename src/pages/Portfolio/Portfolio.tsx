import "./Portfolio.scss";
import fallenAngel from "../../assets/media/fallen-angel.jpg";
import fifthVessel from "../../assets/media/Isa_Matcha_image.png";
import gyulaKosice from "../../assets/media/gyula-kosice.jpg";
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";

const Portfolio = () => {
    const portfolioEntries = [
        [
            fifthVessel,
            "ORIGINALCOPY x FIFTH VESSEL",
            "FOR THEIR GRAND OPENING EVENT WITH ISA MATCHA",
        ],
        [
            gyulaKosice,
            "ORIGINALCOPY x MFAH",
            'FOR THEIR OPENING OF THEIR NEWEST EXHIBIT "Gyula Kosice: Intergalatic"',
        ],
        [
            fallenAngel,
            "ORIGINALCOPY x Fallen Angel",
            "FOR THEIR LARGEST EOY SALE ON LINGERIE AND BELTS",
        ],
    ];

    return (
        <div className="section" id="portfolio">
            <div className="heading">
                <h1>PORTFOLIO</h1>
                <h2>OUR RECEIPTS</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-5">
                {portfolioEntries.map((entry, index) => (
                    <PortfolioCard
                        key={index}
                        backgroundImage={entry[0]}
                        title={entry[1]}
                        description={entry[2]}
                    />
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
