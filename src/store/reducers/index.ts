import { combineReducers } from "redux";
import { getDataReducer } from "./data";
import isLoading from "./isLoading";

const rootReducer = combineReducers({
  getDataReducer,
  isLoading,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
