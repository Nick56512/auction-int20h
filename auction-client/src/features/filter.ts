import { Category } from "../types/Category";

type SetQueryAction = { type: "filter/SET_QUERY"; payload: string };
type SetCategoryAction = { type: "filter/SET_STATUS"; payload: Category };
type RemoveQueryAction = { type: "filter/REMOVE_QUERY" };

const setQuery = (query: string): SetQueryAction => ({
  type: "filter/SET_QUERY",
  payload: query,
});

const setCategory = (category: Category): SetCategoryAction => ({
  type: "filter/SET_STATUS",
  payload: category,
});

const removeQuery = (): RemoveQueryAction => ({ type: "filter/REMOVE_QUERY" });

export const actions = { setQuery, setCategory, removeQuery };

type Action = SetQueryAction | SetCategoryAction | RemoveQueryAction;

type Filter = {
  query: string;
  category: Category;
};

const startFilterOptions: Filter = {
  query: "",
  category: "Усі категорії",
};

const filterReducer = (state: Filter = startFilterOptions, action: Action) => {
  switch (action.type) {
    case "filter/SET_QUERY":
      return { ...state, query: action.payload };

    case "filter/SET_STATUS":
      return { ...state, category: action.payload };

    case "filter/REMOVE_QUERY":
      return { ...state, query: "" };

    default:
      return state;
  }
};

export default filterReducer;
