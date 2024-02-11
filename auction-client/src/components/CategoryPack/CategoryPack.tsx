import "./CategoryPack.scss";
import "../LotsPack/LotsPack.scss";
import { Category } from "../Category";
import { categories } from "src/utils/mockData";
import { Fragment } from "react";

interface Props {
  title: string;
}

export const CategoryPack: React.FC<Props> = ({ title }) => {
  return (
    <section>
      <div className="pack__header">
        <h2 className="pack__title">{title}</h2>
      </div>
      <div className="category-pack">
        {categories.map((category, i) => (
          <Fragment key={i}>
            <Category title={category} />
          </Fragment>
        ))}
      </div>
    </section>
  );
};
