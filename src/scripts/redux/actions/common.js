// here we respond to an action from the UI, process, and dispatch results to handled in reducer
import ActionTypes from "./actionTypes";

const ID = function() {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return (
    "_" +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
};

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

export function addPlayer(data, cb) {
  return function(dispatch, state) {
    data.id = ID();

    const countryData = state().common.countries.find(
      country => data.country === country.name
    );
    data.emoji = countryData.emoji;
    dispatch({
      type: ActionTypes.PLAYER_ADD,
      payload: data
    });
    if (typeof cb === "function") {
      cb();
    }
    return;
  };
}
