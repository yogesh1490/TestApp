import {combineReducers} from 'redux';
import getMoviesListReducer from './getMoviesListReducer';
import appReducer from './appReducer';

export default combineReducers({
  appReducer,
  getMoviesListReducer,
});
