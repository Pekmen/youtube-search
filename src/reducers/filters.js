import { CURRENT_YEAR } from '../constants';

const filters = (state = { categoryId: '0', year: CURRENT_YEAR }, action) => {
  if (action.type === 'SET_CATEGORY_FILTER') {
    return {
      categoryId: action.categoryId,
      year: state.year,
    };
  } else if (action.type === 'SET_YEAR_FILTER') {
    return {
      categoryId: state.categoryId,
      year: action.year,
    };
  }
  return state;
};

export default filters;
