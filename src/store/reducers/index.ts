import { combineReducers } from "redux";
import { getDataReducer } from "./data";
import isLoading from "./isLoading";
import skeleton from "./skeleton";

const rootReducer = combineReducers({
  getDataReducer,
  isLoading,
  skeleton,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
