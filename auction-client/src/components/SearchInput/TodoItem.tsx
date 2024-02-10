import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { actions as currentTodoActions } from '../../features/currentTodo';
import { Todo } from '../../types/Todo';

type Props = {
  todo: Todo;
};

export const TodoItem: React.FC<Props> = ({ todo }) => {
  const dispatch = useAppDispatch();
  const currentTodo = useAppSelector(state => state.currentTodo);
  const isSelected = currentTodo?.id === todo.id;

  const setCurrentTodo = (curTodo: Todo) => (
    dispatch(currentTodoActions.setTodo(curTodo)));

    return (
      <>TodoItem</>
    )
};

