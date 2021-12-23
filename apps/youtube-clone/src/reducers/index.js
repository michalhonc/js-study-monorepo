import { combineReducers } from 'redux';
import { searchBarReducer } from './searchBarDuck';

const rootReducer = combineReducers({
  videos: searchBarReducer
});

export default rootReducer;
