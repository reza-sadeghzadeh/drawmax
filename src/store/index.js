import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

let store;

// Using redux devtools in dev mode
if (process.env.NODE_ENV === "development") {
  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
          //In dev mode no need for this
        })
      : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if needed
  );
  store = createStore(reducers, enhancer);
} else {
  store = createStore(reducers);
}

export default store;
