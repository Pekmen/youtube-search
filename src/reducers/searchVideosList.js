const searchVideosList = (state = {}, action) => {
  if (action.type === 'FETCH_SEARCH_VIDEOS_LIST') {
    console.log('FETCH_SEARCH_VIDEOS_LIST___', action.payload);
    return action.payload;
  }
  return state;
};

export default searchVideosList;
