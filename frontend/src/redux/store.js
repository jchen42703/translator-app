import { collapseReducer } from "./collapse.reducer";
import { createStore } from "redux";

const initialState = {
  collapsedIdxList: [],
};

const store = createStore(collapseReducer, initialState);

export default store;
