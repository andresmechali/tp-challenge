function getAverageReview(reviews) {
  const { length } = reviews;
  let total = 0;
  reviews.forEach((review) => {
    total += parseFloat(review.starRating);
  });
  return Math.round(total / length);
}

export default {
  getAverageReview,
};
