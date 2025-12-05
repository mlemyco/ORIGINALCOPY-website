const CloseButton = ({ closeFn }: { closeFn: () => void }) => {
    return (
        <div
            onClick={closeFn}
            className="hover:cursor-pointer rounded-full p-2 text-center bg-gray-200 flex justify-center items-center size-10 absolute -right-3 -top-2"
        >
            <i className="fa-solid fa-xmark"></i>
        </div>
    );
};

export default CloseButton;
