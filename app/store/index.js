import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunkMiddleware from 'redux-thunk';

import initialState from './initialState';
import rootReducer from './reducers';

const initStore = (state = initialState) => {
  return createStore(
    rootReducer,
    state,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};

export default initStore;
