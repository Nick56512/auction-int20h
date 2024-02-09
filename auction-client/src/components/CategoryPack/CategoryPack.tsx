import "./CategoryPack.scss";
import "../LotsPack/LotsPack.scss";
import { Category } from "../Category";

interface Props {
  title: string;
}

export const CategoryPack: React.FC<Props> = ({ title }) => {
  return (
    <section>
      <div className="pack__header">
        <h2 className="pack__title">{title}</h2>
        <div className="pack__nav-btn">
          {/* <Button className="icon-button arrow-left"></Button>
          <Button className="icon-button arrow-right"></Button> */}
        </div>
      </div>
      <div className="category-pack">
        <Category title="Мистецтво" imageSrc="" />
        <Category title="Коштовності" imageSrc="" />
        <Category title="Техніка" imageSrc="" />
        <Category title="Одяг" imageSrc="" />
        <Category title="Книги" imageSrc="" />
        <Category title="Монети" imageSrc="" />
        <Category title="Меблі" imageSrc="" />
        <Category title="Іграшки" imageSrc="" />
      </div>
    </section>
  );
};
