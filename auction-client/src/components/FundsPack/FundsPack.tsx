import "../CategoryPack/CategoryPack.scss";

import { Category } from "../Category";

import prytula from "../../images/img/prytula-fund.png";

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
        <Category title="" imageSrc={prytula} />
        <Category title="" imageSrc={prytula} />
        <Category title="" imageSrc={prytula} />
        <Category title="" imageSrc={prytula} />
        <Category title="" imageSrc={prytula} />
        <Category title="" imageSrc={prytula} />
        <Category title="" imageSrc={prytula} />
        <Category title="" imageSrc={prytula} />
      </div>
    </section>
  );
};
