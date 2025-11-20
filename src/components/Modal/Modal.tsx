import "./Modal.scss";
import CloseButton from "../CloseButton/CloseButton";

const Modal = ({
  backgroundImage,
  setIsOpen,
  children,
}: {
  backgroundImage: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}) => {
  const closeModal = () => {
    setIsOpen(false);
  };

  backgroundImage = "";

  return (
    <>
      <div className="size-full fixed"></div>

      <div
        className={`modal`}
        style={{ backgroundImage: `url(${backgroundImage}` }}
      >
        {children}

        <CloseButton closeFn={closeModal} />
      </div>
    </>
  );
};

export default Modal;
