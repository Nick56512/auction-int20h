import "./LotsPack.scss";
import { Lot } from "../Lot";
import { Link } from "react-router-dom";

import arrowLeftUp from "../../images/icons/arrow-up.svg";
import setLotImg from "../../images/img/set-lot.png";
import billLotImg from "../../images/img/bill-lot.png";
import bookLotImg from "../../images/img/book-lot.png";
import postcardLotImg from "../../images/img/postcard-lot.png";

interface Props {
  title: string;
  className: string;
}

export const LotsPack: React.FC<Props> = ({ title, className }) => {
  return (
    <section>
      <div className={className ? className : "pack__header"}>
        <h2 className="pack__title">{title}</h2>
        <Link to="#">
          <img className="pack__btn" src={arrowLeftUp} alt="" />
        </Link>
      </div>
      <div className="lots-pack">
        <Lot title="Ексклюзивний набір: Дари добро..." imageSrc={setLotImg} />
        {/* Не знаю як поробити ці ... в кінці */}
        <Lot
          title="Пам'ятна банкнота &quot;Пам'ятаємо! Не п..."
          imageSrc={billLotImg}
        />
        <Lot title="Літературна скарбниця: Книжк..." imageSrc={bookLotImg} />
        <Lot
          title="Листівки любові для допомоги дітя... "
          imageSrc={postcardLotImg}
        />
      </div>
    </section>
  );
};
