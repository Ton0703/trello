import * as TYPES from "../types";

const initialState = {
  name: "",
  password: "",
};

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPES.GET_POST:
      return { ...state, name: "post" };
    default:
      return state;
  }
}
