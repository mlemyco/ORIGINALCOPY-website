import "./Modal.scss";
import CloseButton from "../CloseButton/CloseButton";

const Modal = ({
    backgroundImage,
    setIsOpen,
    children,
    onClose,
}: {
    backgroundImage: string;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
    onClose?: () => void;
}) => {
    const closeModal = () => {
        setIsOpen(false);

        if (onClose) {
            onClose();
        }
    };

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
