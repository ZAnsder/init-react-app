import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import { history } from 'router'
import demoReducer from './demo/reducer'
import homeReducer from './home/reducer'

const reducers = combineReducers({
  router: connectRouter(history),
  demo: demoReducer,
  home: homeReducer,
});

type Skip<T, K extends keyof any> = Partial<Pick<T, Extract<keyof T, K>>> &
  Omit<T, K>;

export type RootStore = Skip<ReturnType<typeof reducers>, "router">;

export default reducers;
