import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { actions as currentTodoActions } from "../../features/currentTodo";
import { Todo } from "../../types/Todo";
import { Button } from "../Button";

import "../Lot/Lot.scss";

import imageSrc from "../../images/img/set-lot.png";

type Props = {
  todo: Todo;
};

export const TodoItem: React.FC<Props> = ({ todo }) => {
  const dispatch = useAppDispatch();
  const currentTodo = useAppSelector((state) => state.currentTodo);
  const isSelected = currentTodo?.id === todo.id;

  const setCurrentTodo = (curTodo: Todo) =>
    dispatch(currentTodoActions.setTodo(curTodo));

  // do i need current todo

  return (
    <div className="lot">
      <div className="lot__galery">
        <img className="lot__galery-img" src={imageSrc} alt="lot" />
        <Button className="fav-icon-button lot__galery-fav-icon"></Button>
      </div>
      <div className="lot__description">
        <p className="lot-id">012536050</p>
        <Link className="lot-title" to="#">
          <h3>{todo.title}</h3>
        </Link>
        <p className="lot-price">1258,00 грн</p>
        <div className="lot-info">
          <p>32 ставки</p>
          <time>06.02.2024 18:47</time>
        </div>
      </div>
    </div>
  );
};
