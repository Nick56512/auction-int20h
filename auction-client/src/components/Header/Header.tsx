import "./Header.scss";
import { Button } from "../Button";
import { Link } from "react-router-dom";

import arrowLeftUp from "../../images/icons/arrow-left-up.svg";
import accountIcon from "../../images/icons/account-icon.svg";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <Link to="#" className="header__logo-link">
        Добрі справи
      </Link>
      <select className="header__select">
        <option value="">Усі категорої</option>
      </select>
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
      <Button className="main-button">
        Додати лот
        <img src={arrowLeftUp} alt="arrow icon" />
      </Button>
    </header>
  );
};
