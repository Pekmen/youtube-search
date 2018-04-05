const savedVideos = (state = [], action) => {
  if (action.type === 'SAVE_VIDEO') {
    const allreadySaved = state.filter(obj => obj.id === action.payload.id).length > 0;
    if (allreadySaved) return state;
    return [
      ...state,
      action.payload,
    ];
  }
  return state;
};

export default savedVideos;
