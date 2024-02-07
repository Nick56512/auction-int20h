import './Button.scss';

interface Props {
  children: React.ReactNode;
}

export const Button: React.FC<Props> = ({children}) => {
    return (
        <button className="sale-btn">{children}</button>
    );
  };
