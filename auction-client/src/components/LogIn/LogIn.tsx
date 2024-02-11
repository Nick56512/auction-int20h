import { Link } from "react-router-dom";
import { Button } from "../Button";
import close from "../../images/icons/close.svg";
import "./LogIn.scss";
import classNames from "classnames";
import { useState } from "react";
import { client } from "src/utils/fetchClient";

const BASE_URL = process.env.REACT_APP_BASE_URL;

interface Props {
  openLogin: boolean;
  closeLoginFn: () => void;
}

export const LogIn: React.FC<Props> = ({ openLogin, closeLoginFn }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      setLoading(true);
      const result: any = await client.post(`${BASE_URL}/user/login`, {login, password});

      if (result.token.length) {
        localStorage.setItem("loginToken", result.token);
        setLogin("");
        setPassword("");
        closeLoginFn();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className={classNames("login-wrapper", { open: openLogin })}>
      <div className="login-background" onClick={closeLoginFn}></div>
      <div className="login">
        <h2>Вхід в акаунт</h2>
        <Button className="burger-btn login__close-btn" onClick={closeLoginFn}>
          <img src={close} alt="close icon" />
        </Button>
        <form className="login__form" method="post" onSubmit={onSubmit}>
          <label className="input-label">
            Логін*
            <input
              type="text"
              className="input"
              name="login"
              required
              placeholder="Введіть логін"
              autoComplete="login"
              value={login}
              onChange={(event) => setLogin(event.target.value)}
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
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <Button type="submit" className="main-button">
            {loading ? ("Завантаження...") : ("Увійти")}
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
