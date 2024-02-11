import { BreadCrumb } from "src/components/BreadCrumb";
import { SearchResults } from "src/components/SearchResults";

export const SearchResultsPage: React.FC = () => {
  return (
    <>
      <BreadCrumb name="Результати пошуку" />
      <SearchResults />
    </>
  );
};
