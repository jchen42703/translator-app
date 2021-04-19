import { toTextReducer } from "./toText.reducer";
import { createStore } from "redux";

const initialState = {
  toText: "",
};

const store = createStore(toTextReducer, initialState);

export default store;
