import * as actionTypes from "../actions/actionTypes";
import { initialState } from "../initialState";

export default function reducer(state = initialState.title, action) {
  debugger;
  switch (action.type) {
    case actionTypes.TITLE:
      return "Sample Title";
    default:
      return state;
  }
}
