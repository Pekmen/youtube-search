const searchAutsuggest = (state = [], action) => {
  if (action.type === 'FETCH_SEARCH_AUTOSUGGEST') {
    if (action.payload && action.payload[1]) {
      const cleanedPayload = action.payload[1].map((suggestion, index) => {
        return { id: index, label: suggestion };
      });
      return cleanedPayload;
    }
    return [];
  }
  return state;
};

export default searchAutsuggest;
