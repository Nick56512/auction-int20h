import "./Footer.scss";
import { Link } from "react-router-dom";

import emailIcon from "../../images/icons/email-icon.svg";
import twitterIcon from "../../images/icons/twitter-icon.svg";
import instIcon from "../../images/icons/inst-icon.svg";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="fotter__menu">
        <div className="footer__menu-items">
          <h5 className="footer__menu-title">Про Добрі справи</h5>
          <Link className="footer__menu-link" to="#">
            Умови співпраці
          </Link>

          <Link className="footer__menu-link" to="#">
            Партнерство
          </Link>
          <Link className="footer__menu-link" to="#">
            Пресс матеріали
          </Link>
        </div>
        <div className="footer__menu-items">
          <h5 className="footer__menu-title">Придбати</h5>
          <Link className="footer__menu-link" to="#">
            Як придбати?
          </Link>
          <Link className="footer__menu-link" to="#">
            Поради покупцям
          </Link>
          <Link className="footer__menu-link" to="#">
            Умови купівлі
          </Link>
        </div>
        <div className="footer__menu-items">
          <h5 className="footer__menu-title">Продати</h5>
          <Link className="footer__menu-link" to="#">
            Як продати?
          </Link>
          <Link className="footer__menu-link" to="#">
            Поради продавцям
          </Link>
          <Link className="footer__menu-link" to="#">
            Умови продажів
          </Link>
        </div>
        <div className="footer__menu-items">
          <h5 className="footer__menu-title">Мій акаунт</h5>
          <Link className="footer__menu-link" to="#">
            Вхід в акаунт
          </Link>
          <Link className="footer__menu-link" to="#">
            Реєстрація
          </Link>
          <Link className="footer__menu-link" to="#">
            Обрані лоти
          </Link>
        </div>
      </div>
      <div className="footer__contacts">
        <div className="footer__contacts-soc">
          <Link
            to="mailto:auction@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src={emailIcon} alt="Email link" />
          </Link>
          <Link
            to="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitterIcon} alt="Twitter link" />
          </Link>
          <Link
            to="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instIcon} alt="Instagram link" />
          </Link>
        </div>
        <Link className="footer__contacts-mail" to="mailto:auction@gmail.com">
          auction@gmail.com
        </Link>
      </div>
    </footer>
  );
};
