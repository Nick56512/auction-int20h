import './Header.scss';
import { Button } from '../Button';

import favIcon from '../../images/icons/fav-icon.svg';
import accountIcon from '../../images/icons/account-icon.svg'

export const Header: React.FC = () => {
  return (
    <header className="header">
      <a href="/" className="header__logo-link">Добрі справи</a>
      <select className="header__select">
        <option value="">Усі категорої</option>
      </select>
      <input className="header__search-input" type="text" placeholder="Я шукаю бренд, модель, товар..." />
      <div className="header__nav">
        <a href="/"><img src={favIcon} alt="Favorite icon" /></a>
        <a href="/"><img src={accountIcon} alt="Account icon" /></a>
      </div>
      <Button>Додати лот</Button>
    </header>
  );
};
