import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { LotPage } from "./pages/LotPage";
import { AddLotPage } from "./pages/AddLotPage";
import { SearchResultsPage } from "./pages/SearchResultsPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Footer } from "./components/Footer";

import { useAppDispatch, useAppSelector } from "./app/hooks";
import { getLots } from "./api";
import { Lot } from "./types/Lot";
import { actions as lotsActions } from "./features/lots";
import { useEffect, useState } from "react";
import { lots } from "./utils/mockData";

export const App: React.FC = () => {
  // const currentLot = useAppSelector(state => state.currentLot);
  const dispatch = useAppDispatch();
  const setLots = (lots: Lot[]) => dispatch(lotsActions.setLots(lots));

  useEffect(() => {
    void getLots().then((data) => {
      setLots(data ?? []);
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
