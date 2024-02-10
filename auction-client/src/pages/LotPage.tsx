import "./LotPage.scss";

import { Link, useParams } from "react-router-dom";
import { BredCrumb } from "src/components/BredCrumb";
import { Button } from "src/components/Button";
import { LotsPack } from "src/components/LotsPack";

import shareIcon from "../images/icons/share-icon.svg";
import favIcon from "../images/icons/fav-icon.svg";
import calendarIcon from "../images/icons/calendar-icon.svg";
import fundIcon from "../images/icons/fund-icon.svg";
import billLot from "../images/img/bill-lot-big.png";
import billLot1 from "../images/img/bill-lot-small1.png";
import billLot2 from "../images/img/bill-lot-small2.png";

export const LotPage: React.FC = () => {
  const { lotId } = useParams();

  return (
    <>
      <BredCrumb name="Пам'ятна банкнота &quot;Пам'ятаємо! Не пробачимо!&quot;" />
      <div className="lot-page__header">
        <h3 className="lot-page__header-title">
          Пам'ятна банкнота &quot;Пам'ятаємо! Не пробачимо!&quot;
        </h3>
        <p className="lot-page__header-title">150,00 грн</p>
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
          <Button className="secondary-button">
            Поділитися
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

      <LotsPack title="Вас можуть зацікавити " className="" />
    </>
  );
};
