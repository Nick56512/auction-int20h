import classNames from "classnames";
import { Button } from "../Button";
import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import dropdown from "../../images/icons/dropdown.svg";
import { categories } from "src/utils/mockData";
import { Category } from "src/types/Category";
import { actions as filterActions } from "../../features/filter";
import { useAppDispatch, useAppSelector } from "src/app/hooks";

export const HeaderDropdown: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const ref = useRef(null);

  const { category } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();
  const setCategory = (curCategory: Category) =>
    dispatch(filterActions.setCategory(curCategory));

  const handleClickOutside = () => {
    setOpenDropdown(false);
  };
  useOnClickOutside(ref, handleClickOutside);

  return (
    <div className={classNames("dropdown", { open: openDropdown })} ref={ref}>
      <div
        className="dropdown__main-option"
        onClick={() => setOpenDropdown(!openDropdown)}
      >
        <p>{category || "Усі категорії"}</p>
        <img className="dropdown__icon" src={dropdown} alt="dropdown icon" />
      </div>

      <ul className="dropdown__menu">
        {categories.map((str, i) => (
          <li key={i}>
            <Button
              className="dropdown__menu__item"
              onClick={() => {
                setOpenDropdown(false);
                setCategory(str);
              }}
              role="link"
              to="/search"
            >
              <p>{str}</p>
            </Button>
          </li>
        ))}
        <li>
          <Button
            className="dropdown__menu__item"
            onClick={() => {
              setOpenDropdown(false);
              setCategory("Усі категорії");
            }}
            role="link"
            to="/search"
          >
            <p>Усі категорії</p>
          </Button>
        </li>
      </ul>
    </div>
  );
};
