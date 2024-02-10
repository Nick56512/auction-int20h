import "../CategoryPack/CategoryPack.scss";

import { Category } from "../Category";

import prytulaFund from "../../images/img/prytula-fund.png";
import backAliveFund from "../../images/img/back-alive-fund.png";
import redCrossFund from "../../images/img/red-cross-fund.png";
import tabletochkiFund from "../../images/img/tabletochki-fund.png";
import youngDonorsFund from "../../images/img/young-donors-fund.png";
import caritasFund from "../../images/img/caritas-fund.png";
import hopeShelterFund from "../../images/img/hope-shelter-fund.png";
import heroesChildrenFund from "../../images/img/heroes-children-fund.png";


interface Props {
  title: string;
}

export const FundsPack: React.FC<Props> = ({ title }) => {
  return (
    <section>
      <div className="pack__header">
        <h2 className="pack__title">{title}</h2>
        <div className="pack__nav-btn">
          {/* <Button className="icon-button arrow-left"></Button>
          <Button className="icon-button arrow-right"></Button> */}
        </div>
      </div>
      <div className="category-pack">
        <Category title="" imageSrc={prytulaFund} />
        <Category title="" imageSrc={backAliveFund} />
        <Category title="" imageSrc={redCrossFund} />
        <Category title="" imageSrc={tabletochkiFund} />
        <Category title="" imageSrc={youngDonorsFund} />
        <Category title="" imageSrc={caritasFund} />
        <Category title="" imageSrc={hopeShelterFund} />
        <Category title="" imageSrc={heroesChildrenFund} />
      </div>
    </section>
  );
};
