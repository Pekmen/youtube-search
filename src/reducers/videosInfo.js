const videosInfo = (state = [], action) => {
  if (action.type === 'FETCH_VIDEO_STATISTICS') {
    if (action.payload && action.payload.items) {
      const videsInfoCollection = action.payload.items.map((videoInfo) => {
        return {
          id: videoInfo.id,
          thumbnail: videoInfo.snippet.thumbnails.default,
          title: videoInfo.snippet.title,
          likes: videoInfo.statistics.likeCount,
          views: videoInfo.statistics.viewCount,
          channel: videoInfo.snippet.channelTitle,
        };
      });
      return videsInfoCollection;
    }
    return [];
  }
  return state;
};

export default videosInfo;
