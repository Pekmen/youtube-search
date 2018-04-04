const searchVideosList = (state = {}, action) => {
  if (action.type === 'FETCH_SEARCH_VIDEOS_LIST') {
    return action.payload;
  }
  return state;
};

export default searchVideosList;
