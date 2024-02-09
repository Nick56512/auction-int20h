import "./Lot.scss";
import { Button } from "../Button";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  imageSrc: string;
}

export const Lot: React.FC<Props> = ({ title, imageSrc }) => {
  return (
    <div className="lot">
      <div className="lot__galery">
        <img className="lot__galery-img" src={imageSrc} alt="lot" />
        <Button className="fav-icon-button  lot__galery-fav-icon"></Button>
      </div>
      <div className="lot__description">
        <p className="lot-id">012536050</p>
        {/* <a className="lot-title" to="#">
          <h3>{title}</h3>
        </Link> */}
        <Link className="lot-title" to="#"><h3>{title}</h3></Link>
        <p className="lot-price">1258,00 грн</p>
        <div className="lot-info">
          <p>32 ставки</p>
          <time>06.02.2024 18:47</time>
        </div>
      </div>
    </div>
  );
};
