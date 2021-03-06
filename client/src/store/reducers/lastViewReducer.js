import * as constants from "../constants";

const initialState = {
  lastView: [],
  error: ""
};

function lastViewReducer(state = initialState, action) {
  console.log("LAST_VIEW_REDUCER", state);
  switch (action.type) {
    case constants.ADD_TO_LAST_VIEW_SUCCESS:
      return { ...state, lastView: action.payload, error: "" };
    default:
      return state;
  }
}

export default lastViewReducer;
