import { combineReducers } from 'redux';
import searchAutosuggest from './searchAutosuggest';
import searchVideoList from './searchVideosList';

const reducer = combineReducers({
  searchAutosuggest,
  searchVideoList,
});

export default reducer;
