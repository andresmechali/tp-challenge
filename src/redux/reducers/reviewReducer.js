import data from '../../reviews.json';

import {
  SELECT_REVIEW,
} from '../constants';

const firstReview = data.reviews[0];

const initialState = {
  activeReviewIndex: 0,
  activeReview: firstReview,
};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_REVIEW:
      return {
        activeReview: action.review,
        activeReviewIndex: action.index,
      };
    default:
      return state;
  }
};

export default reviewReducer;
