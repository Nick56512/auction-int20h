import './Header.scss';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <a href="/" className="logo-link">Logo</a>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="/apple" className="nav__link is-active">apple</a>
          </li>
          <li className="nav__item">
            <a href="/samsung" className="nav__link">samsung</a>
          </li>
          <li className="nav__item">
            <a href="/phones" className="nav__link">smartphones</a>
          </li>
          <li className="nav__item">
            <a
              href="/laptops&computers"
              className="nav__link"
            >
              laptops & computers
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
