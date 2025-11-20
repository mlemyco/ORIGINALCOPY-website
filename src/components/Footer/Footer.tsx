import "./Footer.scss";

const Footer = ({
  setIsNewsletterSubscribeOpen,
}: {
  setIsNewsletterSubscribeOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <footer className="flex purple-bg py-2 px-5">
      <div className="flex-1 flex justify-center">
        <p
          className="underline"
          onClick={() => setIsNewsletterSubscribeOpen(true)}
        >
          SUBSCRIBE TO OUR NEWSLETTER
        </p>
      </div>

      <div className="socials flex gap-3">
        <a href="https://www.instagram.com/originalcopyphotobooth/">
          <i className="fa-brands fa-instagram"></i>
        </a>

        <a href="https://www.tiktok.com/@originalcopyphotobooth">
          <i className="fa-brands fa-tiktok"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
