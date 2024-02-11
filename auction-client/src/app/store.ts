import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import currentLotReducer from "../features/currentLot";
import filterReducer from "../features/filter";
import lotsReducer from "../features/lots";

const rootReducer = combineReducers({
  currentLot: currentLotReducer,
  filter: filterReducer,
  lots: lotsReducer,
});

// The `store` is passed to the Provider in `/src/index.tsx`
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
