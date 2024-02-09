import "./Lot.scss";

import lotImg from "../../images/img/lot-img.png";
import favIcon from "../../images/icons/fav-icon.svg";

interface Props {
  title: string;
}

export const Lot: React.FC<Props> = ({ title }) => {
  return (
    <div className="lot">
      <div className="lot__galery">
        <img className="lot__galery-img" src={lotImg} alt="lot" />
        <img className="lot__galery-fav-icon" src={favIcon} alt="" />
      </div>
      <p className="lot-id">012536050</p>
      <a className="lot-title" href="http://">
        <h3>{title}</h3>
      </a>
      <p className="lot-price">1258,00 грн</p>
      <div className="lot-info">
        <p>32 ставки</p>
        <time>06.02.2024 18:47</time>
      </div>
    </div>
  );
};
