const videosInfo = (state = [], action) => {
  if (action.type === 'FETCH_VIDEO_STATISTICS') {
    if (action.payload && action.payload.items) {
      return action.payload.items;
    }
    return [];
  }
  return state;
};

export default videosInfo;
