const AUTOSUGGEST_URL = 'https://suggestqueries.google.com/complete/search?client=firefox&ds=yt';
const CORS_PROXY_URL = 'https://cors-anywhere.herokuapp.com/';

export const fetchSearchAutosuggest = (searchTerm) => {
  const FULL_URL = `${CORS_PROXY_URL}${AUTOSUGGEST_URL}&q=${searchTerm}`;
  const request = new Request(FULL_URL, {
    headers: new Headers({
      origin: 'www.youtubesearch.com',
    }),
  });
  const searchAutosuggestPayload = fetch(request).then(response => response.json());
  return {
    type: 'FETCH_SEARCH_AUTOSUGGEST',
    payload: searchAutosuggestPayload,
  };
};
