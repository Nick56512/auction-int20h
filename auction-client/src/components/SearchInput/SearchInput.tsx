import { Link } from "react-router-dom";
import "./SearchInput.scss";
import arrowRight from "../../images/icons/arrow-right.svg";
import close from "../../images/icons/close.svg";
import React, { useState } from "react";
import classNames from "classnames";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { actions as filterActions } from "../../features/filter";
import { Status } from "../../types/Status";

export const SearchInput: React.FC = () => {
  // const [query, setQuery] = useState("");
  // const [status, setStatus] = useState("all");

  const { query, status } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();
  const setQuery = (curQuery: string) =>
    dispatch(filterActions.setQuery(curQuery));
  const setStatus = (curStatus: Status) =>
    dispatch(filterActions.setStatus(curStatus));
  const removeQuery = () => dispatch(filterActions.removeQuery());

  return (
    <div className="input-wrapper">
      <input
        className="search-input"
        type="text"
        placeholder="Я шукаю бренд, модель, товар..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <div
        className={classNames("search-results-wrapper", { open: query.length })}
      >
        <ul className="search-results">
          <li className="search-result">
            <Link to="#">Листівка благодійна Три ведмеді</Link>
          </li>
          <li className="search-result">
            <Link to="#" className="link-to-search-result">
              Листівка благодійна Три ведмеді
            </Link>
          </li>
          <li className="search-result">
            <Link to="#" className="link-to-search-result">
              Дивитися всі результати
              <img src={arrowRight} alt="arrow right icon" />
            </Link>
          </li>
        </ul>
      </div>
      <button
        className={classNames("delete-query", { show: query.length })}
        onClick={() => removeQuery()}
      >
        <img src={close} alt="close icon" />
      </button>
    </div>
  );
};
