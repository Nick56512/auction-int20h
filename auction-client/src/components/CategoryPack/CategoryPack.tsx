import "./CategoryPack.scss";
import "../LotsPack/LotsPack.scss";
import { categories } from "src/utils/mockData";
import { Fragment } from "react";
import { Button } from "../Button";

import { actions as filterActions } from "../../features/filter";
import { useAppDispatch } from "src/app/hooks";
import { Category } from "src/types/Category";

interface Props {
  title: string;
}

export const CategoryPack: React.FC<Props> = ({ title }) => {
  const dispatch = useAppDispatch();
  const setCategory = (curCategory: Category) =>
    dispatch(filterActions.setCategory(curCategory));

  return (
    <section>
      <div className="pack__header">
        <h2 className="pack__title">{title}</h2>
      </div>
      <div className="category-pack">
        {categories.map((category, i) => (
          <Fragment key={i}>
            <Button
              className="secondary-button category"
              role="link"
              to="/search"
              onClick={() => setCategory(category)}
            >
              <h3 className="category__title">{category}</h3>
            </Button>
          </Fragment>
        ))}
      </div>
    </section>
  );
};
