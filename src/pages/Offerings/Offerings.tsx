import communityEvents from "../../assets/media/COMMUNITY_EVENTS.png";
import personalEventsGif from "../../assets/media/PERSONAL_EVENTS_GIF.gif";
// import photoframes from "../../assets/media/photoframes_image.png";
import leftPhotoframe from "../../assets/media/photoframes_image_left.png";
import rightPhotoframe from "../../assets/media/photoframes_image_right.png";
// import photoholders from "../../assets/media/photoholders_image.png";
import leftPhotoholder from "../../assets/media/photoholders_image_left.png";
import rightPhotoholder from "../../assets/media/photoholders_image_right.png";
import ClientFav from "../../components/ClientFav/ClientFav";

const Offerings = () => {
    return (
        <div className="section text-center" id="offerings">
            <div className="mb-10">
                <h2>WE OFFER OUR RECEIPT PHOTOBOOTHS FOR</h2>

                <div className="grid md:grid-cols-2">
                    <div className="text-center md:px-10 py-4">
                        <img src={communityEvents} alt="" />
                        <h2>COMMUNITY EVENTS</h2>
                        <h3>EX: BRAND ACTIVATIONS, GRAND OPENINGS</h3>
                    </div>

                    <div className="text-center md:px-10 py-4">
                        <img src={personalEventsGif} alt="" />
                        <h2>PERSONAL EVENTS</h2>
                        <h3>EX: WEDDINGS, PARTIES, CELEBRATIONS</h3>
                    </div>
                </div>

                <h3>STARTING AT $350 for 3 HOURS of UNLIMITED PRINTING</h3>
            </div>

            <div>
                <h2>WE OFFER STANDARD OR CUSTOM...</h2>

                <div className="grid md:grid-cols-2">
                    <div className="text-center md:px-10 py-4">
                        <h2>PHOTOFRAMES</h2>
                        {/* <img src={photoframes} alt="" /> */}
                        <div className="grid grid-cols-2">
                            <img
                                src={leftPhotoframe}
                                alt=""
                                className="h-full"
                            />
                            <img
                                src={rightPhotoframe}
                                alt=""
                                className="h-full"
                            />
                            <h3>STANDARD</h3>
                            <h3>CUSTOM</h3>
                        </div>
                    </div>

                    <div className="text-center md:px-10 py-4">
                        <h2>PHOTOHOLDERS</h2>
                        {/* <img
                            className="client-favorite"
                            src={photoholders}
                            alt=""
                        /> */}

                        <div className="grid grid-cols-2">
                            <img
                                src={leftPhotoholder}
                                alt=""
                                className="h-full"
                            />
                            <ClientFav>
                                <img
                                    src={rightPhotoholder}
                                    alt=""
                                    className="h-full"
                                />
                            </ClientFav>
                            <h3>STANDARD</h3>
                            <h3>CUSTOM</h3>
                        </div>

                        <p className="subtitle">
                            *DIFFERENCE IN COLOR IS DUE TO LIGHTING.
                            <br />
                            100 GSM IVORY WHITE VELLUM PAPER IS USED TO MAKE OUR
                            PHOTOHOLDERS.
                        </p>
                    </div>
                </div>
            </div>

            <h3>STANDARD // $1.05/PHOTOHOLDER | CUSTOM // $1.25/PHOTOHOLDER</h3>
        </div>
    );
};

export default Offerings;
