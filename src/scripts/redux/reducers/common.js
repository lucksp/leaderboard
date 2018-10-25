// here we respond to a dispatch from an action item, then we return updated state to UI
import ActionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
  countries: {},
  playerData: [
    // {
    //   name: "Phil",
    //   country: "Andorra",
    //   emoji: "🇦🇩",
    //   winnings: "1234",
    //   id: "_nl067xh98"
    // }
  ]
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
        playerData: [...state.playerData, action.payload]
      };
  }
  return state;
}
