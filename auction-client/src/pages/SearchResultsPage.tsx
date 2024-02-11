import { useEffect } from "react";
import { BreadCrumb } from "src/components/BreadCrumb";
import { SearchResults } from "src/components/SearchResults";

export const SearchResultsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <BreadCrumb name="Результати пошуку" />
      <SearchResults />
    </>
  );
};
