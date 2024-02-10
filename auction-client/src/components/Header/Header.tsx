import "./Header.scss";
import { Button } from "../Button";
import { Link } from "react-router-dom";

import arrowLeftUp from "../../images/icons/arrow-left-up.svg";
import accountIcon from "../../images/icons/account-icon.svg";

import { useState, useEffect } from "react";
import { HeaderDropdown } from "./HeaderDropdown";
import { MobileHeader } from "./MobileHeader";
import { SearchInput } from "../SearchInput";

export const Header: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

  if (windowWidth <= 1024) {
    return <MobileHeader />;
  }

  return (
    <header className="header">
      <Link to="/" className="header__logo-link">
        Добрі справи
      </Link>
      <HeaderDropdown />
      <SearchInput />
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
