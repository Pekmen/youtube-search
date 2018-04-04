import { combineReducers } from 'redux';
import searchAutosuggest from './searchAutosuggest';
import videosList from './videosList';
import videosInfo from './videosInfo';
import savedVideos from './savedVideos';

const reducer = combineReducers({
  searchAutosuggest,
  videosList,
  videosInfo,
  savedVideos,
});

export default reducer;
