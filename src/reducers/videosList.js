const videosList = (state = {}, action) => {
  if (action.type === 'FETCH_SEARCH_VIDEOS_LIST') {
    return action.payload.items;
  }
  return state;
};

export default videosList;
