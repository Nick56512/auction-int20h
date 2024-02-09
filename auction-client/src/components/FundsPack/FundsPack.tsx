import "../CategoryPack/CategoryPack.scss";

import { Category } from "../Category";

interface Props {
  title: string;
}

export const FundsPack: React.FC<Props> = ({ title }) => {
  return (
    <section>
      <div className="pack__header">
        <h2 className="pack__title">{title}</h2>
        <a className="pack__link" href="http://">
          Переглянути всі
        </a>
      </div>
      <div className="category-pack">
        <Category title="Фонд 1" />
        <Category title="Фонд 2" />
        <Category title="Фонд 3" />
        <Category title="Фонд 4" />
        <Category title="Фонд 5" />
        <Category title="Фонд 6" />
        <Category title="Фонд 7" />
        <Category title="Фонд 8" />
      </div>
    </section>
  );
};
