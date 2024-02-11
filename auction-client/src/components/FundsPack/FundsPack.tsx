import "../CategoryPack/CategoryPack.scss";

import prytulaFund from "../../images/img/prytula-fund.png";
import backAliveFund from "../../images/img/back-alive-fund.png";
import redCrossFund from "../../images/img/red-cross-fund.png";
import tabletochkiFund from "../../images/img/tabletochki-fund.png";
import youngDonorsFund from "../../images/img/young-donors-fund.png";
import caritasFund from "../../images/img/caritas-fund.png";
import hopeShelterFund from "../../images/img/hope-shelter-fund.png";
import heroesChildrenFund from "../../images/img/heroes-children-fund.png";
import { Button } from "../Button";

interface Props {
  title: string;
}

export const FundsPack: React.FC<Props> = ({ title }) => {
  return (
    <section>
      <div className="pack__header">
        <h2 className="pack__title">{title}</h2>
      </div>
      <div className="category-pack">
        <Button className="secondary-button category" role="link" to="#">
          <img src={prytulaFund} alt={title} className="category__image img" />
        </Button>
        <Button className="secondary-button category" role="link" to="#">
          <img
            src={backAliveFund}
            alt={title}
            className="category__image img"
          />
        </Button>
        <Button className="secondary-button category" role="link" to="#">
          <img src={redCrossFund} alt={title} className="category__image img" />
        </Button>
        <Button className="secondary-button category" role="link" to="#">
          <img
            src={tabletochkiFund}
            alt={title}
            className="category__image img"
          />
        </Button>
        <Button className="secondary-button category" role="link" to="#">
          <img
            src={youngDonorsFund}
            alt={title}
            className="category__image img"
          />
        </Button>
        <Button className="secondary-button category" role="link" to="#">
          <img src={caritasFund} alt={title} className="category__image img" />
        </Button>
        <Button className="secondary-button category" role="link" to="#">
          <img
            src={hopeShelterFund}
            alt={title}
            className="category__image img"
          />
        </Button>
        <Button className="secondary-button category" role="link" to="#">
          <img
            src={heroesChildrenFund}
            alt={title}
            className="category__image img"
          />
        </Button>
      </div>
    </section>
  );
};
