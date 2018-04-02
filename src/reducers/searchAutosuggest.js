const searchAutsuggest = (state = [], action) => {
  if (action.type === 'FETCH_SEARCH_AUTOSUGGEST') {
    const cleanedPayload = action.payload[1].map((suggestion, index) => {
      return { id: index, label: suggestion };
    });
    return cleanedPayload;
  }
  return state;
};

export default searchAutsuggest;
