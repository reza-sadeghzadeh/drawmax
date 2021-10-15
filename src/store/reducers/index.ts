import { combineReducers } from "redux";
import { getDataReducer } from "./data";
import isLoading from "./isLoading";
import search from "./searchReducer";
import skeleton from "./skeleton";

const rootReducer = combineReducers({
  getDataReducer,
  isLoading,
  skeleton,
  search,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
