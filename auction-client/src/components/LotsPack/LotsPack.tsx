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
  className?: string;
}

export const LotsPack: React.FC<Props> = ({ title, className }) => {

  // filtered lots

  return (
    <section>
      <div className={className ? className : "pack__header"}>
        <h2 className="pack__title">{title}</h2>
        <Link to="#">
          <img className="pack__btn" src={arrowLeftUp} alt="" />
        </Link>
      </div>
      <div className="lots-pack">
        <Lot
          title="Ексклюзивний набір: Дари доброти та надії"
          imageSrc={setLotImg}
        />
        <Lot
          title="Пам'ятна банкнота &quot;Пам'ятаємо! Не пробачимо!&quot;"
          imageSrc={billLotImg}
        />
        <Lot
          title="Літературна скарбниця: Книжки для добрих справ"
          imageSrc={bookLotImg}
        />
        <Lot
          title="Листівки любові для допомоги дітям з Маріуполя"
          imageSrc={postcardLotImg}
        />
      </div>
    </section>
  );
};
