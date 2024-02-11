import "./AddLot.scss";
import { Link } from "react-router-dom";
import { Button } from "src/components/Button";

import cameraIcon from "../../images/icons/camera-icon.svg";
import arrowLeftUp from "../../images/icons/arrow-left-up.svg";
import { Dropdown } from "./Dropdown";
import { categories, currencies } from "src/utils/mockData";
import { useState } from "react";

export const AddLot: React.FC = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [currency, setCurrency] = useState("");
  const [startPrice, setStartPrice] = useState<number | string>();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setName("");
    setCategory("");
    setDescription("");
    setCurrency("");
    setStartPrice("");
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="lot-description">
        <h4>Опишіть лот</h4>
        <label className="name-label">
          Вкажіть назву*
          <input
            type="text"
            name="lot-name"
            placeholder="Наприклад, листівка подарункова “День Незалежності”"
            className="name-input"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <div className="name-label">
          Категорія*
          <Dropdown
            items={categories}
            itemName="категорію"
            className="dropdown-form"
            selected={category}
            setSelected={setCategory}
          />
        </div>
      </div>
      <div className="lot-description">
        <h4>Додайте фото</h4>
        <label className="name-label">
          Перше фото буде на обкладинці оголошення. Перетягніть, щоб змінити
          порядок фото
        </label>
        <div className="photo-container">
          <div className="photo-block">
            <Link to={""}>Додати фото</Link>
          </div>
          <div className="photo-block">
            <img src={cameraIcon} alt="" />
          </div>
          <div className="photo-block desktop">
            <img src={cameraIcon} alt="" />
          </div>
          <div className="photo-block desktop">
            <img src={cameraIcon} alt="" />
          </div>
        </div>
      </div>
      <div className="lot-description">
        <h4>Додайте опис</h4>
        <textarea
          className="textarea-name"
          name="description"
          placeholder="Додайте усю необхідну інформацію про лот"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>
      </div>
      <div className="lot-description">
        <h4>Стартова ціна</h4>
        <label className="name-label">
          Вкажіть стартову ціну лоту*
          <input
            type="number"
            placeholder="100"
            className="name-input"
            value={startPrice}
            onChange={(event) => setStartPrice(+event.target.value)}
            required
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
      </div>
      <Button className="main-button lot-add-btn" type="submit">
        Опублікувати лот
        <img src={arrowLeftUp} alt="arrow icon" />
      </Button>
    </form>
  );
};
