import initialState from "./initialState";

const rootReducer = (state = initialState, action) => {
  if (action.type === "login") {
    return { ...state, loggedIn: true };
  }
  return state;
};

export default rootReducer;
