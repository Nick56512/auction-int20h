import "./LotPage.scss";

import { Link, useParams } from "react-router-dom";
import { BreadCrumb } from "src/components/BreadCrumb";
import { Button } from "src/components/Button";
import { LotsPack } from "src/components/LotsPack";

import shareIcon from "../images/icons/share-icon.svg";
import favIcon from "../images/icons/fav-icon.svg";
import calendarIcon from "../images/icons/calendar-icon.svg";
import fundIcon from "../images/icons/fund-icon.svg";
import hammer from "../images/icons/hammer.svg";
import billLot from "../images/img/bill-lot-big.png";
import billLot1 from "../images/img/bill-lot-small1.png";
import billLot2 from "../images/img/bill-lot-small2.png";
import authorPhoto from "../images/img/author-photo.png";
import { useState } from "react";

export const LotPage: React.FC = () => {
  const { lotId } = useParams();
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

  return (
    <>
      <BreadCrumb name="Пам'ятна банкнота &quot;Пам'ятаємо! Не пробачимо!&quot;" />
      <div className="lot-page__header">
        <h3 className="lot-page__header-title">
          Пам'ятна банкнота &quot;Пам'ятаємо! Не пробачимо!&quot;
        </h3>
        <p className="lot-page__header-title">150,00грн</p>
      </div>
      <div className="lot-page__info-container">
        <div className="lot-page__info">
          <p className="lot-page__info-text">
            <img src={calendarIcon} alt="Calendar" /> Опубліковано сьогодні
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
                  <p>Андрій Цимбалюк</p>
                  <p className="autor-login">@andriiits</p>
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
          <p>
            Зробіть крок до вишуканості та підтримайте благородну справу,
            придбавши "Діамантову Світлину". Нехай ваш дім або офіс засяє новим
            світлом від цього неповторного шедевру. Це не просто предмет для
            декорування простору, це шлях до втілення вашої власної естетичної
            мрії.
            <br />
            <br />
            Завдяки витонченому поєднанню сучасного дизайну та класичної
            елегантності, "Діамантова Світлина" створює неповторну атмосф...{" "}
            <Link className="more-btn" to={"#"}>
              Більше
            </Link>
          </p>
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
              <tr>
                <td>7</td>
                <td>@tarastaras</td>
                <td>150,00</td>
                <td>06.02.2024 12:05</td>
                <td>
                  <Button className="main-button">
                    Перебити
                    <img src={hammer} alt="" />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>@tarastaras</td>
                <td>150,00</td>
                <td>06.02.2024 12:05</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <LotsPack title="Вас можуть зацікавити " className="" />
    </>
  );
};
