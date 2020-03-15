import { applyMiddleware, createStore, combineReducers, Store, StoreEnhancer, Dispatch } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import * as reducers from './ducks';
import { ProductsState } from './ducks/products';

export interface State {
  products: ProductsState;
}

const rootReducer = combineReducers(reducers);

export function configureStore(preloadedState?: State): Store<State> {
  const composeEnhancers = composeWithDevTools({});

  const middlewares = [thunkMiddleware, logger];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers: StoreEnhancer<{ dispatch: Dispatch; }, State> = composeEnhancers(...enhancers);

  const store = createStore(rootReducer, preloadedState || {}, composedEnhancers);

  return store;
}

export default configureStore();