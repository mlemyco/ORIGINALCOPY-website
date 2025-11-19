import "./Button.scss";

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="purple-bg rounded-full py-3 px-10 size-fit hover:cursor-pointer">
      {children}
    </button>
  );
};

export default Button;
