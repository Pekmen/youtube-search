const videoStatistics = (state = {}, action) => {
  if (action.type === 'FETCH_VIDEO_STATISTICS') {
    return action.payload;
  }
  return state;
};

export default videoStatistics;
