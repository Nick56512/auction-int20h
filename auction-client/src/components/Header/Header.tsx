import './Header.scss';
import {Buttons} from '../Buttons';
// import searchIcon from '../../images/icons/';
// import searchIcon from './search-icon.png';


export const Header: React.FC = () => {
  return (
    <header className="header">
      <a href="/" className="header__logo-link">Добрі справи</a>
      <select className="header__select">
        <option value="">Усі категорої</option>
      </select>
      <form className="header__search-container">
        <button className="header__search-btn" type="submit"><img src="" alt="" /></button>
        <input className="header__search-input" type="text" placeholder="Я шукаю бренд, модель, товар..." />
      </form>
      <div className="header__nav">
        <a href="/"><img src="" alt="" /></a>
        <a href="/"><img src="" alt="" /></a>
      </div>
      <Buttons/>
    </header>
  );
};
