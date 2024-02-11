import { Lot } from "../types/Lot";

type SetLotsAction = {
  type: "lots/SET";
  payload: Lot[];
};

const setLots = (lots: Lot[]): SetLotsAction => ({
  type: "lots/SET",
  payload: lots,
});

export const actions = { setLots };

type Action = SetLotsAction;

const lotsReducer = (state: Lot[] = [], action: Action): Lot[] => {
  switch (action.type) {
    case "lots/SET":
      return action.payload;

    default:
      return state;
  }
};

export default lotsReducer;
