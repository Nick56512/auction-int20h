import "./LotItem.scss";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import { Lot } from "src/types/Lot";

import setLotImg from "../../images/img/set-lot.png";
import billLotImg from "../../images/img/bill-lot.png";
import bookLotImg from "../../images/img/book-lot.png";
import postcardLotImg from "../../images/img/postcard-lot.png";

interface Props {
  lot: Lot;
}

export const LotItem: React.FC<Props> = ({ lot }) => {
  return (
    <article className="lot">
      <div className="lot__galery">
        <img className="lot__galery-img" src={setLotImg} alt="lot" />
        <Button className="fav-icon-button lot__galery-fav-icon"></Button>
      </div>
      <div className="lot__description">
        <Link className="lot-title" to={`/lots/${lot.id}`}>
          <h3>{lot.title}</h3>
        </Link>
        <p className="lot-price">
          {lot.startPrice} {lot.currencyName}
        </p>
        <div className="lot-info">
          <p>
            Категорія: <span className="lot-category">{lot.categoryName}</span>
          </p>
        </div>
        <div className="lot-info">
          <p>
            {lot.bids?.length ?? 0}{" "}
            {lot.bids?.length === 0
              ? "ставок"
              : lot.bids?.length === 1
                ? "ставка"
                : "ставки"}
          </p>
          <time>{lot.createdDate.toLocaleString()}</time>
        </div>
      </div>
    </article>
  );
};
