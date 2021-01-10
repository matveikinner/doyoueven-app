import { combineReducers } from 'redux';
import loaderReducer from './loader/loader.reducer';

export default combineReducers({
  loader: loaderReducer,
});
