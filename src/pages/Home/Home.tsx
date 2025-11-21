import { HashLink as Link } from "react-router-hash-link";
import "./Home.scss";
import starRoll from "../../assets/media/star_roll.png";

const Home = () => {
    return (
        <div id="home" className="section w-full h-screen flex flex-col py-8">
            <div id="star-roll">
                <img src={starRoll} alt="" />
            </div>

            <div className="content flex flex-col justify-around items-center">
                <div className="title flex-1 flex flex-col justify-center">
                    <h1>ORIGINALCOPY</h1>
                    <div className="flex justify-between">
                        <h3>houston's</h3>
                        <h3>receipt photobooth</h3>
                    </div>
                </div>

                <nav className="flex justify-around w-full">
                    <h2>
                        <Link to="#portfolio">PORTFOLIO</Link>
                    </h2>
                    <h2>
                        <Link to="#about">ABOUT US</Link>
                    </h2>
                    <h2>
                        <Link to="#inquire">INQUIRE</Link>
                    </h2>
                </nav>
            </div>
        </div>
    );
};

export default Home;
