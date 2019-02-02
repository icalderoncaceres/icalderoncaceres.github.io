/* import dependencies */
import {createStore, applyMiddleware, combineReducers} from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

/* router */
import {routerReducer, routerMiddleware, push} from 'react-router-redux';

/* export my store */
export const configureStore = (history) => {

  /* thunk */
  const middleware = [thunk, createLogger(), routerMiddleware(history)];

  /* reducers and apply */
  const allReducer = combineReducers({
    main: rootReducer,
    router: routerReducer
  });

  //REturn middleware
  return createStore(allReducer, applyMiddleware(...middleware),);
  // return createStore(rootReducer, applyMiddleware(...middleware));
};
