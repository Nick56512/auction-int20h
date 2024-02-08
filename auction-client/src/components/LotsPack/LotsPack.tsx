import './LotsPack.scss';
import { Lot } from '../Lot';

import arrowRight from '../../images/icons/arrow-right.svg';
import arrowLeft from '../../images/icons/arrow-left.svg'

interface Props {
  title: string;
}


export const LotsPack: React.FC<Props> = ({ title }) => {
  return (
    <section>
      <div className="pack__header">
        <h2 className="pack__title">{title}</h2>
        <div className="pack__nav-btn">
          <button><img src={arrowLeft} alt="" /></button>
          <button><img src={arrowRight} alt="" /></button>
        </div>
      </div>
      <div className="lots-pack">
        <Lot title="Ексклюзивний набір: Дари доброти та надії" />
        <Lot title="Діамантова світлина - шлях до сяйва" />
        <Lot title="Літературна скарбниця: Книжки для добрих справ" />
        <Lot title="Листівки любові для допомоги дітям з Маріуполя " />
      </div>
    </section>
  );
};