import './Button.scss';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export const Button: React.FC<Props> = ({children, className = ""}) => {
    return (
        <button className={`${className} + button`}>{children}</button>
    );
  };
