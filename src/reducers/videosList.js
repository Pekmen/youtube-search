const videosList = (state = {}, action) => {
  if (action.type === 'FETCH_SEARCH_VIDEOS_LIST') {
    const videoIds = action.payload.items.map(video => {return {id: video.id}});
    return videoIds;
  }
  return state;
};

export default videosList;
