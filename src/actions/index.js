import {
  AUTOSUGGEST_URL,
  CORS_PROXY_URL,
  YOUTUBE_API_URL,
  YOUTUBE_API_KEY,
  CURRENT_YEAR,
} from '../constants';


export const setSearchTerm = (searchTerm) => {
  return {
    type: 'SET_SEARCH_TERM',
    searchTerm,
  };
};


// The request is first passed to CORS proxy server, to avoid Cross-Origin errors
export const fetchSearchAutosuggest = (searchTerm) => {
  const FULL_URL = `${CORS_PROXY_URL}${AUTOSUGGEST_URL}&q=${searchTerm}`;
  const request = new Request(FULL_URL, {
    headers: new Headers({
      origin: 'www.youtubesearch.com',
    }),
  });
  // fetch only if valid search term is provided
  const searchAutosuggestPayload = (searchTerm.length > 0) ? fetch(request).then(response => response.json()) : [];
  return {
    type: 'FETCH_SEARCH_AUTOSUGGEST',
    payload: searchAutosuggestPayload,
  };
};


// Initial videos from passed search terms. The payload is base from which
// videosInfo array is fetched
export const fetchVideosList = (searchTerm, categoryId, yearPublished) => {
  let url = `${YOUTUBE_API_URL}/search?&part=snippet&maxResults=50&type=video&q=${searchTerm}&key=${YOUTUBE_API_KEY}`;

  // filter queries
  if (categoryId > 0) url = `${url}&videoCategoryId=${categoryId}`;
  if (yearPublished) {
    const yearQuery = `publishedAfter=${yearPublished}-01-01T00:00:00Z&publishedBefore=${yearPublished}-12-31T23:59:59Z`;
    url = `${url}&${yearQuery}`;
  }

  const videosListPayload = fetch(url).then(response => response.json())
  return {
    type: 'FETCH_SEARCH_VIDEOS_LIST',
    payload: videosListPayload,
  };
};


// Main state object holding all relevant info about videos
export const fetchVideosInfo = (videosList) => {
  const videoIds = videosList.map(item => item.id.videoId).join(',');
  const url = `${YOUTUBE_API_URL}/videos?&part=snippet,statistics&id=${videoIds}&key=${YOUTUBE_API_KEY}`;
  const videosInfoPayload = fetch(url).then(response => response.json());
  return {
    type: 'FETCH_VIDEO_STATISTICS',
    payload: videosInfoPayload,
  };
};


// List of Youtube video categories. This is called only once on app start, and result
// is stored inside localstorage
export const fetchVideoCategories = () => {
  const url = `${YOUTUBE_API_URL}/videoCategories?part=snippet&regionCode=US&key=${YOUTUBE_API_KEY}`;
  const videoCategoriesPayload = fetch(url).then(response => response.json());
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
