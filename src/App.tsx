import "./App.scss";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";
import About from "./pages/About/About";
// import Slideshow from "./components/Slideshow/Slideshow";
import Footer from "./components/Footer/Footer";

// import example1 from "./assets/media/examples/example-1.png";
// import example2 from "./assets/media/examples/example-2.png";
// import example3 from "./assets/media/examples/example-3.png";
// import example4 from "./assets/media/examples/example-4.png";
// import example5 from "./assets/media/examples/example-5.png";
import receiptPhotos from "./assets/media/receipt_photo.png";
import NewsletterPopup from "./pages/NewsletterPopup/NewsletterPopup";
import { useState } from "react";
import Offerings from "./pages/Offerings/Offerings";

function App() {
    // const examples = [example1, example2, example3, example4, example5];

    const [isNewsletterSubscribeOpen, setIsNewsletterSubscribeOpen] =
        useState(false);

    return (
        <>
            {isNewsletterSubscribeOpen && (
                <NewsletterPopup setIsOpen={setIsNewsletterSubscribeOpen} />
            )}

            <Home />
            <Portfolio />
            <About />
            <Offerings />
            <Contact />
            {/* <Slideshow elements={examples} height={250} /> */}
            <img src={receiptPhotos} alt="" className="pb-10 px-5 w-full" />
            <Footer
                setIsNewsletterSubscribeOpen={setIsNewsletterSubscribeOpen}
            />
        </>
    );
}

export default App;
