import "./LotsPack.scss";
import { LotItem } from "../LotItem";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";

import arrowLeftUp from "../../images/icons/arrow-up.svg";

interface Props {
  title: string;
}

export const LotsPack: React.FC<Props> = ({ title }) => {
  const lots = useAppSelector((state) => state.lots);

  return (
    <section>
      <div className="pack__header">
        <h2 className="pack__title">{title}</h2>
        <Link to="#">
          <img className="pack__btn" src={arrowLeftUp} alt="" />
        </Link>
      </div>
      <div className="lots-pack">
        {lots.slice(0, 4).map((lot) => (
          <LotItem key={lot.id} lot={lot} />
        ))}
      </div>
    </section>
  );
};
