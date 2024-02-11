import { Link } from "react-router-dom";
import { Button } from "../Button";
import close from "../../images/icons/close.svg";
import "./LogIn.scss";
import classNames from "classnames";

interface Props {
  openLogin: boolean;
  closeLoginFn: () => void;
}

export const LogIn: React.FC<Props> = ({ openLogin, closeLoginFn }) => {
  return (
    <section className={classNames("login-wrapper", { open: openLogin })}>
      <div className="login-background" onClick={closeLoginFn}></div>
      <div className="login">
        <h2>Вхід в акаунт</h2>
        <Button className="burger-btn login__close-btn" onClick={closeLoginFn}>
          <img src={close} alt="close icon" />
        </Button>
        <form className="login__form">
          <label className="input-label">
            Електронна пошта*
            <input
              type="email"
              className="input"
              name="email"
              required
              placeholder="name@email.com"
              autoComplete="username"
            />
          </label>
          <label className="input-label">
            Пароль*
            <input
              type="password"
              className="input"
              name="password"
              required
              placeholder="********"
              autoComplete="current-password"
            />
          </label>
          <Button type="submit" className="main-button">
            Увійти
          </Button>
          <p className="info-text">
            Під час входу ви погоджуєтесь з нашими
            <br />
            <Link to="#">Умовами використання</Link>
          </p>
        </form>
      </div>
    </section>
  );
};
