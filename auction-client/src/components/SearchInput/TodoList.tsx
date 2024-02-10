import React, { useMemo } from 'react';
import { useAppSelector } from '../../app/hooks';
import { TodoItem } from './TodoItem';

export const TodoList: React.FC = () => {

const todos = useAppSelector(state => state.todos);
const { query, status } = useAppSelector(state => state.filter);

const filteredTodos = useMemo(() => {
  return todos.filter(todo => {
    const includesQuery = todo.title.toLocaleLowerCase()
      .includes(query.toLocaleLowerCase());

    switch (status) {
      case 'active':
        return !todo.completed && includesQuery;

      case 'completed':
        return todo.completed && includesQuery;

      case 'all':
      default:
        return includesQuery;
    }
  });
}, [status, query, todos]);

return (
  <>{filteredTodos}</>
)

// {filteredTodos.map(todo => (
//   <TodoItem key={todo.id} todo={todo} />
// ))}
}
