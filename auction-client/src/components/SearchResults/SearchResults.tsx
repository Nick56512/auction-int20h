import React, { useMemo } from "react";
import { useAppSelector } from "../../app/hooks";

import "./SearchResults.scss";
import { LotItem } from "../LotItem";

export const SearchResults: React.FC = () => {
  const lots = useAppSelector((state) => state.lots);
  const { query, category } = useAppSelector((state) => state.filter);

  const filteredLots = useMemo(() => {
    return lots.filter((lot) => {
      const includesQuery = lot.title
        .toLocaleLowerCase()
        .includes(query.toLocaleLowerCase());

      switch (category) {
        case "Усі категорії":
          return includesQuery;

        default:
          return lot.categoryName === category && includesQuery;
      }
    });
  }, [category, query, lots]);

  return (
    <section>
      <div className="search__results">
        <h2 className="search__results-title">Результати пошуку</h2>
      </div>
      {!filteredLots.length ? (
        <p className="search__no-results">
          Не знайдено жодного лоту, що відповідає заданим критеріям
        </p>
      ) : (
        <div className="lots-pack">
          {filteredLots.map((lot) => (
            <LotItem key={lot._id} lot={lot} />
          ))}
        </div>
      )}
    </section>
  );
};
