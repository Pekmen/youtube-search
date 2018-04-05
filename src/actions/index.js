const AUTOSUGGEST_URL = 'https://suggestqueries.google.com/complete/search?client=firefox&ds=yt';
const CORS_PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3';
const YOUTUBE_API_KEY = 'AIzaSyDyB5bG6pVipF8jWCAoODHj3PYv3uXmYBQ';


export const setSearchTerm = (searchTerm) => {
  return {
    type: 'SET_SEARCH_TERM',
    searchTerm,
  };
};

export const fetchSearchAutosuggest = (searchTerm) => {
  const FULL_URL = `${CORS_PROXY_URL}${AUTOSUGGEST_URL}&q=${searchTerm}`;
  const request = new Request(FULL_URL, {
    headers: new Headers({
      origin: 'www.youtubesearch.com',
    }),
  });
  const searchAutosuggestPayload = (searchTerm.length > 0) ? fetch(request).then(response => response.json()) : [];
  return {
    type: 'FETCH_SEARCH_AUTOSUGGEST',
    payload: searchAutosuggestPayload,
  };
};

export const fetchVideosList = (searchTerm, categoryId) => {
  let url = `${YOUTUBE_API_URL}/search?&part=snippet&maxResults=10&type=video&q=${searchTerm}&key=${YOUTUBE_API_KEY}`;
  if (categoryId) url = `${url}&videoCategoryId=${categoryId}`;
  const videosListPayload = fetch(url).then((response) => response.json())
  return {
    type: 'FETCH_SEARCH_VIDEOS_LIST',
    payload: videosListPayload,
  };
};

export const fetchVideosInfo = (videosList) => {
  const videoIds = videosList.map(item => item.id.videoId).join(',');
  const url = `${YOUTUBE_API_URL}/videos?&part=snippet,statistics&id=${videoIds}&key=${YOUTUBE_API_KEY}`;
  const videosInfoPayload = fetch(url).then((response) => response.json());
  return {
    type: 'FETCH_VIDEO_STATISTICS',
    payload: videosInfoPayload,
  };
};

export const fetchVideoCategories = () => {
  const url = `${YOUTUBE_API_URL}/videoCategories?part=snippet&regionCode=US&key=${YOUTUBE_API_KEY}`;
  const videoCategoriesPayload = fetch(url).then((response) => response.json());
  return {
    type: 'FETCH_VIDEO_CATEGORIES',
    payload: videoCategoriesPayload,
  };
};

export const saveVideo = (video) => {
  return {
    type: 'SAVE_VIDEO',
    payload: video,
  };
};

export const setCategoryFilter = (categoryId) => {
  return {
    type: 'SET_CATEGORY_FILTER',
    categoryId,
  };
};

export const setYearFilter = (year) => {
  return {
    type: 'SET_YEAR_FILTER',
    year,
  };
};
