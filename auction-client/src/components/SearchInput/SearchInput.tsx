import { Link } from "react-router-dom";
import "./SearchInput.scss";
import arrowRight from "../../images/icons/arrow-right.svg";
import close from "../../images/icons/close.svg";
import React, { useMemo, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { actions as filterActions } from "../../features/filter";

export const SearchInput: React.FC = () => {
  const { query, category } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();
  const setQuery = (curQuery: string) =>
    dispatch(filterActions.setQuery(curQuery));

  const removeQuery = () => dispatch(filterActions.removeQuery());

  const [open, setOpen] = useState(false);
  const lots = useAppSelector((state) => state.lots);

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
    <div className="input-wrapper">
      <input
        className="search-input"
        type="text"
        placeholder="Я шукаю бренд, модель, товар..."
        value={query}
        onChange={(event) => {
          setQuery(event.target.value);
          setOpen(true);
        }}
      />
      {query.length > 0 && open ? (
        <>
          <div className="search-results-wrapper">
            <ul className="search-results">
              {!filteredLots.length ? (
                <li className="search-result">
                  Не знайдено жодного лоту, що відповідає заданим критеріям
                </li>
              ) : (
                <>
                  {filteredLots.slice(0, 4).map((lot) => (
                    <li className="search-result" key={lot.id}>
                      <Link
                        to={`/lots/${lot.id}`}
                        onClick={() => {
                          removeQuery();
                          setOpen(false);
                        }}
                      >
                        {lot.title}
                      </Link>
                    </li>
                  ))}
                  <li className="search-result">
                    <Link
                      to="/search"
                      className="link-to-search-result"
                      onClick={() => setOpen(false)}
                    >
                      Дивитися всі результати
                      <img src={arrowRight} alt="arrow right icon" />
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </>
      ) : (
        ""
      )}
      {query.length > 0 ? (
        <button
          className="delete-query"
          onClick={() => {
            setOpen(false);
            removeQuery();
          }}
        >
          <img src={close} alt="close icon" />
        </button>
      ) : (
        ""
      )}
    </div>
  );
};
