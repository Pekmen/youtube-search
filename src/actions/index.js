const AUTOSUGGEST_URL = 'https://suggestqueries.google.com/complete/search?client=firefox&ds=yt';
const CORS_PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3';
const YOUTUBE_API_KEY = 'AIzaSyDyB5bG6pVipF8jWCAoODHj3PYv3uXmYBQ';


export const fetchSearchAutosuggest = (searchTerm) => {
  const FULL_URL = `${CORS_PROXY_URL}${AUTOSUGGEST_URL}&q=${searchTerm}`;
  const request = new Request(FULL_URL, {
    headers: new Headers({
      origin: 'www.youtubesearch.com',
    }),
  });
  const searchAutosuggestPayload = searchTerm ? fetch(request).then(response => response.json()) : [];
  return {
    type: 'FETCH_SEARCH_AUTOSUGGEST',
    payload: searchAutosuggestPayload,
  };
};

export const fetchSearchVideosList = (searchTerm) => {
  const url = `${YOUTUBE_API_URL}/search?&part=snippet&maxResults=50&type=video&q=${searchTerm}&key=${YOUTUBE_API_KEY}`;
  const videoListPayload = fetch(url).then((response) => response.json())
  return {
    type: 'FETCH_SEARCH_VIDEOS_LIST',
    payload: videoListPayload,
  };
};
