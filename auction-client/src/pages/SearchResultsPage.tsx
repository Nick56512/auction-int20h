import { Link } from "react-router-dom";
import { LotsPack } from "src/components/LotsPack";

export const SearchResultsPage: React.FC = () => {
  return (
    <>
      {/* посилання щоб перейти*/}
      <Link to="/">HomePage</Link>
      <br />
      <Link to="/lot">LotPage</Link>
      <LotsPack title="Результати пошуку" className="pack__header__results-mode" />
      <LotsPack title="Результати пошуку" className="pack__header__display-none" />
      <LotsPack title="Результати пошуку" className="pack__header__display-none" />
      {/* треба додати пагінацію */}
    </>
  );
};
