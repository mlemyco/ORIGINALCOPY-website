import { HashLink as Link } from "react-router-hash-link";
import "./Home.scss";

const Home = () => {
  return (
    <div id="home" className="section h-screen gap-y-40">
      <div className="title">
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
  );
};

export default Home;
