import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { LotPage } from "./pages/LotPage";
import { AddLotPage } from "./pages/AddLotPage";
import { SearchResultsPage } from "./pages/SearchResultsPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Footer } from "./components/Footer";

import { useAppDispatch, useAppSelector } from "./app/hooks";
import { getTodos } from "./api";
import { Todo } from "./types/Todo";
import { actions as todosActions } from "./features/todos";
import { useEffect, useState } from "react";

export const App: React.FC = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const currentTodo = useAppSelector(state => state.currentTodo);
  const dispatch = useAppDispatch();

  const setTodos = (todos: Todo[]) => dispatch(todosActions.setTodos(todos));

  useEffect(() => {
    void getTodos().then((data) => {
      setTodos(data);
      // setIsLoading(false);
    });
  });

  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/lots/:lotId" element={<LotPage />} />
          <Route path="/add-lot" element={<AddLotPage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};
