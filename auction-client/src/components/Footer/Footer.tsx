import "./Footer.scss";
import { Link } from "react-router-dom";

import emailIcon from "../../images/icons/email-icon.svg";
import twitterIcon from "../../images/icons/twitter-icon.svg";
import instIcon from "../../images/icons/inst-icon.svg";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <nav className="footer__menu">
        <div className="footer__menu-items">
          <h2 className="footer__menu-title">
            <Link className="footer__logo-link" to="/">
              Добрі справи
            </Link>
          </h2>
          <ul className="footer__menu-links">
            <li>
              <Link className="footer__menu-link" to="#">
                Умови співпраці
              </Link>
            </li>
            <li>
              <Link className="footer__menu-link" to="#">
                Партнерство
              </Link>
            </li>
            <li>
              <Link className="footer__menu-link" to="#">
                Пресс матеріали
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__menu-items">
          <h2 className="footer__menu-title">Придбати</h2>
          <ul className="footer__menu-links">
            <li>
              <Link className="footer__menu-link" to="#">
                Як придбати?
              </Link>
            </li>
            <li>
              <Link className="footer__menu-link" to="#">
                Поради покупцям
              </Link>
            </li>
            <li>
              <Link className="footer__menu-link" to="#">
                Умови купівлі
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__menu-items">
          <h2 className="footer__menu-title">Продати</h2>
          <ul className="footer__menu-links">
            <li>
              <Link className="footer__menu-link" to="#">
                Як продати?
              </Link>
            </li>
            <li>
              <Link className="footer__menu-link" to="#">
                Поради продавцям
              </Link>
            </li>
            <li>
              <Link className="footer__menu-link" to="#">
                Умови продажів
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__menu-items">
          <h2 className="footer__menu-title">Мій акаунт</h2>
          <ul className="footer__menu-links">
            <li>
              <Link className="footer__menu-link" to="#">
                Вхід в акаунт
              </Link>
            </li>
            <li>
              <Link className="footer__menu-link" to="#">
                Реєстрація
              </Link>
            </li>
            <li>
              <Link className="footer__menu-link" to="#">
                Обрані лоти
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="footer__contacts">
        <ul className="footer__contacts-soc">
          <li>
            <Link
              to="mailto:auction@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__contacts-link"
            >
              <img src={emailIcon} alt="Email" />
            </Link>
          </li>
          <li>
            <Link
              to="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__contacts-link"
            >
              <img src={twitterIcon} alt="Twitter" />
            </Link>
          </li>
          <li>
            <Link
              to="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__contacts-link"
            >
              <img src={instIcon} alt="Instagram" />
            </Link>
          </li>
        </ul>
        <Link className="footer__contacts-mail" to="mailto:auction@gmail.com">
          auction@gmail.com
        </Link>
      </div>
    </footer>
  );
};
