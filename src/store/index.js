import { createStore } from "redux";

const userReducer = (state = { id: 0 }, action) => {
  switch (action.type) {
    case "SETID":
      return {
        ...state,
        id: action.payload,
      };
    default:
      return state;
  }
};
const store = createStore(userReducer);
export default store;
