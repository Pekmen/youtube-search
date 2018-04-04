import { combineReducers } from 'redux';
import searchAutosuggest from './searchAutosuggest';
import videosList from './videosList';
import videosInfo from './videosInfo';

const reducer = combineReducers({
  searchAutosuggest,
  videosList,
  videosInfo,
});

export default reducer;
