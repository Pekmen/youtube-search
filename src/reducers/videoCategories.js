const videoCategories = (state = [], action) => {
  if (action.type === 'FETCH_VIDEO_CATEGORIES') {
    const cleanedCategoryPayload = action.payload.items.map((category) => {
      return {
        id: category.id,
        title: category.snippet.title,
      };
    });
    return cleanedCategoryPayload;
  }
  return state;
};

export default videoCategories;
