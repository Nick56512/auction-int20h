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
        <a className="pack__link" href="http://">
          Переглянути всі
        </a>
      </div>
      <div className="category-pack">
        <Category title="Мистецтво" />
        <Category title="Коштовності" />
        <Category title="Техніка" />
        <Category title="Одяг" />
        <Category title="Книги" />
        <Category title="Монети" />
        <Category title="Меблі" />
        <Category title="Іграшки" />
      </div>
    </section>
  );
};
