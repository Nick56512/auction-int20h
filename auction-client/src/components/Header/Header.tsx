import "./Header.scss";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import classNames from "classnames";

import arrowLeftUp from "../../images/icons/arrow-left-up.svg";
import accountIcon from "../../images/icons/account-icon.svg";
import burger from "../../images/icons/burger.svg";
import close from "../../images/icons/close.svg";
import dropdown from "../../images/icons/dropdown.svg";

import { useState, useEffect, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { categories } from "src/utils/mockData";

export const Header: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selected, setSelected] = useState("");
  const body = document.body;
  const ref = useRef(null);

  function openBurgerMenu() {
    setOpen(true);
    body.classList.add("no-overflow");
  }
  function closeBurgerMenu() {
    setOpen(false);
    body.classList.remove("no-overflow");
  }

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    document.documentElement.style.setProperty(
      "--scrollbar-width",
      window.innerWidth - document.documentElement.clientWidth + "px",
    );

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const handleClickOutside = () => {
    setOpenDropdown(false);
  };
  useOnClickOutside(ref, handleClickOutside);

  if (windowWidth <= 1024) {
    return (
      <header className="header mobile">
        <Link to="/" className="header__logo-link" onClick={closeBurgerMenu}>
          Добрі справи
        </Link>
        <input
          className="header__search-input"
          type="text"
          placeholder="Я шукаю бренд, модель, товар..."
        />
        <Button className="burger-btn" onClick={openBurgerMenu}>
          <img src={burger} alt="burger icon" />
        </Button>
        <div className={classNames("burger-menu", { open })}>
          <Button
            className="burger-btn burger-close-btn"
            onClick={closeBurgerMenu}
          >
            <img src={close} alt="slose icon" />
          </Button>

          <div className="burger-menu__content">
            <Link
              to="/"
              className="header__logo-link"
              onClick={closeBurgerMenu}
            >
              Добрі справи
            </Link>
            <div
              className={classNames("dropdown", { open: openDropdown })}
              ref={ref}
            >
              <div
                className="dropdown__main-option"
                onClick={() => setOpenDropdown(!openDropdown)}
              >
                <p>{selected || "Усі категорії"}</p>
                <img
                  className="dropdown__icon"
                  src={dropdown}
                  alt="dropdown icon"
                />
              </div>

              <ul className="dropdown__menu">
                {categories.map((str) => (
                  <li
                    className="dropdown__menu__items"
                    onClick={() => {
                      setOpenDropdown(false);
                      setSelected(str);
                    }}
                  >
                    <p>{str}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="header__nav">
              <Button className="fav-icon-button" />
              <Button className="icon-button">
                <img src={accountIcon} alt="Account icon" />
              </Button>
            </div>
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
      </header>
    );
  }

  return (
    <header className="header">
      <Link to="/" className="header__logo-link">
        Добрі справи
      </Link>
      <div className={classNames("dropdown", { open: openDropdown })} ref={ref}>
        <div
          className="dropdown__main-option"
          onClick={() => setOpenDropdown(!openDropdown)}
        >
          <p>{selected || "Усі категорії"}</p>
          <img className="dropdown__icon" src={dropdown} alt="dropdown icon" />
        </div>

        <ul className="dropdown__menu">
          {categories.map((str) => (
            <li
              className="dropdown__menu__items"
              onClick={() => {
                setOpenDropdown(false);
                setSelected(str);
              }}
            >
              <p>{str}</p>
            </li>
          ))}
        </ul>
      </div>
      <input
        className="header__search-input"
        type="text"
        placeholder="Я шукаю бренд, модель, товар..."
      />
      <div className="header__nav">
        <Button className="fav-icon-button" />
        <Button className="icon-button">
          <img src={accountIcon} alt="Account icon" />
        </Button>
      </div>
      <Button className="main-button" role="link" to="/add-lot">
        Додати лот
        <img src={arrowLeftUp} alt="arrow icon" />
      </Button>
    </header>
  );
};
