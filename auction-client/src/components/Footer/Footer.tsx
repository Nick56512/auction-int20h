import './Footer.scss';

import emailIcon from '../../images/icons/email-icon.svg';
import twitterIcon from '../../images/icons/twitter-icon.svg';
import instIcon from '../../images/icons/inst-icon.svg';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="fotter__menu">
        <div className="footer__menu-items">
          <h5 className="footer__menu-title">Про Добрі справи</h5>
          <a className="footer__menu-link" href="/">Умови співпраці</a>
          <a className="footer__menu-link" href="/">Партнерство</a>
          <a className="footer__menu-link" href="/">Пресс матеріали</a>
        </div>
        <div className="footer__menu-items">
          <h5 className="footer__menu-title">Придбати</h5>
          <a className="footer__menu-link" href="/">Як придбати?</a>
          <a className="footer__menu-link" href="/">Поради покупцям</a>
          <a className="footer__menu-link" href="/">Умови купівлі</a>
        </div>
        <div className="footer__menu-items">
          <h5 className="footer__menu-title">Продати</h5>
          <a className="footer__menu-link" href="/">Як продати?</a>
          <a className="footer__menu-link" href="/">Поради продавцям</a>
          <a className="footer__menu-link" href="/">Умови продажів</a>
        </div>
        <div className="footer__menu-items">
          <h5 className="footer__menu-title">Мій акаунт</h5>
          <a className="footer__menu-link" href="/">Вхід в акаунт</a>
          <a className="footer__menu-link" href="/">Реєстрація</a>
          <a className="footer__menu-link" href="/">Обрані лоти</a>
        </div>
      </div>
      <div className="footer__contacts">
        <div className="footer__contacts-soc">
          <a href="mailto:auction@gmail.com" target="_blank" rel="noopener noreferrer"> <img src={emailIcon} alt="Email link" /></a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><img src={twitterIcon} alt="Twitter link" /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src={instIcon} alt="Instagram link" /></a>
        </div>
        <a className="footer__contacts-mail" href="mailto:auction@gmail.com">auction@gmail.com</a>
      </div>
    </footer>
  );
};