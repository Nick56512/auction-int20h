import { BreadCrumb } from "src/components/BreadCrumb";
import { LotsPack } from "src/components/LotsPack";

export const SearchResultsPage: React.FC = () => {
  return (
    <>
      <BreadCrumb name="Результати пошуку" />
      <LotsPack
        title="Результати пошуку"
        className="pack__header__results-mode"
      />
      <LotsPack
        title="Результати пошуку"
        className="pack__header__display-none"
      />
      <LotsPack
        title="Результати пошуку"
        className="pack__header__display-none"
      />
      {/* треба додати пагінацію */}
    </>
  );
};
