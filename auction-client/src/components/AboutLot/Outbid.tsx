import { Button } from "../Button";
import close from "../../images/icons/close.svg";
import classNames from "classnames";
import { useState } from "react";

import hammer from "../../images/icons/hammer.svg";
import { Dropdown } from "../AddLot/Dropdown";
import { currencies } from "src/utils/mockData";

interface Props {
  closeOutbidFn: () => void;
  openOutbid: boolean;
}

export const Outbid: React.FC<Props> = ({ openOutbid, closeOutbidFn }) => {
  const [bidPrice, setBidPrice] = useState<number | string>("");
  const [currency, setCurrency] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setBidPrice("");
    setCurrency("");
  }

  return (
    <div className={classNames("outbid-wrapper", { open: openOutbid })}>
      <div className="outbid-background"></div>
      <div className="outbid">
        <h2>Перебити ставку</h2>
        <Button
          className="burger-btn outbid__close-btn"
          onClick={closeOutbidFn}
        >
          <img src={close} alt="close icon" />
        </Button>

        <form className="login__form" method="post" onSubmit={onSubmit}>
          <label className="input-label">
            Ставка*
            <input
              type="number"
              className="input"
              name="bid-new-price"
              required
              placeholder="Введіть ставку"
              value={bidPrice}
              onChange={(event) => setBidPrice(+event.target.value)}
            />
          </label>
          <div className="name-label">
            Валюта*
            <Dropdown
              items={currencies}
              itemName="валюту"
              className="dropdown-form"
              selected={currency}
              setSelected={setCurrency}
            />
          </div>

          <Button type="submit" className="main-button">
            Перебити
            <img src={hammer} alt="hammer icon" />
          </Button>
        </form>
      </div>
    </div>
  );
};
