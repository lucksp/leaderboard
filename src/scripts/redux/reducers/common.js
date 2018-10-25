// here we respond to a dispatch from an action item, then we return updated state to UI
import ActionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
  countries: {},
  playerData: {
    _nl067xh98: {
      name: "Phil",
      country: "Andorra",
      emoji: "🇦🇩",
      winnings: "1234",
      id: "_nl067xh98"
    }
  }
};

export default function data(state = state ? state : initialState, action) {
  switch (action.type) {
    case ActionTypes.GET_COUNTRIES:
      return {
        ...state,
        loading: false,
        countries: action.payload
      };
    case ActionTypes.PLAYER_ADD:
      return {
        ...state,
        playerData: {
          ...state.playerData,
          ...action.payload
        }
      };
    case ActionTypes.PLAYER_UPDATE_WINNINGS:
      let tempState = { ...state.playerData };
      const newValue =
        parseInt(tempState[action.payload.id].winnings) +
        parseInt(action.payload.value);

      tempState = {
        ...tempState,
        [action.payload.id]: {
          ...tempState[action.payload.id],
          winnings: newValue
        }
      };

      return {
        ...state,
        playerData: {
          ...state.playerData,
          ...tempState
        }
      };
  }
  return state;
}
