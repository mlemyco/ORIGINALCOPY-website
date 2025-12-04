import "./About.scss";

import origin from "../../assets/media/about_us_hero_section_cropped.png";

const About = () => {
    return (
        <div className="section" id="about">
            <div className="heading">
                <h1>ABOUT US</h1>
                <h2>SPRING 2024 IN COPENHAGEN, DENMARK</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center mb-10">
                <p>
                    On a semester abroad, Jennie walked into a Korean hotteok
                    storefront and took this dazzling photo with her lover. A
                    year-ish later, the concept of receipt photos visited her in
                    the form of a TikTok and she got to work to bring it in
                    Houston!
                </p>

                <img src={origin} />
            </div>

            <div className="orange-bg w-full flex flex-col justify-center items-center gap-5 text-center">
                <p>
                    ORIGINALCOPY is a play on receipts, and an oxymoron on
                    real-time experiences and digital photos. They are seen as
                    synonymous, but inherently aren't. Nothing beats that
                    original experience -- like drinking the first latte at your
                    now-favorite coffee shop.
                </p>

                <p>
                    While ORIGINALCOPY is not the OG receipt photobooth ever
                    made, it very well may be the first you will experience, and
                    it will be the absolute best. Because the best people pose
                    for our booth.
                </p>

                <p>"turning the mundane into memories"</p>
            </div>
        </div>
    );
};

export default About;
