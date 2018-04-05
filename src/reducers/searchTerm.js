const searchTerm = (state = '', action) => {
  if (action.type === 'SET_SEARCH_TERM') {
    return action.searchTerm;
  }
  return state;
};

export default searchTerm;
