import { routerMiddleware } from "connected-react-router";
import { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { history } from "router";
import rootReducer from "./reducers";
import initialState from "./state";

const router = routerMiddleware(history);

const composeEnhancers =
  typeof window === "object" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const middlewares: any[] = [thunkMiddleware, router];

if (process.env.NODE_ENV === "development") {
  middlewares.push(createLogger({ collapsed: true }));
}

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares)
  // other store enhancers if any
);

function configStore() {
  const store = createStore(rootReducer, initialState, enhancer);
  return store;
}

export default configStore();
