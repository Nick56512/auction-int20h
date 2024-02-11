import { useState } from "react";
import { client } from "src/utils/fetchClient";
import { Button } from "../Button";
import close from "../../images/icons/close.svg";
import { Link } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_BASE_URL;

interface Props {
  closeLoginFn: () => void;
  setRegistration: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Registartion: React.FC<Props> = ({
  closeLoginFn,
  setRegistration,
}) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      setLoading(true);
      const result: any = await client.post(`${BASE_URL}/accounts/register`, {
        login,
        password,
        userName,
      });

      if (result._id) {
        localStorage.setItem("userId", result._id);
        setLogin("");
        setPassword("");
        setUserName("");
        closeLoginFn();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login">
      <h2>Реєстрація</h2>
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
          Ім'я користувача*
          <input
            type="text"
            className="input"
            name="userName"
            required
            placeholder="Введіть ім'я користувача"
            autoComplete="username"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
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
          {loading ? "Завантаження..." : "Зареєструватися"}
        </Button>
        <p className="info-text">
          Під час входу ви погоджуєтесь з нашими
          <br />
          <Link to="#">Умовами використання</Link>
        </p>
      </form>
      <div className="info-text">
        <p>Маєте акаунта?</p>
        <Button
          className="secondary-button"
          onClick={() => setRegistration(false)}
        >
          Логін
        </Button>
      </div>
    </div>
  );
};
