const videosInfo = (state = [], action) => {
  if (action.type === 'FETCH_VIDEO_STATISTICS') {
    if (action.payload && action.payload.items) {
      const videsInfoCollection = action.payload.items.map((videoInfo) => {
        return {
          id: videoInfo.id,
          thumbnails: videoInfo.snippet.thumbnails,
          title: videoInfo.snippet.title,
          likes: videoInfo.statistics.likeCount,
          views: videoInfo.statistics.viewCount,
          channel: videoInfo.snippet.channelTitle,
          categoryId: videoInfo.snippet.categoryId,
          year: videoInfo.snippet.publishedAt.substring(0, 4),
        };
      });
      return videsInfoCollection;
    }
    return [];
  }
  return state;
};

export default videosInfo;
