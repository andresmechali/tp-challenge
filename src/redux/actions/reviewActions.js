import {
  SELECT_REVIEW,
} from '../constants';

function selectReview(review, index) {
  console.log(review);
  console.log(index);
  return {
    type: SELECT_REVIEW,
    review,
    index,
  };
}

export default {
  selectReview,
};
