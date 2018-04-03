import { combineReducers } from 'redux';
import searchAutosuggest from './searchAutosuggest';
import searchVideoList from './searchVideosList';
import videoStatistics from './videoStatistics';

const reducer = combineReducers({
  searchAutosuggest,
  searchVideoList,
  videoStatistics,
});

export default reducer;
