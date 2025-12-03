import "./Button.scss";

const Button = ({
    onClickFn,
    isDisabled = false,
    children,
}: {
    onClickFn?: () => void;
    isDisabled?: boolean;
    children: React.ReactNode;
}) => {
    return (
        <button
            type="button"
            onClick={onClickFn}
            disabled={isDisabled}
            className="purple-bg rounded-full py-2 px-10 size-fit hover:cursor-pointer"
        >
            {children}
        </button>
    );
};

export default Button;
