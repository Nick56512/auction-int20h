import React, { useMemo } from "react";
import { useAppSelector } from "../../app/hooks";
import { TodoItem } from "../SearchInput/TodoItem";

import "./SearchResults.scss";

export const SearchResults: React.FC = () => {
  const todos = useAppSelector((state) => state.todos);
  const { query, category } = useAppSelector((state) => state.filter);

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      const includesQuery = todo.title
        .toLocaleLowerCase()
        .includes(query.toLocaleLowerCase());

      switch (category) {
        case "Усі категорії":
        default:
          return includesQuery;

        // default:
        //   return todo.category === category && includesQuery;
      }
    });
  }, [category, query, todos]);

  return (
    <section>
      <div className="search__results">
        <h2 className="search__results-title">Результати пошуку</h2>
      </div>
      {!filteredTodos.length ? (
        <p className="search__no-results">
          Не знайдено жодного лоту, що відповідає заданим критеріям
        </p>
      ) : (
        <div className="lots-pack">
          {filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      )}
    </section>
  );
};
