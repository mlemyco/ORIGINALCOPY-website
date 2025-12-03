import { HashLink as Link } from "react-router-hash-link";
import "./Home.scss";
import starRoll from "../../assets/media/star_roll.png";
import Button from "../../components/Button/Button";

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
                    <Link
                        to={
                            "https://portal.dubsado.com/public/form/view/68f14fdc13662868b9ae72e9?fbclid=PAdGRleAOcj0pleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAadSnEhriU-Sj7-VmDvLi0dATce2TgxNo2ASA8eD9_C_CVXlcwZB3QKc9NY-Tg_aem_lgoR78YiUdoKY55LynkPHg"
                        }
                        target="_blank"
                    >
                        <Button>BOOK</Button>
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default Home;
