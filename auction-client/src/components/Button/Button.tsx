import { Link } from "react-router-dom";
import "./Button.scss";

interface Props {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  role?: "link" | "button";
  to?: string;
  type?: "submit" | "button" | "reset";
}

export const Button: React.FC<Props> = ({
  children,
  className = "",
  onClick,
  role,
  to = "",
  type,
}) => {
  if (role === "link") {
    return (
      <Link className={`${className} button`} to={to} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${className} button`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};
