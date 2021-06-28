import thunk from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';
import combineReducer from './reducer/combineReducer';

export default function configureStore() {
  const store = createStore(combineReducer, applyMiddleware(thunk));
  return store;
}
