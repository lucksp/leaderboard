// here we respond to an action from the UI, process, and dispatch results to handled in reducer
import ActionTypes from "./actionTypes";

export function fetchCountries(url) {
  return function(dispatch, state) {
    return fetch(`/api/${url}`)
      .then(response => response.json())
      .then(data => {
        return dispatch({
          type: ActionTypes.GET_COUNTRIES,
          payload: data
        });
      });
  };
}
