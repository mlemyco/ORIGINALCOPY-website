import "./Button.scss";

const Button = ({
  onClickFn,
  children,
}: {
  onClickFn: () => void;
  children: React.ReactNode;
}) => {
  return (
    <button
      onClick={onClickFn}
      className="purple-bg rounded-full py-2 px-10 size-fit hover:cursor-pointer"
    >
      {children}
    </button>
  );
};

export default Button;
