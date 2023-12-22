interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";

}

const Button = ({ children, color = "danger"}: Props) => {
  return (
    <div>
      <button className={"btn btn-outline-" + color}>
        {children}
      </button>
    </div>
  );
};

export default Button;
