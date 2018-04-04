const savedVideos = (state = [], action) => {
  if (action.type === 'SAVE_VIDEO') {
    return [
      ...state,
      action.payload,
    ];
  }
  return state;
};

export default savedVideos;
