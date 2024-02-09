import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { LotPage } from "./pages/LotPage";
import { AddLotPage } from "./pages/AddLotPage";
import { SearchResultsPage } from "./pages/SearchResultsPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Footer } from "./components/Footer";

export const App: React.FC = () => {
  return (
    <div className="App">
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
    </div>
  );
};
