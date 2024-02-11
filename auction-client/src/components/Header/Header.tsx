import "./Header.scss";
import { Button } from "../Button";
import { Link } from "react-router-dom";

import arrowLeftUp from "../../images/icons/arrow-left-up.svg";
import accountIcon from "../../images/icons/account-icon.svg";

import { useState, useEffect } from "react";
import { HeaderDropdown } from "./HeaderDropdown";
import { MobileHeader } from "./MobileHeader";
import { SearchInput } from "../SearchInput";
import { LogIn } from "../LogIn";

export const Header: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [openLogin, setOpenLogin] = useState(false);
  const body = document.body;
  function openLoginFn() {
    setOpenLogin(true);
    body.classList.add("no-overflow");
  }
  function closeLoginFn() {
    setOpenLogin(false);
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

  return (
    <>
      {windowWidth <= 1024 ? (
        <MobileHeader openLoginFn={openLoginFn} />
      ) : (
        <header className="header">
          <Link to="/" className="header__logo-link">
            Добрі справи
          </Link>
          <HeaderDropdown />
          <SearchInput />
          <div className="header__nav">
            <Button className="fav-icon-button" />
            <Button className="icon-button" onClick={openLoginFn}>
              <img src={accountIcon} alt="Account icon" />
            </Button>
          </div>
          <Button className="main-button" role="link" to="/add-lot">
            Додати лот
            <img src={arrowLeftUp} alt="arrow icon" />
          </Button>
        </header>
      )}
      <LogIn openLogin={openLogin} closeLoginFn={closeLoginFn} />
    </>
  );
};
