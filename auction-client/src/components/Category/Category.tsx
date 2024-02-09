import "./Category.scss";

interface Props {
  title: string;
}

export const Category: React.FC<Props> = ({ title }) => {
  return (
    <div className="category">
      <a href="http://">
        <h3 className="category__title">{title}</h3>
      </a>
    </div>
  );
};
