import { combineReducers } from 'redux';
import searchAutosuggest from './searchAutosuggest';
import videosList from './videosList';
import videosInfo from './videosInfo';
import savedVideos from './savedVideos';
import videoCategories from './videoCategories';
import filters from './filters';
import searchTerm from './searchTerm';

const reducer = combineReducers({
  searchAutosuggest,
  videosList,
  videosInfo,
  savedVideos,
  videoCategories,
  filters,
  searchTerm,
});

export default reducer;
