import "./Category.scss";
import { Button } from "../Button";

interface Props {
  title?: string;
  imageSrc?: string;
}

export const Category: React.FC<Props> = ({ title, imageSrc }) => {
  return (
    <Button className="secondary-button category">
      {imageSrc ? (
        <img src={imageSrc} alt={title} className="category__image img" />
      ) : (
        <h3 className="category__title">{title}</h3>
      )}
    </Button>
  );
};
