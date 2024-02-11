import "./AddLotPage.scss";
import { Link } from "react-router-dom";
import { BreadCrumb } from "src/components/BreadCrumb";
import { Button } from "src/components/Button";

import cameraIcon from "../images/icons/camera-icon.svg";
import arrowLeftUp from "../images/icons/arrow-left-up.svg";

export const AddLotPage: React.FC = () => {
  return (
    <>
      <BreadCrumb name="Додати лот" />
      <div className="lot-description">
        <h4>Опишіть лот</h4>
        <label className="name-label">Вкажіть назву*</label>
        <input
          type="text"
          placeholder="Наприклад, листівка подарункова “День Незалежності”"
          className="name-input"
        />
        <label className="name-label">Категорія*</label>
        <label className="name-label">
          Оберіть благодійний фонд для підтримки*
        </label>
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
            <Link to={""}>
              <img src={cameraIcon} alt="" />
            </Link>
          </div>
          <div className="photo-block desktop">
            <Link to={""}>
              <img src={cameraIcon} alt="" />
            </Link>
          </div>
          <div className="photo-block desktop">
            <Link to={""}>
              <img src={cameraIcon} alt="" />
            </Link>
          </div>
        </div>
      </div>
      <div className="lot-description">
        <h4>Додайте опис</h4>
        <input
          type="text"
          placeholder="Додайте усю необхідну інформацію про лот"
          className="name-input"
        />
      </div>
      <div className="lot-description">
        <h4>Стартова ціна</h4>
        <label className="name-label">Вкажіть стартову ціну лоту*</label>
        <input type="text" placeholder="100 " className="name-input" />
        <label className="name-label">Валюта*</label>
      </div>
      <Button className="main-button lot-add-btn" role="link" to="/add-lot">
        Опублікувати лот
        <img src={arrowLeftUp} alt="arrow icon" />
      </Button>
    </>
  );
};
