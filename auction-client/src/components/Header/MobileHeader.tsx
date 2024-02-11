import { categories } from "src/utils/mockData";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import arrowLeftUp from "../../images/icons/arrow-left-up.svg";
import accountIcon from "../../images/icons/account-icon.svg";
import arrowRight from "../../images/icons/arrow-right.svg";
import burger from "../../images/icons/burger.svg";
import close from "../../images/icons/close.svg";
import classNames from "classnames";
import { SearchInput } from "../SearchInput";
import { Category } from "src/types/Category";
import { actions as filterActions } from "../../features/filter";
import { useAppDispatch, useAppSelector } from "src/app/hooks";

export const MobileHeader: React.FC = () => {
  const [open, setOpen] = useState(false);

  const body = document.body;
  function openBurgerMenu() {
    setOpen(true);
    body.classList.add("no-overflow");
  }
  function closeBurgerMenu() {
    setOpen(false);
    body.classList.remove("no-overflow");
  }

  const { category } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();
  const setCategory = (curCategory: Category) =>
    dispatch(filterActions.setCategory(curCategory));

  return (
    <header className="header mobile">
      <Link to="/" className="header__logo-link" onClick={closeBurgerMenu}>
        Добрі справи
      </Link>
      <SearchInput />
      <Button className="burger-btn" onClick={openBurgerMenu}>
        <img src={burger} alt="burger icon" />
      </Button>
      <div className={classNames("burger-menu", { open })}>
        <Button
          className="burger-btn burger-close-btn"
          onClick={closeBurgerMenu}
        >
          <img src={close} alt="close icon" />
        </Button>

        <div className="burger-menu__content">
          <Link to="/" className="header__logo-link" onClick={closeBurgerMenu}>
            Добрі справи
          </Link>
          <div>
            <p className="menu__categories-title">Пошук по категоріям</p>
            <ul className="menu__categories">
              {categories.map((str, i) => (
                <li key={i}>
                  <Button
                    className={classNames(
                      "secondary-button menu__categories__item",
                      { current: category === str },
                    )}
                    onClick={() => setCategory(str)}
                    role="link"
                    to="/search"
                  >
                    <p>{str}</p>
                    <img src={arrowRight} alt="arrow left" />
                  </Button>
                </li>
              ))}
              <li>
                <Button
                  className={classNames(
                    "secondary-button menu__categories__item",
                    { current: category === "Усі категорії" },
                  )}
                  onClick={() => setCategory("Усі категорії")}
                  role="link"
                  to="/search"
                >
                  <p>Усі категорії</p>
                  <img src={arrowRight} alt="arrow left" />
                </Button>
              </li>
            </ul>
          </div>
          <div className="header__nav">
            <Button className="fav-icon-button" />
            <Button className="icon-button">
              <img src={accountIcon} alt="Account icon" />
            </Button>
            <Button
              className="main-button"
              role="link"
              to="/add-lot"
              onClick={closeBurgerMenu}
            >
              Додати лот
              <img src={arrowLeftUp} alt="arrow icon" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
