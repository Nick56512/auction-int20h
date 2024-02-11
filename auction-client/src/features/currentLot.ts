import { Lot } from "../types/Lot";

// we use string literal as a type to avoid mistype in future
type RemoveLotAction = { type: "currentLot/REMOVE" };

// payload is a typical name for an action data
type SetLotAction = {
  type: "currentLot/SET";
  payload: Lot;
};

// Action creator return type protect us from a mistype
const removeLot = (): RemoveLotAction => ({ type: "currentLot/REMOVE" });

const setLot = (lot: Lot): SetLotAction => ({
  type: "currentLot/SET",
  payload: lot,
});

// These actions will be used in the application
export const actions = { setLot, removeLot };

type State = Lot | null;
type Action = SetLotAction | RemoveLotAction;

const currentLotReducer = (state: State = null, action: Action): State => {
  switch (action.type) {
    case "currentLot/SET":
      return action.payload;

    case "currentLot/REMOVE":
      return null;

    default:
      return state;
  }
};

export default currentLotReducer;
