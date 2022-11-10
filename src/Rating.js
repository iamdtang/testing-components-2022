export default function Rating(props) {
  const ratingItems = [];
  const count = props.total || 5;

  for (let i = 1; i <= count; i++) {
    ratingItems.push(
      <RatingItem
        itemRatingNumber={i}
        rating={props.rating}
        key={i}
        renderRatingItem={props.children}
      />
    );
  }

  return <>{ratingItems}</>;
}

function RatingItem(props) {
  const isFilled = props.itemRatingNumber <= props.rating;

  return props.renderRatingItem(isFilled, props.itemRatingNumber);
}
