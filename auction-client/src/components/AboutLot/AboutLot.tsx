import "./AboutLot.scss";

import { Button } from "src/components/Button";
import { Link } from "react-router-dom";

import shareIcon from "../../images/icons/share-icon.svg";
import favIcon from "../../images/icons/fav-icon.svg";
import calendarIcon from "../../images/icons/calendar-icon.svg";
import fundIcon from "../../images/icons/fund-icon.svg";
import hammer from "../../images/icons/hammer.svg";
import billLot from "../../images/img/bill-lot-big.png";
import billLot1 from "../../images/img/bill-lot-small1.png";
import billLot2 from "../../images/img/bill-lot-small2.png";
import authorPhoto from "../../images/img/author-photo.png";
import { useState } from "react";
import { Lot } from "src/types/Lot";
import { User } from "src/types/User";

interface Props {
  lot: Lot | null;
  user: User | null;
}

export const AboutLot: React.FC<Props> = ({ lot, user }) => {
  const defaultBtnText = "Поділитися";
  const [btnText, setBtnText] = useState(defaultBtnText);

  function changeBtnText(text: string) {
    setBtnText(text);
    setTimeout(() => {
      setBtnText(defaultBtnText);
    }, 5000);
  }

  async function copyContent() {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => changeBtnText("Скопійовано"))
      .catch((e) => console.error(e));
  }

  const bids =
    lot?.bids.sort(
      (bid1, bid2) => bid2.createdDate.getTime() - bid1.createdDate.getTime(),
    ) ?? [];

  if (lot) {
    return (
      <>
        <div className="lot-page__header">
          <h3 className="lot-page__header-title">{lot.title}</h3>
          <p className="lot-page__header-title">
            {lot.startPrice} {lot.currencyName}
          </p>
        </div>
        <div className="lot-page__info-container">
          <div className="lot-page__info">
            <p className="lot-page__info-text">
              <img src={calendarIcon} alt="Calendar" /> Опубліковано{" "}
              {lot.createdDate.toLocaleString()}
            </p>
            <p className="lot-page__info-text">
              <img src={fundIcon} alt="Fund" /> Благодійний фонд Сергія Притули
            </p>
          </div>
          <div className="lot-page__buttons">
            <Button className="secondary-button" onClick={copyContent}>
              {btnText}
              <img src={shareIcon} alt="Share" />
            </Button>
            <Button className="secondary-button">
              Зберегти
              <img src={favIcon} alt="Save" />
            </Button>
          </div>
        </div>
        <div className="lot-page__galery">
          <img src={billLot} alt="Bill" />
          <div className="lot-page__galery-small">
            <img src={billLot1} alt="Bill" />
            <img src={billLot2} alt="Bill" />
          </div>
        </div>
        <div className="lot-page__description">
          <div className="lot-page__about-author">
            <div className="about-author__header">
              <div>
                <h4>Про продавця</h4>
                <div className="author-personality">
                  <img src={authorPhoto} alt="" />
                  <div className="author-name">
                    <p>{user?.userName ?? ""}</p>
                    <p className="autor-login">{user?.email ?? ""}</p>
                  </div>
                </div>
                <div className="author-info">
                  <p>Зареєстрований 12.12.2023 22:46 </p>
                  <p>Остання активність 06.02.2024 12:05</p>
                </div>
              </div>
              <Link to={""}>Усі лоти</Link>
            </div>
          </div>
          <div className="lot-page__about-lot">
            <p>{lot.description}</p>
          </div>
        </div>
        <div className="lot-page__bids">
          <h4>Ставки</h4>
          <div className="bids__table-overflow">
            <table className="bids__table">
              <thead>
                <tr>
                  <th>№</th>
                  <th>Користувач</th>
                  <th>Ставка</th>
                  <th>Дата</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {bids.map((bid, i) => (
                  <tr key={bid.id}>
                    <td>{bids.length - i}</td>
                    <td>{bid.userName}</td>
                    <td>
                      {bid.totalPrice} {bid.currencyName}
                    </td>
                    <td>{bid.createdDate.toLocaleString()}</td>
                    <td>
                      {i === 0 && (
                        <Button className="main-button">
                          Перебити
                          <img src={hammer} alt="" />
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td>Старт</td>
                  <td>{user?.userName}</td>
                  <td>
                    {lot.startPrice} {lot.currencyName}
                  </td>
                  <td>{lot.createdDate.toLocaleString()}</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="lot-page__header">
      <h3 className="lot-page__header-title">Лоту не знайдено</h3>
    </div>
  );
};
